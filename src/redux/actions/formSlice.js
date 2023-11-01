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
      type: "Monthly"
    }, 
    addOns : []
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
    }
  }
});


export const { getStep, setFormPersonal, setFormPlan , setFormAddOns} = formSlice.actions;
export default formSlice.reducer;
