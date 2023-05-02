import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaUtensils,FaMedal } from "react-icons/fa";
import chefIcon from '../../assets/chefIcon.jpg'
import dish from '../../assets/dish.png'
const ChefCard = ({chef}) => {
    console.log(chef)
    const {chef_picture_url, chef_name, experience_years, likes, number_of_recipes} = chef
    return (
        <div className="container">
 <div className="w-full h-full rounded-md bg-amber-50 px-4 py-4">
            <div>
                <img className="w-full h-full rounded-lg" src={chef_picture_url} alt="" />

                <h1 className="font-bold text-lg mt-2  flex items-center "> <img className="w-[30px] h-[30px] mr-4 bg-red-500 rounded-lg"  src={chefIcon} alt="" />{chef_name}</h1>

                <p style={{ color: '#757575' }} className="font-semibold text-lg flex items-center mt-2"> 
                <FaMedal className="text-red-300 mr-4"></FaMedal>{experience_years} Years Experience </p>
                <div className="flex justify-between ">
                <p style={{ color: '#757575' }} className="font-semibold text-lg flex items-center  mt-2"> <img className="w-[20px] h-[20px] mr-4 bg-red-200 rounded-lg" src={dish} alt="" /> {number_of_recipes} Number Of Recipes </p>

                <p style={{ color: '#757575' }} className="font-semibold text-lg mt-2 flex items-center "> <FaHeart className="text-red-300 mr-4"></FaHeart> Liked  By {likes} People</p>
                </div>
             

            

                <Link><button className="font-bold text-base border-none bg-red-400 rounded-lg btn mt-2"> <FaUtensils className="mr-4"></FaUtensils> View Recipes </button>
                </Link>
                
            </div>
        </div>
        </div>
    );
};

export default ChefCard;