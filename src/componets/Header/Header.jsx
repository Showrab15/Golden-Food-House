import React from 'react';
import banner from '../../assets/banner.jpg'
import { FaUtensils } from 'react-icons/fa';


const Header = () => {
    return (

        <div className="my-container">

            <div className="relative h-full">
                <img src={banner} alt="" className=" object-cover  h-full rounded-lg " />
                <div className="absolute backdrop-brightness-50 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  flex justify-center items-center text-white">

                    <div>
                        <h1 className="md:text-5xl md:mt-0 mt-4 text-base font-bold mb-4">IT'S ALL ABOUT GOOD FOOD & TASTE</h1>
                        <p className=" text-orange-100 text-base md:text-2xl">We offer the best cuisine in town. Come and join us for a delicious meal!</p>
                        <div className="flex justify-center mt-4 items-center text-center">
                            <hr className="w-32 h-10 mt-9" />  <FaUtensils className='text-pink-700 w-12 h-8'></FaUtensils>  <hr className="w-32 h-10 mt-9" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;