import { configureStore } from '@reduxjs/toolkit';
import { errorModalReducer } from './slices/error-modal';

export const store = configureStore({
  reducer: {
    errorModal: errorModalReducer,
  },
});
