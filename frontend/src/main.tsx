import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import  ProtectedRoute from './routes/ProtectedRoutes';
import App from './pages/shop/Shop';
import Auth from './pages/Auth/Auth';


const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Auth />
  },
  {
    path: "/auth/signup",
    element: <Auth />
  },
  {
    path: "/shop",
    element: <ProtectedRoute/>,
    children: [{
      path: "/shop",
      element: <App />
    }]
  }
], { basename: "/Result-List-de-e-commerce" });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
