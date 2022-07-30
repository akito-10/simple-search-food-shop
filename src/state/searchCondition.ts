import type { PayloadAction } from "@reduxjs/toolkit";
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
    setSearchCondition: (state, action: PayloadAction<SearchCondition>) =>
      (state = action.payload),
  },
});

export const { setSearchCondition } = searchConditionSlice.actions;
export const searchConditionReducer = searchConditionSlice.reducer;
