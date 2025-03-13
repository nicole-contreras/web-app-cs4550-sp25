import { createSlice } from "@reduxjs/toolkit";
import { courses as initialCourses } from "../Database";

const initialState = {
  courses: initialCourses,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload }) => {
        state.courses.push(payload);
      },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c: { _id: any; }) => c._id !== courseId);
    },
    updateCourse: (state, { payload: updatedCourse }) => {
      state.courses = state.courses.map((c: { _id: any; }) =>
        c._id === updatedCourse._id ? updatedCourse : c
      );
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
