import React from "react";
import CartItems from "../components/CartItems";
import Helmet from "../components/Helmet";

const Cart = () => {
    return (
        <Helmet title="Shopping Cart">
            <div className="cart">
                <div className="cart-container">
                    <CartItems />
                </div>
            </div>
        </Helmet>
    );
};

export default Cart;
