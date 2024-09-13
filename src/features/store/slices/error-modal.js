import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  title: null,
  contents: null,
  onConfirm: null,
};

export const errorModalSlice = createSlice({
  name: 'errorModal',
  initialState,
  reducers: {
    openErrorModal: (state, action) => {
      const { title, contents, onConfirm = null } = action.payload;

      state.isOpen = true;
      state.title = title;
      state.contents = contents;
      state.onConfirm = onConfirm;
    },
    closeErrorModal: (state) => {
      state.isOpen = false;
      state.data = null;
      state.onConfirm = null;
    },
  },
});

export const { openErrorModal, closeErrorModal } = errorModalSlice.actions;

export const errorModalReducer = errorModalSlice.reducer;
