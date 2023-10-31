import { createSlice } from '@reduxjs/toolkit';

const formSliceStep = createSlice({
  name: "stepSlice",
  initialState: {
    step : 1,
  },
  reducers: {
    getStepSlice: (state, action) => {
      state.step = action.payload.step;
    }
  }
});


export const { getStepSlice } = formSliceStep.actions;
export default formSliceStep.reducer;
