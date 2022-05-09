import { configureStore, combineReducers } from "@reduxjs/toolkit";
import colorSlice from "./color";

const store = configureStore({
  reducer: combineReducers({
    [colorSlice.name]: colorSlice.reducer,
  }),
});

export default store;
