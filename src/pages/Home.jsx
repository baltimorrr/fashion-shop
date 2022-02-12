import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'

import heroSliderData from '../assets/data/hero-slider';

const Home = () => {
    return (
        <Helmet title="Home">
            <div className="home">
                <HeroSlider data={heroSliderData}/>
            </div>
        </Helmet>
    )
}

export default Home
