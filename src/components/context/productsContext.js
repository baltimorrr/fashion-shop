import { createContext, useContext, useState } from "react";
import productData from "../../assets/data/products";

const ProductContext = createContext();

const ProductProvider = (props) => {
    const [products, setProducts] = useState([...productData.getAllProducts()])
    console.log(products)

    const value = {
        products,
        setProducts,
    }

    return <ProductContext.Provider value={value} {...props}></ProductContext.Provider>;
};

const useProducts = () => {
    const context = useContext(ProductContext);
    if (typeof context === undefined)
        throw new Error("must be within in provider");
    return context;
};

export { useProducts, ProductProvider };
