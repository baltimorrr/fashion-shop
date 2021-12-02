import React, { useState } from "react";
import CartDrawer from "./CartDrawer";

const Header = () => {
    const [visible, setVisible] = useState(false);
    console.log("render header");
    const handleVisibleCartDrawer = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div className="header">
                <div className="header-container container">
                    <h3 className="header-logo">
                        <span>coza</span> store
                    </h3>
                    <div
                        className="header-icon"
                        onClick={handleVisibleCartDrawer}
                    >
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
            <CartDrawer
                isVisible={visible}
                handleVisibleCartDrawer={handleVisibleCartDrawer}
            />
        </>
    );
};

export default Header;
