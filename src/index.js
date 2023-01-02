import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Shop from "./components/Page_Shop/ShopClass";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />
                <Route path="/shop" element={ <Shop /> } />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);