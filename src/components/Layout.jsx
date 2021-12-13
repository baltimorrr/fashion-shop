import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Router";
import Footer from "./Footer";
import Header from "./Header";

import productData from "../assets/data/ProductData";

export const AppContext = createContext();

const Layout = () => {
    const [products, setProducts] = useState(productData)

    return (
        <div className="layout">
            <BrowserRouter>
                <AppContext.Provider value={products}>
                    <Header />
                    <div>
                        <Router />
                    </div>
                    <Footer />
                </AppContext.Provider>
            </BrowserRouter>
        </div>
    );
};

export default Layout;
