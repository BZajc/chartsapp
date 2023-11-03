import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./slices/chartSlice";
import labelReducer from "./slices/labelSlice";

const store = configureStore({
  reducer: {
    chart: chartReducer,
    label: labelReducer,
  },
});

export default store;
