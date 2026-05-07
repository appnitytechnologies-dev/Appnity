import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/servicesSlice';
import portfolioReducer from './slices/portfolioSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    services:  servicesReducer,
    portfolio: portfolioReducer,
    contact:   contactReducer,
  },
});
