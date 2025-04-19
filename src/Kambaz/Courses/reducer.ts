import { createSlice } from "@reduxjs/toolkit";
import * as Database from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: Database.courses,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      const newCourse: any = { 
        _id: uuidv4(),
        name: course.name,
        number: uuidv4(),
        startDate: "",
        endDate: "",
        department: "",
        description: course.description,
        credits: "",
      };
      state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (c: any) => c._id !== courseId
      );
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) => 
        c._id === course._id ? course : c
      ) as any; 
    },
  },
});
export const { addCourse, deleteCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
