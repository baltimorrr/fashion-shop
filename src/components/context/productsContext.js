import { createContext, useContext, useState } from "react";
import productData from "../../assets/data/products";

const ProductContext = createContext();

const ProductProvider = (props) => {
    const [products, setProducts] = useState([...productData.getAllProducts()]);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteList, setFavoriteList] = useState([]);

    const addToCart = (newItem) => {
        setCartItems((prevItems) => {
            return [...prevItems, newItem];
        });
    };

    const removeFromCart = (productID) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productID)
        );
    };

    const toggleFavorite = (productID) => {
        const updateProducts = products.map((item) => {
            if (item.id === productID) {
                return { ...item, isFavorite: !item.isFavorite };
            }
            return item;
        });
        setProducts(updateProducts);
    };

    const filterProductList = (typeProduct) => {
        typeProduct !== "all products"
            ? setProducts(
                  productData
                      .getAllProducts()
                      .filter((item) => item.category === typeProduct)
              )
            : setProducts([...productData.getAllProducts()]);
    };

    const value = {
        products,
        cartItems,
        favoriteList,
        setProducts,
        setCartItems,
        addToCart,
        removeFromCart,
        toggleFavorite,
        filterProductList,
    };

    return (
        <ProductContext.Provider
            value={value}
            {...props}
        ></ProductContext.Provider>
    );
};

const useProducts = () => {
    const context = useContext(ProductContext);
    if (typeof context === undefined)
        throw new Error("must be within in provider");
    return context;
};

export { useProducts, ProductProvider };
