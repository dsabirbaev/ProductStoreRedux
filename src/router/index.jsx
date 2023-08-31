

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Root from "../Root";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductsItem from "../pages/ProductsItem";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/products/:id",
                element: <ProductsItem/>
            }
        ]   
    },

    {
        path: "/login",
        element: <Login/>
    }
]);

export default router;