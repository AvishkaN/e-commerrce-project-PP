import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './Slices/ProductSlice';
import clickSlice from './Slices/clickSlice';
import userSlice from './Slices/userSlice';
import cartSlice from './Slices/cartSlice';

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    clicks: clickSlice,
    user: userSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});