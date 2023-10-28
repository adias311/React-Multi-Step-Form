import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../actions/formSlice";


export const store = configureStore({
  reducer: {
    formStep: formReducer
  },
});


