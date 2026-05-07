import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    form: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
    sent: false,
  },
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    submitForm(state) {
      state.sent = true;
    },
    resetForm(state) {
      state.form = { name: '', email: '', company: '', message: '' };
      state.sent = false;
    },
  },
});

export const { updateField, submitForm, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
