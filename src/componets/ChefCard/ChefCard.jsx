import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaUtensils, FaMedal } from "react-icons/fa";
import chefIcon from '../../assets/chefIcon.png'
import recipeIcon from '../../assets/recipeicon.png'
const ChefCard = ({ chef }) => {
    // console.log(chef);
    const { chef_picture_url, chef_name,id, experience_years, likes, number_of_recipes ,recipes} = chef
    return (
        <div className="my-container">
            <div className="w-full h-full rounded-md  px-4 py-4">
                <div>
                    <img className="w-full h-full rounded-lg" src={chef_picture_url} alt="" />

                  <div className="mt-4">
                  <div className="flex items-center">
                            <img className="w-[30px] h-[30px] mr-4 rounded-lg bg-red-300" src={chefIcon} alt="" />
                    
                        <h1 className="font-bold text-lg    ">

                            {chef_name}</h1>
                    </div>

                    <p style={{ color: '#757575' }} className="font-semibold text-lg flex items-center mt-4">
                        <FaMedal className="text-red-300 w-[30px] h-[30px] mr-4"></FaMedal>{experience_years} Years Experience </p>
                    <div className="md:flex md:justify-between ">

                        <div className="flex items-center">
                            <img className="w-[30px] h-[30px] mt-2 mr-4 bg-red-300 rounded-lg" src={recipeIcon} alt="" />
                            <p style={{ color: '#757575' }} className="font-semibold text-lg  mt-4">
                                {number_of_recipes} Number Of Recipes </p>
                        </div>


                        <p style={{ color: '#757575' }} className="font-semibold text-lg mt-4 flex items-center "> <FaHeart className="text-red-600 mr-2 w-[20px] h-[20px]"></FaHeart> Liked  By {likes} People</p>
                    </div>




                    <Link to={`/recipes/${id}`}><button className="font-bold text-base border-none btn btn-active btn-secondary rounded-lg  mt-2"> <FaUtensils className="mr-4 text-amber-400"></FaUtensils> View Recipes </button>
                    </Link>
                  </div>

                </div>
            </div>
        </div>
    );
};

export default ChefCard;