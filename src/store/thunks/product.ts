import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk('product', async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
});
