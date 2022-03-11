import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const ProductModal = ({ open = false, handleClose = () => {}, item }) => {
    const [previewImage, setPreviewImage] = useState(item.image01)

    if (typeof document === "undefined") return <div className="modal"></div>;
    return ReactDOM.createPortal(
        <div className={`modal ${open ? "modal__show" : ""}`}>
            <div className="modal__overlay" onClick={handleClose}></div>
            <div className="modal__content">
                <span onClick={handleClose}>
                    <i className="bx bx-x"></i>
                </span>
                
                <div className="modal__images">
                    <div className="modal__images__list">
                        <div className="modal__images__list__item" onClick={() => setPreviewImage(item.image01)}>
                            <img src={item.image01} alt="" />
                        </div>
                        <div className="modal__images__list__item" onClick={() => setPreviewImage(item.image02)}>
                            <img src={item.image02} alt="" />
                        </div>
                        <div className="modal__images__list__item" onClick={() => setPreviewImage(item.image03)}>
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
                </div>
            </div>
        </div>,
        document.querySelector("body")
    );
};

export default ProductModal;
