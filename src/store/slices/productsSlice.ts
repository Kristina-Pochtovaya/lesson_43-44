import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../types/product';

const initialState: ProductType[] | [] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      return [...state, ...action.payload];
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
