import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../Database"; 
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: initialEnrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollUser: (state, { payload: { user, course } }) => {
      if (!state.enrollments.some((e: any) => e.user === user && e.course === course)) {
        state.enrollments.push({ _id: uuidv4(), user, course });
      }
    },
    unenrollUser: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === user && e.course === course)
      );
    },
  },
});

export const { enrollUser, unenrollUser } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
