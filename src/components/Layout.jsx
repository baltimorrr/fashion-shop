import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Router";
import { ProductProvider } from "./context/productsContext";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="layout">
            <ProductProvider>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="main">
                            <Router />
                        </div>
                        <Footer />
                    </div>
                </BrowserRouter>
            </ProductProvider>
        </div>
    );
};

export default Layout;
