import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../../Pages/Auth/authSlice";
import { courseCategoriesReducer } from "../../Pages/Home/Components/FeatureCourses/featureCouresSlice";
import { sliderReducer } from "../../Pages/Home/Components/Slider/sliderSlice";

const rootReducer = {
  reducer: {
    auth: authReducer,
    slider: sliderReducer,
    courseCategories: courseCategoriesReducer,
  },
};

export const store = configureStore(rootReducer);
