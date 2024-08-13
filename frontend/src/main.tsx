import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/shop/Shop.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from './pages/Auth/Auth.tsx';

const router = createBrowserRouter([
  {
    path: "/shop",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth/>
  }
], {basename: "/Result-List-de-e-commerce"});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
