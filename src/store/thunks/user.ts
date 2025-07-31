import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../axios';
import { CredentialsType } from '../../types/user';
import { setIsAuthedUser, setUserData } from '../slices/userSlice';

export const loginUser = createAsyncThunk(
  'user',
  async (credentials: CredentialsType, { dispatch }) => {
    const response = await api.post(
      '/auth/login',
      {
        ...credentials,
        expiresInMins: 1,
      },
      // @ts-ignore
      { credentials: 'include' }
    );
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    dispatch(setIsAuthedUser(true));
  }
);

export const getUser = createAsyncThunk('user', async (_, { dispatch }) => {
  // try {
  const response = await api.get('/auth/me', {
    // @ts-ignore
    credentials: 'include',
  });

  const { firstName, lastName, image } = response.data;
  dispatch(setUserData({ firstName, lastName, image }));
  // }
  // catch (error) {}
});

export default api;
