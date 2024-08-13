import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/shop/Shop.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/shop",
    element: <App />,
  },
], {basename: "/Result-List-de-e-commerce"});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
