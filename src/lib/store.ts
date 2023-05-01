import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import occupancySlice from "./slices/occupancySlice";
import uiSlice from "./slices/ui";

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    occupancy: occupancySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
