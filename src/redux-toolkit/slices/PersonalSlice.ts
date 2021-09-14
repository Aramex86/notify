import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState3 {
  value: number;
}

const initialState: CounterState3 = {
  value: 0,
};

export const counter2Slice = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    increment3: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement3: (state) => {
      state.value -= 1;
    },
    incrementByAmount3: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment3, decrement3, incrementByAmount3 } =
  counter2Slice.actions;

export default counter2Slice.reducer;
