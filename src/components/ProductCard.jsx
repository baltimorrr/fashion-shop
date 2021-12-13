import React, { useState } from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleClickModal = (id) => {
        setModalVisible(!modalVisible);
    };

    return (
        <div className="product-card">
            <img src={product.imageURL} alt="" />
            <p>{product.title}</p>
            <span>{product.price}</span>
            <button className="btn-dark" onClick={handleClickModal}>
                Quick View
                <ProductModal
                    modalVisible={modalVisible}
                    handleClickModal={handleClickModal}
                    product={product}
                />
            </button>
        </div>
    );
};

export default ProductCard;
