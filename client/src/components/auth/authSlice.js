import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser, updateUser } from './authApi';

//GET
export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userdata) => {
    const response = await createUser(userdata);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

//GET
export const checkUserAsync = createAsyncThunk(
  'user/checkUserAsync',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);




export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    const response = await updateUser(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async () => {
    
    return null;
  }
);



 export const authreducer = createSlice({
  name: 'user',
  initialState:{
    loggedInUser: JSON.parse(localStorage.getItem('user')) || null,
    status: 'idle',
    error: null,
    userChecked : false
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
        state.loggedInUser = null;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
        state.userChecked = true;
        localStorage.setItem('user', JSON.stringify(action.payload));
        

      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
        state.userChecked = true;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        console.log("LOGOUT REACHED");
        state.loggedInUser = null;
        state.userChecked = false;
        localStorage.removeItem('user'); // Remove user data from localStorage
      });
    
  },
});

// export const { increment } = productSlice.actions;

export const selectLoggedInuser = (state) => state.auth.loggedInUser;
export const selecterror = (state) => state.auth.error;
export const selectUserChecked = (state) => state.auth.userChecked;


export default authreducer.reducer;