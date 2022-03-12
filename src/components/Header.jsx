import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import { useProducts } from "./context/productsContext";

const mainNav = [
    {
        display: "Home",
        path: "/",
    },
    {
        display: "Shop",
        path: "/catalog",
    },
    {
        display: "Cart",
        path: "/cart",
    },
    {
        display: "Blog",
        path: "/blog",
    },
    {
        display: "About",
        path: "/blog",
    },
    {
        display: "Contact",
        path: "/blog",
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const { cartItems, favoriteList } = useProducts();

    const handleScrollHeader = () => {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            headerRef.current.classList.add("shrink");
        } else {
            headerRef.current.classList.remove("shrink");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollHeader);
        return () => {
            window.removeEventListener("scroll", handleScrollHeader);
        };
    }, []);

    console.log(cartItems);

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__main">
                    <div className="header__left">
                        <div className="header__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="header__nav">
                            {mainNav.map((item, index) => (
                                <div className="header__nav__item" key={index}>
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__icons">
                            <i className="bx bx-search"></i>
                            <div className="header__icons__item">
                                <i className="bx bxs-cart"></i>
                                {cartItems.length > 0 && (
                                    <div className="header__icons__count">
                                        {cartItems.length}
                                    </div>
                                )}
                            </div>
                            <div className="header__icons__item">
                                <i className="bx bx-heart"></i>
                                {favoriteList.length > 0 && (
                                    <div className="header__icons__count">
                                        {favoriteList.length}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
