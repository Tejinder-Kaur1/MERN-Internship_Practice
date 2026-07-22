import { configureStore } from "@reduxjs/toolkit";
import formdata from "./Slice/slice.js";
export const store = configureStore({
  reducer: {
    form: formdata,
  },
});
