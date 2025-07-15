import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../types/product';
import { RootState } from '../store';

const initialState: ProductType[] | [] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<ProductType[]>) => action.payload,
  },
});

export const { setProducts } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
