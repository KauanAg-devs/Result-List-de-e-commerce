import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { router } from './routes/CreateBrowserRouter';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from './store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>

        <AuthProvider>

          <RouterProvider router={router} />

        </AuthProvider>

      </PersistGate>

    </Provider>

  </StrictMode>
);
