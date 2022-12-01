import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export type CommonState = {
  openSidebar: boolean;
  scrollSection: string;
};

const initialState: CommonState = {
  openSidebar: false,
  scrollSection: '',
};

export const alertSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setOpenSidebar(state, action) {
      state.openSidebar = action.payload;
    },

    setScrollSection(state, action) {
      state.scrollSection = action.payload;
    },
  },
});

export const { setOpenSidebar, setScrollSection } = alertSlice.actions;

export const selectOpenSidebar = (state: RootState) => state.common.openSidebar;
export const selectScrollSection = (state: RootState) =>
  state.common.scrollSection;

export default alertSlice.reducer;
