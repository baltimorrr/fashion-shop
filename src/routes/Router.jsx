import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default Router;
