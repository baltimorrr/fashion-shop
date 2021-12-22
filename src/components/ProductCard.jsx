import React, { useRef, useState } from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
    const [modalVisible, setModalVisible] = useState(false);

    console.log('render pro card')

    const handleClickModal = (id) => {
        setModalVisible(!modalVisible)
    };

    return (
        <div className="product-card">
            <img src={product.imageURL} alt="" />
            <p>{product.title}</p>
            <span>{product.price}</span>
            <button className="btn-dark" onClick={handleClickModal}>
                Quick View
                
            </button>
            <ProductModal
                    modalVisible={modalVisible}
                    handleClickModal={handleClickModal}
                    product={product}
                />
        </div>
    );
};

export default ProductCard;
