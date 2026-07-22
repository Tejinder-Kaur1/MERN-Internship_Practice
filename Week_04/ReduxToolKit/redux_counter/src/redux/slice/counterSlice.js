import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.count++;
      console.log(state.count);
    },
    decrementCounter: (state) => {
      if (state.count > 2) {
        state.count--;
        console.log(state.count);
      }
    },
  },
});
export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
