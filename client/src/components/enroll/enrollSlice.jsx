import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddtoEnroll, deleteItemFromEnroll, fetchItemsByUserId, resetEnroll } from './enrollApi';

const initialState = {
  status: 'idle',
  items: [],
};

export const AddtoEnrollAsync = createAsyncThunk(
  'cart/addToEnroll',
  async (item) => {
    const response = await AddtoEnroll(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchItemsByUserIdAsync = createAsyncThunk(
  'cart/fetchItemsByUserId',
  async (userId) => {
    const response = await fetchItemsByUserId(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const deleteItemFromEnrollAsync = createAsyncThunk(
  'enroll/deleteItemFromenroll',
  async ({ userId, courseId }) => {
    const response = await deleteItemFromEnroll(userId, courseId); // Pass both userId and courseId
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const resetEnrollAsync = createAsyncThunk(
  'cart/resetCart',
  async (userId) => {
    const response = await resetEnroll(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const enrollreducer = createSlice({
  name: 'enroll',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddtoEnrollAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AddtoEnrollAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(deleteItemFromEnrollAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromEnrollAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.items.findIndex(item=>item.id===action.payload.id)
        state.items.splice(index,1);
      })
      .addCase(resetEnrollAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetEnrollAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = [];
      })
  },
});

export const { increment } = enrollreducer.actions;

export const selectAllItems = (state) => state.enroll.items;

export default enrollreducer.reducer;