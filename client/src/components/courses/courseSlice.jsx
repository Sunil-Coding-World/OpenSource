import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCourse, fetchCourseById } from './courseApi';

//GET
export const fetchAllCourseAsync = createAsyncThunk(
  'course/fetchAllCourse',
  async () => {
    const response = await fetchCourse();
    const courses = response.data;

    // Store courses in localStorage
    storeCoursesInLocalStorage(courses);

    return courses;
  }
);

const storeCoursesInLocalStorage = (courses) => {
  localStorage.setItem('courses', JSON.stringify(courses));
};

// Function to retrieve courses from localStorage
const getCoursesFromLocalStorage = () => {
  const storedCourses = localStorage.getItem('courses');
  return storedCourses ? JSON.parse(storedCourses) : [];
};

export const fetchAllCourseByIdAsync  = createAsyncThunk(
  'course/fetchProductById',
  async (id) => {
    const response = await fetchCourseById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



 export const CourseSlice = createSlice({
  name: 'courses',
  initialState:{
    course: getCoursesFromLocalStorage(),
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCourseAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCourseAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.course = action.payload;
      })
      .addCase(fetchAllCourseByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCourseByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedCourse = action.payload;
      })
  },
});


export const selectAllCourse = (state) => state.app.course.course;
export const selectCourseById = (state) => state.app.course;


export default CourseSlice.reducer;