import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  image: string;
  name: string;
  title: string;
  price: string;
  discount?: string;
  createdAt?: string;
  sku: string;
}

const productSlice = createSlice({
  name: 'product',
  initialState: null as Product | null,
  reducers: {
    setProduct(state, action: PayloadAction<Product>) {
      return action.payload;
    },
    clearProduct() {
      return null;
    }
  }
});

export const { setProduct, clearProduct } = productSlice.actions;
export default productSlice.reducer;
