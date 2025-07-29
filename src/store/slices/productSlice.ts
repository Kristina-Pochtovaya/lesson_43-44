import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../types/product';
import { RootState } from '../store';
import { getProduct } from '../thunks/product';

type SliceProductType = {
  hasError: boolean;
  isLoading: boolean;
  product: ProductType | null;
};

const initialState: SliceProductType = {
  hasError: false,
  isLoading: true,
  product: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, _) => {
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    });
    builder.addCase(
      getProduct.fulfilled,
      (_, action: PayloadAction<ProductType>) => {
        return {
          product: action.payload,
          hasError: false,
          isLoading: false,
        };
      }
    );
    builder.addCase(getProduct.rejected, (state, _) => {
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    });
  },
});

export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
