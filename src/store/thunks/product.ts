import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../axios';

export const getProduct = createAsyncThunk('product', async (id: string) => {
  const response = await api.get(`products/${id}`);
  return response.data;
});
