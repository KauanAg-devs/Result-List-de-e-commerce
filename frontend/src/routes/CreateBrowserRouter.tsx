import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import ProtectedRoute from "./ProtectedRoutes";
import App from "../pages/shop/Shop";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/cart";
import { ReactNode } from "react";

type RouteObject = {
    path: string;
    element: ReactNode;
    children?: RouteObject[];
};

function createRouter(path: string, element: ReactNode, protectedRoute?: ReactNode): RouteObject {
    if(!protectedRoute) return { path, element };
    return { path, element: protectedRoute, children: [{ path, element }] }
}

export const router = createBrowserRouter([
    createRouter('/auth/login', <Auth/>),
    createRouter('/auth/signUp', <Auth/>),
    createRouter('/shop', <App/>, <ProtectedRoute/>),
    createRouter('/', <Home/>, <ProtectedRoute/>),
    createRouter('/cart', <Cart/>, <ProtectedRoute/>),
    ], {basename: '/Result-List-de-e-commerce'});