import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IEventsUI {
  isOpenModal: boolean;
  modalType: string;
}

type ToggleModal = {
  value: boolean;
  type: string;
};

const initialState: IEventsUI = {
  isOpenModal: false,
  modalType: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleModal: (state, { payload }: PayloadAction<ToggleModal>) => {
      state.isOpenModal = payload.value;
      state.modalType = payload.type;
    },
  },
});

export const { toggleModal } = uiSlice.actions;

export default uiSlice.reducer;
