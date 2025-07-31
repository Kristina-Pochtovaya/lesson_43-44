import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type SliceUserType = {
  isAuth: boolean;
  firstName: string;
  lastName: string;
  image: string;
};

const initialState: SliceUserType = {
  isAuth: false,
  firstName: '',
  lastName: '',
  image: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthedUser: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isAuth: action.payload,
      };
    },
    setUserData: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        image: string;
      }>
    ) => {
      const { firstName, lastName, image } = action.payload;
      return {
        ...state,
        firstName,
        lastName,
        image,
      };
    },
  },
});

export const { setIsAuthedUser, setUserData } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
