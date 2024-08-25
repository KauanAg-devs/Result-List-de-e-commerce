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

interface ShoppingCartState {
  products: (Product & {quantity: number})[];
  isVisible: boolean;
}

const initialState: ShoppingCartState = {
  products: [],
  isVisible: false,
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product & {quantity: number}>) {
      const productExists = state.products.some(product => product.sku === action.payload.sku);
      
      if (!productExists) {
        state.products.push(action.payload);
      }
    },    
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(product => product.sku !== action.payload);
    },
    updateProduct(state, action: PayloadAction<{sku: string, quantity: number}>) {
      const productIndex = state.products.findIndex(product => product.sku === action.payload.sku);
      state.products[productIndex].quantity = action.payload.quantity;
    },
    clearCart(state) {
      state.products = [];
    },
    toggleCartVisibility(state) {
      state.isVisible = !state.isVisible;
    },
    showCart(state) {
      state.isVisible = true;
    },
    hideCart(state) {
      state.isVisible = false;
    }
  }
});

export const { updateProduct, addProduct, removeProduct, clearCart, toggleCartVisibility, showCart, hideCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
