import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "Types/types";

export interface PersonalState {
  personal: CardType[];
}

const initialState: PersonalState = {
  personal: [
    {
      id: `${Math.floor(Math.random() * 100)}`,
      category: "Personal",
      title: "Go to the Grocery",
      summary: "By somethisg for dinner",
      Date: "2021-09-13",
      done: false,
    },
    {
      id: `${Math.floor(Math.random() * 100)}`,
      category: "Personal",
      title: "Make Task 1568",
      summary: "Do the stuff 1",
      Date: "2021-09-14",
      done: false,
    },
    {
      id: `${Math.floor(Math.random() * 100)}`,
      category: "Personal",
      title: "Make Task 1530",
      summary: "Do the stuff 2",
      Date: "2021-09-15",
      done: false,
    },
  ],
};

export const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    addPersonalTask: (state, action: PayloadAction<CardType>) => {
      state.personal = [...state.personal, action.payload];
    },
    donePersonalTask: (state, action: PayloadAction<string>) => {
      state.personal.find((el) => {
        if (el.id === action.payload) {
          el["done"] = true;
        }
      });
    },
    deletePersonalTask: (state, action: PayloadAction<string>) => {
      state.personal = state.personal.filter((el) => el.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPersonalTask, donePersonalTask, deletePersonalTask } =
  personalSlice.actions;

export const personalReducer = personalSlice.reducer;
