import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import productsReducer from './slices/productsSlice';
import { useDispatch } from 'react-redux';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productReducer,
    products: productsReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
