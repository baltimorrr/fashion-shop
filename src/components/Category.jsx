import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = (props) => {
    const data = props.data;
    console.log(data);
    return (
        <div className="container">
            <div className="category">
                {data.map((item, index) => (
                    <CategoryCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

Category.propTypes = {
    data: PropTypes.array.isRequired,
};

const CategoryCard = (props) => {
    const category = props.item;
    return (
        <div className="category-card">
            <div className="category-card__image">
                <img src={category.img} alt="" />
                <div className="category-card__content">
                    <div className="category-card__content__child1">
                        <h3>{category.title}</h3>
                        <h5>{category.subtitle}</h5>
                    </div>
                    <Link
                        className="category-card__content__child2"
                        to="/catalog"
                    >
                        shop now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;
