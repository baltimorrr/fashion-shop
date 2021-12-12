import React from 'react'

const ProductCard = ({product}) => {
    
    const handleQuickView = (id) => {
        console.log(id);
    }

    return (
        <div className="product-card">
            <img src={product.imageURL} alt="" />
            <p>{product.title}</p>
            <span>{product.price}</span>
            <button className="btn-dark" onClick={() => handleQuickView(product.id)}>Quick View</button>
        </div>
    )
}

export default ProductCard
