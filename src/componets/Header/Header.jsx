import React from 'react';
import './Header.css'
import restaurantBackground from '../../assets/banner.jpg'

import { FaUtensils } from 'react-icons/fa';


const Header = () => {
    return (

        <div className="relative h-full ">
            <img src={restaurantBackground} alt="Restaurant background" className="object-cover banner h-full w-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="md:text-6xl text-base font-bold mb-4">IT'S ALL ABOUT GOOD FOOD & TASTE</h1>
                <p className=" text-orange-100 text-2xl">We offer the best cuisine in town. Come and join us for a delicious meal!</p>
                <div className="flex justify-center mt-4 items-center text-center">
                    <hr  className="w-32 h-10 mt-9" />  <FaUtensils className='text-pink-700 w-12 h-8'></FaUtensils>  <hr  className="w-32 h-10 mt-9" />  
                </div>
            </div>
        </div>
    );
};

export default Header;