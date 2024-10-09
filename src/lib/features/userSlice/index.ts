import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from './type';
import { IUser, IUserAdmin } from '@/common/types';
import { authApi, userApi } from '@/lib/services/modules';

const initialState: IUserState = {
  user: undefined,
  listUser : []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      }
    );
    builder.addMatcher(
      userApi.endpoints.getAllUser.matchFulfilled,
      (state, action: PayloadAction<IUserAdmin[]>) => {
        state.listUser = action.payload;
      }
    );
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
