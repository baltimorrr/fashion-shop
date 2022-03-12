import React from "react";
import { useState } from "react";
import { useProducts } from "./context/productsContext";
import ProductModal from "./ProductModal";

const ProductCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false)
    const {toggleFavorite} = useProducts()

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <div className="product__list__item">
                <div className="product__list__item__image">
                    <img src={item.image01} alt="" />
                    <button className="btn btn-white btn-view" onClick={() => setShowModal(true)}>
                        Quick View
                    </button>
                </div>
                <div className="product__list__item__content">
                    <div className="product__list__item__content__left">
                        <p>{item.title}</p>
                        <span>{item.price} VND</span>
                    </div>
                    <div className="product__list__item__content__right" onClick={() => {toggleFavorite(item.id)}}>
                        <i
                            className={`bx bxs-heart favorite-${item.isFavorite ? 'red' : 'gray'}`}
                        ></i>
                    </div>
                </div>
            </div>
            {showModal && <ProductModal open={showModal} handleClose={handleClose} item={item} />}
        </>
    );
};

export default ProductCard;
