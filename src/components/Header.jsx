import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

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
    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

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
                            <i className="bx bxs-cart"></i>
                            <i className="bx bx-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
