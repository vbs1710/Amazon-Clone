import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Essentials/D23636912_IN_CEPC_BAU_essentals_graphics_May21_3000x12000.5x_2._CB668898249_.jpg" alt="" />

            <div className="home__row">
                <Product id="1" title="Asgard Melt-Blown Fabric Disposable 3 Ply Surgical Mask (Blue, Without Valve, Pack of 100) for Unisex by Asgard" image="https://m.media-amazon.com/images/I/41jzjo0hDwL.jpg" price={4.99} rating={5}/>
                <Product id="2" title="Shocknshop Non-Woven Fabric Reuseable N95 Face Mask with Over Head Loop (Black, Grey, White), Without Valve, Pack of 6) for Men - CE, ISO, FDA and WHO-GMP Certified" image="https://m.media-amazon.com/images/I/41k6wm9iooL.jpg" price={7.99} rating={4}/>
            </div>
            <div className="home__row">
                <Product id="3" title="Nivia Storm Football - Size 5" image="https://m.media-amazon.com/images/I/51inhClfoLL._AC_SY200_.jpg" price={11.99} rating={4}/>
                <Product id="4" title="Mi Smart Band 4 0.94-inch AMOLED Color Display, 20 Days Battery, 5ATM Water Resistant, Music Control, Unlimited Watch Faces, Compatible with Android and iOS" image="https://m.media-amazon.com/images/I/41qvcxLP3uL._AC_SY200_.jpg" price={22.99} rating={5}/>
                <Product id="5" title="Aurion Set of 2 PVC Dumbbells Weights Fitness Home Gym Exercise Barbell (Pack of 2) Light Heavy for Women & Men’s Dumbbell" image="https://m.media-amazon.com/images/I/41hH8V5ZkkS._AC_SY200_.jpg" price={4.99} rating={3}/>
            </div>
            <div className="home__row">
                <Product id="6" title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)" price={2000} image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg" rating={4}/>
            </div>
            </div>
        </div>
    )
}

export default Home
