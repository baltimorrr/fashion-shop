import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Router";
import Footer from "./Footer";

import Header from "./Header";

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div>
                    <Router />
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Layout;
