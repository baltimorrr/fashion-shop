import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="layout">
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="main">
                        <Router />
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default Layout;
