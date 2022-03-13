import React from "react";
import ReactDOM from "react-dom";

const CartDrawer = ({ open = false, handleClose = () => {}, cartItems }) => {

    const total = (cartItems) => {
        let money = 0
        cartItems.forEach(element => {
            money += (element.quantity * element.price)
        });
        return money
    }

    if (typeof document === "undefined")
        return <div className="cart-drawer"></div>;
    return ReactDOM.createPortal(
        <div className={`cart-drawer cart-drawer${open ? "__show" : ""}`}>
            <div className="cart-drawer__overlay" onClick={handleClose}></div>
            <div
                className={`cart-drawer__content cart-drawer__content${
                    open ? "__show" : ""
                }`}
            >
                <div className="cart-drawer__content__container">
                    <div className="cart-drawer__content__container__header">
                        <h3 className="cart-drawer__content__container__header__heading">
                            Your Cart
                        </h3>
                        <span onClick={handleClose}>
                            <i className="bx bx-x cart-drawer__content__container__header__close"></i>
                        </span>
                    </div>
                    <div className="cart-drawer__content__container__body">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div className="cart-drawer__content__container__item">
                                    <div className="cart-drawer__content__container__image">
                                        <img
                                            src={item.image01}
                                            alt=""
                                        />
                                    </div>
                                    <div className="cart-drawer__content__container__info">
                                        <p className="cart-drawer__content__container__info__title">
                                            {item.title}
                                        </p>
                                        <span className="cart-drawer__content__container__info__price">
                                            {item.quantity} x {item.price}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="cart-drawer__content__container__info__title">
                                Empty
                            </p>
                        )}
                    </div>
                </div>
                <div className="cart-drawer__content__button">
                    <span className="cart-drawer__content__button__total">
                        Total : {total(cartItems)} VND
                    </span>
                    <button className="cart-drawer__content__button__black">
                        View cart
                    </button>
                </div>
            </div>
        </div>,
        document.querySelector("body")
    );
};

export default CartDrawer;
