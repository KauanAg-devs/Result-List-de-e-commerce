import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shoppingCartReducer from './shoppingCartSlice';

const productPersistConfig = {
  key: 'product',
  storage,
};

const shoppingCartPersistConfig = {
  key: 'shoppingCart',
  storage,
};

const productPersistReducer = persistReducer(productPersistConfig, productReducer);
const shoppingCartPersistReducer = persistReducer(shoppingCartPersistConfig, shoppingCartReducer);


const store = configureStore({
  reducer: {
    product: productPersistReducer,
    shoppingCart: shoppingCartPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
