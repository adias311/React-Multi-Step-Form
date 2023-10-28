import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: "stepForm",
  initialState: {
    step: 1,
    data: {
      nama: "",
      emailAddress: "",
      phoneNumber : null
    }
  },
  reducers: {
    getStep: (state, action) => {
      state.step = action.payload.step;
    },
    setFormPersonal : (state , action ) => {
      state.data = action.payload.data;
    }
  }
});

export const { getStep } = formSlice.actions;
export default formSlice.reducer;
