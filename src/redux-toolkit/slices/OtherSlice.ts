import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState2 {
  value: number;
}

const initialState: CounterState2 = {
  value: 0,
};

export const counter3Slice = createSlice({
  name: "counter3",
  initialState,
  reducers: {
    increment2: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement2: (state) => {
      state.value -= 1;
    },
    incrementByAmount2: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment2, decrement2, incrementByAmount2 } =
  counter3Slice.actions;

export default counter3Slice.reducer;
