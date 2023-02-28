import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: true,
  coursesCategories: [],
};

export const courseCategoriesSlice = createSlice({
  name: "courseCategory",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseCatogories.fulfilled, (state, action) => {
        state.coursesCategories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCourseCatogories.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCourseCatogories.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const fetchCourseCatogories = createAsyncThunk(
  "courseCategories/fetchCourseCategories",
  async () => {
    const response = await fetch("http://localhost:3004/courseCategories");
    const data = await response.json();
    return data;
  }
);

export const courseCategoriesAction = courseCategoriesSlice.actions;
export const courseCategoriesReducer = courseCategoriesSlice.reducer;
export const courseCategoriesSelector = (state) => state.courseCategories;
