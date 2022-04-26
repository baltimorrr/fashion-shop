import React, { useRef, useState } from "react";
import { useProducts } from "./context/productsContext";
import Helmet from "./Helmet";
import ProductCard from "./ProductCard";

import { motion } from "framer-motion/dist/framer-motion";

const categories = [
    {
        title: "All Products",
        category: "all",
    },
    {
        title: "Women",
        category: "women",
    },
    {
        title: "Men",
        category: "men",
    },
    {
        title: "Accessories",
        category: "accessories",
    },
];

const Product = ({ showHeading = true }) => {
    const filterRef = useRef(null);
    const { products } = useProducts();
    const [productFiltered, setProductFiltered] = useState(products);

    console.log(products);

    const filterToggle = () => filterRef.current.classList.toggle("active");

    const categoryToggle = (e) => {
        // e.target.classList.toggle("active");
        console.log(e.target.innerText);
        filterProductList(e.target.innerText.toLowerCase());
    };

    const filterProductList = (typeProduct) => {
        typeProduct !== "all products"
            ? setProductFiltered(
                  products.filter((item) => item.category === typeProduct)
              )
            : setProductFiltered(products);
    };

    console.log(productFiltered);

    return (
        <Helmet title="Product">
            <div className="product">
                <div className="container">
                    <div className="product__header">
                        {showHeading && <h3>product overview</h3>}
                        <div className="product__header__option">
                            <div className="product__header__option__category">
                                {categories.map((item, index) => (
                                    <p
                                        key={item.title}
                                        onClick={(e) => categoryToggle(e)}
                                    >
                                        {item.title}
                                    </p>
                                ))}
                            </div>
                            <div className="product__header__option__button">
                                <button
                                    className="btn btn-white"
                                    onClick={filterToggle}
                                >
                                    <i className="bx bx-filter"></i>
                                    <span>Filter</span>
                                </button>
                                <button className="btn btn-white">
                                    <i className="bx bx-search"></i>Search
                                </button>
                            </div>
                        </div>
                        <div
                            className="product__header__filter"
                            ref={filterRef}
                        >
                            <div className="product__header__filter__sort">
                                Sort By
                            </div>
                            <div className="product__header__filter__size">
                                Size
                            </div>
                            <div className="product__header__filter__color">
                                Color
                            </div>
                        </div>
                    </div>
                    <div className="product__list">
                        {productFiltered.map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Product;
