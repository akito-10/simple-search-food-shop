import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { DirectionPosition } from "src/model/client/directionPosition";

const initialState: DirectionPosition = null;

const directionPositionSlice = createSlice({
  name: "directionPosition",
  initialState: initialState as DirectionPosition,
  reducers: {
    clearDirectionPosition: () => initialState,
    setDirectionPosition: (state, action: PayloadAction<DirectionPosition>) =>
      (state = action.payload),
  },
});

export const { clearDirectionPosition, setDirectionPosition } =
  directionPositionSlice.actions;
export const directionPositionReducer = directionPositionSlice.reducer;
