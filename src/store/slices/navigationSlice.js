import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentPage: 'Home',
    selectedService: null,
  },
  reducers: {
    navigate(state, action) {
      const { page, service } = action.payload;
      state.currentPage = page;
      if (service !== undefined) state.selectedService = service;
    },
  },
});

export const { navigate } = navigationSlice.actions;
export default navigationSlice.reducer;
