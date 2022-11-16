import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export type CommonState = {
  openSidebar: boolean;
};

const initialState: CommonState = {
  openSidebar: true,
};

export const alertSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setOpenSidebar(state, action) {
      state.openSidebar = action.payload;
    },
  },
});

export const { setOpenSidebar } = alertSlice.actions;

export const selectOpenSidebar = (state: RootState) => state.common.openSidebar;

export default alertSlice.reducer;
