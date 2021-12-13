import React from 'react'

const ProductModal = ({modalVisible, handleClickModal, product}) => {
    
    const visible = modalVisible ? "" : "hidden";

    console.log(product);

    return (
        <div className={`modal ${visible}`} onClick={handleClickModal}>
            
        </div>
    )
}

export default ProductModal
