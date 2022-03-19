import React, { useState } from "react";
import { useProducts } from "./context/productsContext";

const CartItems = () => {
    const { cartItems, setCartItems } = useProducts();

    const updateCartItems = (item, index) => {
        const newCart = [
            ...cartItems.slice(0, index),
            item,
            ...cartItems.slice(index + 1),
        ];
        setCartItems(newCart);
    };

    return (
        <div className="cart__table">
            <table className="cart__table__list">
                <tr className="cart__table__list__header">
                    <th className="column-1">PRODUCT</th>
                    <th className="column-2">PRICE</th>
                    <th className="column-3">QUANTITY</th>
                    <th className="column-4">TOTAL</th>
                </tr>
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <CartItem
                            item={item}
                            key={index}
                            index={index}
                            updateCartItems={updateCartItems}
                        />
                    ))
                ) : (
                    <div className="cart__table__empty">Empty</div>
                )}
            </table>
        </div>
    );
};

const CartItem = ({ item, index, updateCartItems }) => {
    const [currentQuantity, setCurrentQuantity] = useState(item.quantity);
    const {removeFromCart} = useProducts()

    const newItem = { ...item, quantity: currentQuantity };

    const updateQuantity = (type) => {
        if (type === "plus") {
            setCurrentQuantity(currentQuantity + 1);
        } else
            setCurrentQuantity(
                currentQuantity - 1 < 1 ? 1 : currentQuantity - 1
            );
        console.log(newItem);
        if (type === "plus")
            updateCartItems({ ...item, quantity: currentQuantity + 1 }, index);
        else
            updateCartItems(
                {
                    ...item,
                    quantity:
                        currentQuantity - 1 === 0 ? 1 : currentQuantity - 1,
                },
                index
            );
    };

    return (
        <tr className="cart__table__list__item">
            <td className="column-1">
                <div className="cart__table__list__item__image">
                    <img src={item.image01} alt="" />
                    <div className="cart__table__list__item__image__delete">
                        <i className="bx bx-x" onClick={() => removeFromCart(item.id)}></i>
                    </div>
                </div>
                <span className="cart__table__list__item__title">
                    {item.title}
                </span>
            </td>
            <td className="column-2">{item.price}</td>
            <td className="column-3">
                <div className="quantity">
                    <div
                        className="quantity__btn"
                        onClick={() => updateQuantity("minus")}
                    >
                        <i className="bx bx-minus"></i>
                    </div>
                    <div className="quantity__input">{currentQuantity}</div>
                    <div
                        className="quantity__btn"
                        onClick={() => updateQuantity("plus")}
                    >
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
            </td>
            <td className="column-4">{item.quantity * item.price}</td>
        </tr>
    );
};

export default CartItems;
