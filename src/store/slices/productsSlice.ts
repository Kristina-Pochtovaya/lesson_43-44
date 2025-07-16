import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getProducts } from '../thunks/products';
import { ProductType } from '../../types/product';

type SliceProductsType = {
  hasError: boolean;
  isLoading: boolean;
  products: ProductType[] | [];
};

const initialState: SliceProductsType = {
  hasError: false,
  isLoading: true,
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, _) => {
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    });
    builder.addCase(
      getProducts.fulfilled,
      (_, action: PayloadAction<{ products: ProductType[] }>) => {
        return {
          hasError: false,
          isLoading: false,
          products: action.payload.products,
        };
      }
    );
    builder.addCase(getProducts.rejected, (state, _) => {
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    });
  },
});

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
