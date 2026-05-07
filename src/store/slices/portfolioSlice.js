import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    activeFilter: 'All',
  },
  reducers: {
    setFilter(state, action) {
      state.activeFilter = action.payload;
    },
  },
});

export const { setFilter } = portfolioSlice.actions;
export default portfolioSlice.reducer;
