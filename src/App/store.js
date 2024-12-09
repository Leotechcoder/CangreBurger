import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Slice/productSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
