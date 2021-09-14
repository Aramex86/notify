import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkCard } from "Types/types";

export interface WorkState {
  work: WorkCard[];
}

const initialState: WorkState = {
  work: [
    {
      id: "1",
      category: "Work",
      title: "Make Task 1562",
      summary: "Do the stuff",
      date: "2021-09-12",
    },
    {
      id: "2",
      category: "Work",
      title: "Make Task 1568",
      summary: "Do the stuff 1",
      date: "2021-09-13",
    },
    {
      id: "3",
      category: "Work",
      title: "Make Task 1530",
      summary: "Do the stuff 2",
      date: "2021-09-14",
    },
  ],
};

export const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = workSlice.actions;

export const workreducer = workSlice.reducer;
