import { configureStore } from "@reduxjs/toolkit";
import { directionPositionReducer } from "src/state/directionPosition";
import { searchConditionReducer } from "src/state/searchCondition";

export const store = configureStore({
  reducer: {
    directionPosition: directionPositionReducer,
    searchCondition: searchConditionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
