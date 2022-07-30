import { createSlice } from "@reduxjs/toolkit";
import type { SearchCondition } from "src/model/client/searchCondition";

const initialState: SearchCondition = {
  range: 3,
  card: 0,
  midnight: 0,
};

const searchConditionSlice = createSlice({
  name: "searchCondition",
  initialState,
  reducers: {
    setRange: (state, action) => {
      state.range = action.payload.range;
    },
    setCard: (state, action) => {
      state.card = action.payload.card;
    },
    setMidnight: (state, action) => {
      state.midnight = action.payload.midnight;
    },
  },
});

export const { setCard, setMidnight, setRange } = searchConditionSlice.actions;
export const searchConditionReducer = searchConditionSlice.reducer;
