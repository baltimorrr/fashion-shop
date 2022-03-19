import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { useProducts } from "./context/productsContext";

const ProductModal = ({ open = false, handleClose = () => {}, item }) => {
    const [previewImage, setPreviewImage] = useState(item.image01);
    const [quantity, setQuantity] = useState(item.quantity);
    const [size, setSize] = useState(undefined);
    const [color, setColor] = useState(undefined);
    const { cartItems, addToCart } = useProducts();

    const updateQuantity = (type) => {
        if (type === "plus") setQuantity(quantity + 1);
        else setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    };

    const handleAddToCart = () => {
        if (check()) {
            const newAttr = {
                size: size,
                color: color,
                quantity: quantity,
            };
            const newItem = { ...item, ...newAttr };
            addToCart(newItem);
            alert("success");
            handleClose();
        }
    };
    
    const check = () => {
        if(item.category !== 'accessories') {
            if (size === undefined) {
                alert("You haven't chosen size yet");
                return false;
            }
        }
        
        if (color === undefined) {
            alert("You haven't chosen color yet");
            return false
        }
        return true
    };

    if (typeof document === "undefined") return <div className="modal"></div>;
    return ReactDOM.createPortal(
        <div className={`modal ${open ? "modal__show" : ""}`}>
            <div className="modal__overlay" onClick={handleClose}></div>
            <div className="modal__content">
                <span onClick={handleClose}>
                    <i className="bx bx-x modal__content__close"></i>
                </span>

                <div className="modal__images">
                    <div className="modal__images__list">
                        <div
                            className="modal__images__list__item"
                            onClick={() => setPreviewImage(item.image01)}
                        >
                            <img src={item.image01} alt="" />
                        </div>
                        <div
                            className="modal__images__list__item"
                            onClick={() => setPreviewImage(item.image02)}
                        >
                            <img src={item.image02} alt="" />
                        </div>
                        <div
                            className="modal__images__list__item"
                            onClick={() => setPreviewImage(item.image03)}
                        >
                            <img src={item.image03} alt="" />
                        </div>
                    </div>
                    <div className="modal__images__main">
                        <img src={previewImage} alt="" />
                    </div>
                </div>
                <div className="modal__info">
                    <h3 className="modal__info__title">{item.title}</h3>
                    <span className="modal__info__price">{item.price} VND</span>
                    <p className="modal__info__desc">{item.describe}</p>
                    <div className="modal__info__select">
                        <label>Size</label>
                        <select
                            name="size"
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <option value="">Choose an option</option>
                            {item.size.map((item, index) => (
                                <option
                                    key={index}
                                    className="option__size"
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="modal__info__select">
                        <label>Color</label>
                        <select
                            name="colors"
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <option value="">Choose an option</option>
                            {item.colors.map((item, index) => (
                                <option
                                    key={index}
                                    className="option__color"
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="modal__info__quantity">
                        <div
                            className="modal__info__quantity__btn"
                            onClick={() => updateQuantity("minus")}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="modal__info__quantity__input">
                            {quantity}
                        </div>
                        <div
                            className="modal__info__quantity__btn"
                            onClick={() => updateQuantity("plus")}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                    <div className="modal__info__btn">
                        <button
                            className="modal__info__btn__add btn btn-blue"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("body")
    );
};

export default ProductModal;
