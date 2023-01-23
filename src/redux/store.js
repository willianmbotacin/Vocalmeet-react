import { configureStore } from '@reduxjs/toolkit';
import paginationDataReducer from './paginationDataSlice';

export default configureStore({
  reducer: {
    paginationData: paginationDataReducer,
  }
})