
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  username: string;
  isLoggedIn: boolean;
}


const initialState: LoginState = {
  username: localStorage.getItem('username') || '',  
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,  
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);  
    },
    logout(state) {
      state.username = '';  
      state.isLoggedIn = false;  
      localStorage.removeItem('username');  
      localStorage.setItem('isLoggedIn', 'false');  
    },
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
      localStorage.setItem('isLoggedIn', String(action.payload));  
    },
  },
});

export const { setUsername, logout, setLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;
