import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    name: "",
    email: "",
    age: "",
  },
  submittedData: null,
};
export const userData = createSlice({
  name: "UserForm",
  initialState,
  reducers: {
    updateField: (state, action) => {
      // state.push(action.payload);
      state.formData[action.payload.field] = action.payload.value;
    },

    submitForm: (state) => {
      // state.push(action.payload);
      state.submittedData = state.formData;
    },

    resetForm: (state) => {
      // state.formData = initialState;
      state.formData = initialState.formData;
    },
  },
});

export const { updateField, submitForm, resetForm } = userData.actions;
export default userData.reducer;
