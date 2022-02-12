import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Blog from "../pages/Blog";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog:slug" element={<Product />}/>
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
};

export default Router;
