import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('products', async () => {
  const response = await fetch('https://dummyjson.com/products?limit=5');
  return response.json();
});
