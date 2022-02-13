import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const HeroSlider = (props) => {
    const data = props.data;
    const [activeSlide, setActiveSlide] = useState(2);

    const nextSlide = () => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
        setActiveSlide(index)
    }

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    return (
        <div className="hero-slider">
            {data.map((item, index) => (
                <HeroSliderItem
                    key={index}
                    item={item}
                    active={index === activeSlide}
                />
            ))}
            <div className="hero-slider__left" onClick={prevSlide}>
                <i class="bx bx-caret-left"></i>
            </div>
            <div className="hero-slider__right" onClick={nextSlide}>
                <i class="bx bx-caret-right"></i>
            </div>
        </div>
    );
};

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
};

const HeroSliderItem = (props) => {
    const navigate = useNavigate()

    const goToShop = () => {
        navigate('/catalog')
    }

    return (
        <div
            className={`hero-slider__item ${props.active ? 'active' : ''}`}
            style={{
                backgroundImage: `url(${props.item.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <div className="container">
                <div className="hero-slider__item__content">
                    <div className="hero-slider__item__content__inner">
                        <span className="hero__subtitle">
                            {props.item.subtitle}
                        </span>
                        <span className="hero__title">{props.item.title}</span>
                        <button className="btn btn-blue" onClick={goToShop}>
                                Shop now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
