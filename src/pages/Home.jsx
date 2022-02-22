import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Category from '../components/Category';
import Product from '../components/Product';

import heroSliderData from '../assets/data/hero-slider';
import categories from '../assets/data/categories';
import productData from '../assets/data/products';



const Home = () => {
    const productList = productData.getAllProducts()
    return (
        <Helmet title="Home">
            <div className="home">
                <HeroSlider data={heroSliderData}/>

                <Category data={categories} />

                <Product data={productList} />
            </div>
        </Helmet>
    )
}

export default Home
