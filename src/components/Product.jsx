import React, {useRef} from "react";
import { useProducts } from "./context/productsContext";
import Helmet from "./Helmet";
import ProductCard from "./ProductCard";

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

const Product = ({showHeading = true}) => {
    const filterRef = useRef(null)
    const {products} = useProducts()

    console.log(products);

    const filterToggle = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet title="Product">
            <div className="product">
                <div className="container">
                    <div className="product__header">
                       {showHeading && <h3>product overview</h3>}
                        <div className="product__header__option">
                            <div className="product__header__option__category">
                                {categories.map((item, index) =>
                                    <p key={index}>{item.title}</p>
                                )}
                            </div>
                            <div className="product__header__option__button">
                                <button className="btn btn-white" onClick={filterToggle}><i className="bx bx-filter"></i><span>Filter</span></button>
                                <button className="btn btn-white"><i className="bx bx-search"></i>Search</button>
                            </div>
                        </div>
                        <div className="product__header__filter" ref={filterRef}>
                            <div className="product__header__filter__sort">Sort By</div>
                            <div className="product__header__filter__size">Size</div>
                            <div className="product__header__filter__color">Color</div>
                        </div>
                    </div>
                    <div className="product__list">
                        {products.map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            
        </Helmet>
    );
};


export default Product;
