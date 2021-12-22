import React, { useRef } from "react";

const ProductModal = ({ modalVisible, handleClickModal, product }) => {
    const ref = useRef(null);
    const visible = modalVisible ? "" : "hidden";

    const handleAddToCart = () => {
        console.log(product);
    };

    const handleClickOutModal = (e) => {
        console.log(e.target);
        console.log(ref.current);
            handleClickModal()
    }

    return (
        <div className={`modal ${visible}`}>
            <div className={`modal-container ${visible}`} ref={ref} >
                <div className="modal-picture">
                    <img src={product.imageURL} alt="" />
                </div>
                <div className="modal-info">
                    <div className="modal-text">
                        <h4>{product.title}</h4>
                        <span>$ {product.price}</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="modal-button">
                        <button
                            className="button button-blue"
                            onClick={handleAddToCart}
                        >
                            add to cart
                        </button>
                    </div>
                </div>
                <button onClick={handleClickOutModal}>click out</button>
            </div>
        </div>
    );
};

export default ProductModal;
