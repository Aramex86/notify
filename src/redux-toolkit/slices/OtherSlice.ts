import { CardType } from "./../../Types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OtherState {
  other: CardType[];
}

const initialState: OtherState = {
  other: [
    {
      id: `${Math.floor(Math.random() * 100)}`,
      category: "Other",
      title: "Go to the Grocery",
      summary: "By somethisg for dinner",
      Date: "2021-09-13",
      done: false,
    },
    {
      id: `${Math.floor(Math.random() * 100)}`,
      category: "Other",
      title: "Make Task 1568",
      summary: "Do the stuff 1",
      Date: "2021-09-14",
      done: false,
    },
    {
      id: `${Math.floor(Math.random() * 100)}`,
      category: "Other",
      title: "Make Task 1530",
      summary: "Do the stuff 2",
      Date: "2021-09-15",
      done: false,
    },
  ],
};

export const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    addOtherTask: (state, action: PayloadAction<CardType>) => {
      state.other = [...state.other, action.payload];
    },
    doneOtherTask: (state, action: PayloadAction<string>) => {
      state.other.find((el) => {
        if (el.id === action.payload) {
          return (el["done"] = true);
        }
      });
    },
    deleteOtherTask: (state, action: PayloadAction<string>) => {
      state.other = state.other.filter((el) => el.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOtherTask, doneOtherTask, deleteOtherTask } =
  otherSlice.actions;

export const otherReducer = otherSlice.reducer;
