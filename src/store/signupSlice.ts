import { createSlice } from '@reduxjs/toolkit';

export interface SignUpState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: SignUpState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
    },
    resetSignup(state) {
      state.username = '';
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
    }
  }
});

export const { setUsername, setEmail, setPassword, setConfirmPassword, resetSignup } = signUpSlice.actions;
export default signUpSlice.reducer;