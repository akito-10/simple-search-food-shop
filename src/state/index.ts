import { configureStore } from "@reduxjs/toolkit";
import { searchConditionReducer } from "src/state/searchCondition";

export const store = configureStore({
  reducer: { searchCondition: searchConditionReducer },
});

export type RootState = ReturnType<typeof store.getState>;
