import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "Types/types";

export interface WorkState {
  work: CardType[];
}

const initialState: WorkState = {
  work: [
    {
      id: "1",
      category: "Work",
      title: "Make Task 1562",
      summary: "Do the stuff",
      Date: "2021-09-13",
      done: false,
    },
    {
      id: "2",
      category: "Work",
      title: "Make Task 1568",
      summary: "Do the stuff 1",
      Date: "2021-09-14",
      done: false,
    },
    {
      id: "3",
      category: "Work",
      title: "Make Task 1530",
      summary: "Do the stuff 2",
      Date: "2021-09-15",
      done: false,
    },
  ],
};

export const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    addWorkTask: (state, action: PayloadAction<CardType>) => {
      state.work = [...state.work, action.payload];
    },
    doneWorkTask: (state, action: PayloadAction<string>) => {
      state.work.find((el) => {
        if (el.id === action.payload) {
          el["done"] = true;
        }
      });
    },
    deleteWorkTask: (state, action: PayloadAction<string>) => {
      state.work = state.work.filter((el) => el.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWorkTask, doneWorkTask, deleteWorkTask } = workSlice.actions;

export const workReducer = workSlice.reducer;
