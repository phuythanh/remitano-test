import { createSlice } from '@reduxjs/toolkit';
import { ACCESS_TOKEN_KEY } from 'app/apis/common/constants';
import { decodedToken, validateToken } from 'app/utils/token';
interface IAuth {
  token: string;
  email: string;
}
const initialState: IAuth = {
  token: localStorage.getItem(ACCESS_TOKEN_KEY) || '',
  email: decodedToken(localStorage.getItem(ACCESS_TOKEN_KEY) || '')?.email || '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToken: (state, action) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.token);
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
  },
});

export const { addToken } = authSlice.actions;
export const authorized = (state: any) => validateToken(state.auth.token);
export const emailLoggedIn = (state: any) => state.auth.email;
export default authSlice.reducer;
