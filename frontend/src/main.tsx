import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/shop/Shop.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/shop",
    element: <App />,
  },
  {
    path: "/home",
    element: (<h1>Home</h1>)
  }
], {basename: "/Result-List-de-e-commerce"});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
