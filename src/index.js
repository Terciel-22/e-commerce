import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/index.css";
import App from "./pages/Home/App";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/Account/Account";

import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />
                <Route path="/shop" element={ <Shop /> } />
                <Route path="/blog" element={ <Blog /> } />
                <Route path="/cart" element={ <Cart />} />
                <Route path="/register" element={ <Account />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);