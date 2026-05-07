import { createSlice } from '@reduxjs/toolkit';

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    activeCategory: 'All',
  },
  reducers: {
    setCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const { setCategory } = servicesSlice.actions;
export default servicesSlice.reducer;
