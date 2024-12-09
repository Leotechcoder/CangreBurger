import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      name: 'Hop Supply',
      description: 'Queso, jamón, panceta',
      price: 8300,
      oldPrice: 8900,
      image: '/background-2.webp',
      bestSeller: true,
    },
    {
      name: 'Fugazzeta',
      description: 'Pizza tradicional',
      price: 7900,
      image: '/background-4.avif',
      bestSeller: true,
    },
    {
      name: 'Big Club',
      description: 'Doble carne, doble queso',
      price: 6400,
      oldPrice: 7000,
      image: '/background-5.avif',
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
