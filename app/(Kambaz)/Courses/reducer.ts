import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
/* eslint-disable @typescript-eslint/no-explicit-any */

const initialState = {
    courses: [],
    allCourses: [],
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course }) => {
            const newCourse = { ...course, _id: uuidv4() };
            state.allCourses = [...state.allCourses, newCourse] as any;
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.allCourses = state.allCourses.filter(
                (course: any) => course._id !== courseId
            );
        },
        updateCourse: (state, { payload: course }) => {
            state.allCourses = state.allCourses.map((c: any) =>
                c._id === course._id ? course : c
            ) as any;
        },
        setCourses: (state, { payload: courses }) => {
            state.courses = courses;
        },
        setAllCourses: (state, { payload: allCourses }) => {
            state.allCourses = allCourses;
        },
    },
});
export const { addNewCourse, deleteCourse, updateCourse, setCourses, setAllCourses } =
    coursesSlice.actions;
export default coursesSlice.reducer;