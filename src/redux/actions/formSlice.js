import { createSlice } from '@reduxjs/toolkit';


const formSlice = createSlice({
  name: "stepForm",
  initialState: {
    step: 1,
    data: {
      nama: "",
      emailAddress: "",
      phoneNumber: ""
    },
    plan: {
      name: "",
      type: "Monthly",
      price: 0
    },
    addOns: {
      name: null
    },
    summary: {

    }
  },
  reducers: {
    getStep: (state, action) => {
      state.step = action.payload.step;
    },
    setFormPersonal: (state, action) => {
      state.data = action.payload.data;
      console.log(state.data)
    },
    setFormPlan: (state, action) => {
      state.plan = action.payload.plan;
    },
    setFormAddOns: (state, action) => {
      state.addOns = action.payload.addOns;
    },
    setSubmitForm: (state, action) => {
      state.summary = action.payload.summary;
    }
  }
});

export const { getStep, setFormPersonal, setFormPlan, setFormAddOns , setSubmitForm } = formSlice.actions;
export default formSlice.reducer;
