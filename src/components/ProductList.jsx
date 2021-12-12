import React from "react";
import { AppContext } from "./Layout";
import { useContext } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const products = useContext(AppContext);

    return (
        <div className="products">
            {products.map((item) => 
                <ProductCard key={item.id} product={item} />
            )}
        </div>
    );
};

export default ProductList;
