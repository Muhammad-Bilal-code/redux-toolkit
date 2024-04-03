import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: { value: 0 },
  name: "counter",
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      console.log(state);
      console.log(action);
      console.log(action.payload);
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
