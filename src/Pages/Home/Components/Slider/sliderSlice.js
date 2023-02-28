import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderItem: [],
  isLoading: true,
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.sliderItem = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSlider.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSlider.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});
export const fetchSlider = createAsyncThunk("slider/fetchSlider", async () => {
  //await
  const response = await fetch("http://localhost:3004/slider");
  const data = await response.json();
  return data;
});
export const sliderAction = sliderSlice.actions;
export const sliderReducer = sliderSlice.reducer;
export const sliderSelector = (state) => state.slider;
