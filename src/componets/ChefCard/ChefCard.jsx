import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaUtensils, FaMedal } from "react-icons/fa";
import chefIcon from '../../assets/chefIcon.png'
import recipeIcon from '../../assets/recipeicon.png'
import { AuthContext } from '../../provider/AuthProvider';
import LazyLoad from 'react-lazyload';
const ChefCard = ({ chef }) => {
   
    // console.log(chef);
    const { chef_picture_url, chef_name,id, experience_years, likes, number_of_recipes ,recipes} = chef
    return (
        <div className="my-container">
            <div className="w-full h-full bg-red-50 card rounded-lg pb-4 border-2 border-orange-600 ">
                <div>
                   
                    <LazyLoad>
                    <img className="w-full h-full rounded-lg" src={chef_picture_url} alt="" />
      </LazyLoad>
                  <div className="mt-4 ml-4 h-full">
                  <div className="flex items-center">
                            <img className="w-[30px] h-[30px] mr-4 rounded-lg " src={chefIcon} alt="" />
                    
                        <h1 className="font-bold text-lg    ">

                            {chef_name}</h1>
                    </div>

                    <p style={{ color: '#757575' }} className="font-semibold text-lg flex items-center mt-4">
                        <FaMedal className="text-red-300 w-[30px] h-[30px] mr-4"></FaMedal>{experience_years} Years Experience </p>
                    <div className="md:flex md:justify-between ">

                        <div className="flex items-center">
                            <img className="w-[30px] h-[30px] mt-2 mr-4 bg-red-300 rounded-lg" src={recipeIcon} alt="" />
                            <p style={{ color: '#757575' }} className="font-semibold text-lg  mt-4">
                                {number_of_recipes} Recipes </p>
                        </div>


                        <p style={{ color: '#757575' }} className="font-semibold text-lg mt-4 mr-8 flex items-center "> <FaHeart className="text-red-600 mr-2 w-[20px] h-[20px]"></FaHeart> Liked   {likes} </p>
                    </div>




               
              <Link to={`/recipes/${id}`}><button className=" mt-4 font-bold text-base border-none  button rounded-lg"> <FaUtensils className="mr-4 text-amber-400"></FaUtensils> View Recipes </button>
                    </Link>
                
                  </div>

                </div>
            </div>
        </div>
    );
};

export default ChefCard;