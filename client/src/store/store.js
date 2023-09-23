import { configureStore } from '@reduxjs/toolkit';
import authreducer from '../components/auth/authSlice';
import coursereducer from '../components/courses/courseSlice';
import enrollreducer from "../components/enroll/enrollSlice";
export const store = configureStore({
  reducer: {
    auth: authreducer,
    app: coursereducer,
    enroll:enrollreducer,
  }
});