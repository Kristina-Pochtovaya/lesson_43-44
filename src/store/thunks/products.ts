import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../axios';

export const getProducts = createAsyncThunk('products', async () => {
  const response = await api.get('products?limit=5');
  return response.data;
});
