import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOccupancy {
  occupancy: OccupancyType[] | [];
}

type OccupancyDefault = number | string;
type OccupancyType = {
  id: OccupancyDefault;
  budgeted: OccupancyDefault;
  occupancyNumbers: OccupancyDefault;
  comps: OccupancyDefault;
  month: string;
};

const initialState: IOccupancy = {
  occupancy: [],
};

export const occupancySlice = createSlice({
  name: "occupancy",
  initialState,
  reducers: {
    addOccupancy: (state, { payload }: PayloadAction<OccupancyType>) => {
      state.occupancy = [...state.occupancy, payload];
    },
  },
});

export const { addOccupancy } = occupancySlice.actions;
export default occupancySlice.reducer;
