import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { loginUser } from '../thunks/user';

type SliceUserType = {
  hasError: boolean;
  isLoading: boolean;
  isAuth: boolean;
};

const initialState: SliceUserType = {
  hasError: false,
  isLoading: true,
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(loginUser.fulfilled, () => {
      return {
        isAuth: true,
        hasError: false,
        isLoading: false,
      };
    });
    builder.addCase(loginUser.rejected, (state, _) => {
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    });
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
