import TokenService from '@/common/utils/tokenService';
import { IAuthState } from './type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authApi } from '@/lib/services/modules/authService';
import { ILoginPayload, ILoginResponse } from '@/lib/services/modules/authService/type';

const initialState: IAuthState = {
  isAuthenticated: false,
  token: TokenService.getToken() || { accessToken: '' },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = { accessToken: '' };
      TokenService.setToken('');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<ILoginResponse>) => {
        state.isAuthenticated = true;
        state.token = { accessToken: action.payload.token };
        TokenService.setToken(action.payload.token);
      },
    );
  },
});

export const { setAuthenticated, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
