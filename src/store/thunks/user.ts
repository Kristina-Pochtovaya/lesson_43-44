import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../axios';
import { CredentialsType } from '../../types/user';

export const loginUser = createAsyncThunk(
  'user',
  async (credentials: CredentialsType) => {
    const response = await api.post(
      '/auth/login',
      {
        ...credentials,
      },
      // @ts-ignore
      { credentials: 'include' }
    );
    localStorage.setItem('auth', response.data.accessToken);
  }
);
