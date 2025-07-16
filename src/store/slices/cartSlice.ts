import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProductType } from '../../types/product';

const initialState: ProductType[] | [] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const newState = [...state, action.payload];
      const uniqueProducts = newState.filter(
        (item, index, array) =>
          index === array.findIndex((obj) => obj.id === item.id)
      );
      return uniqueProducts;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectProductsFromCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
