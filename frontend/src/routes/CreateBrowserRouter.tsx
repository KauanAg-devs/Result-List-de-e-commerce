import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import ProtectedRoute from "./ProtectedRoutes";
import App from "../pages/shop/Shop";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import { ReactNode } from "react";
import { ProductDetails } from "../pages/product-details/ProductDetails";
import { Checkout } from "../pages/checkout/Checkout";

type RouteObject = {
    path: string;
    element: ReactNode;
    children?: RouteObject[];
};

function createRouter(path: string, element: ReactNode, protectedRoute?: ReactNode): RouteObject {
    if(!protectedRoute) return { path, element };
    return { path, element: protectedRoute, children: [{ path, element }] }
}

const noProtectedroutes = [
    createRouter('/auth/login', <Auth/>),
    createRouter('/auth/signUp', <Auth/>),
]

const protectedRoutes = [
    createRouter('/shop', <App/>, <ProtectedRoute/>),
    createRouter('/shop/details/:sku', <ProductDetails/>, <ProtectedRoute/>),
    createRouter('/', <Home/>, <ProtectedRoute/>),
    createRouter('/cart', <Cart/>, <ProtectedRoute/>),
    createRouter('/checkout', <Checkout/>, <ProtectedRoute/>),
]

export const router = createBrowserRouter([
    ...noProtectedroutes,
    ...protectedRoutes
    ], {basename: '/Result-List-de-e-commerce'});