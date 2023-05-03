import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PrelimState = {
  propertyName: string;
  propertyAddress: string;
  propertyType: string;
  yearBuilt: string;
  managementCompany: string;
  website: string;
  unitCount: string;
  downUnits: string;
  ner: string;
};

const initialState: { questions: PrelimState } = {
  questions: {
    propertyName: "",
    propertyAddress: "",
    propertyType: "",
    yearBuilt: "",
    managementCompany: "",
    website: "",
    unitCount: "",
    downUnits: "",
    ner: "",
  },
};

export const prelimQuestionsSlice = createSlice({
  name: "prelimQuestions",
  initialState,
  reducers: {
    saveQuestions: (
      state,
      { payload }: PayloadAction<{ questions: PrelimState }>
    ) => {
      state.questions = payload.questions;
    },
  },
});

export const { saveQuestions } = prelimQuestionsSlice.actions;
export default prelimQuestionsSlice.reducer;
