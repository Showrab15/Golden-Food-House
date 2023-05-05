import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import { FaHeart, FaUtensils, FaMedal  } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import LazyLoad from 'react-lazyload';

const ChefDetails = () => {
  const chefDetails = useLoaderData()
  // console.log(chefDetails);
  const { chef_name, chef_picture_url, description, likes, number_of_recipes, experience_years , recipes
  } = chefDetails;

  
  
  return (
<div>
  <h1 className="title"> {chef_name}'s Profile</h1>
  <hr className="long-line" />
<hr className="short-line" />
<div>
      <div className="my-container card w-full   image-full">
        <LazyLoad height={800}>
        <figure><img className="w-full " src={chef_picture_url} alt="" /></figure>

        </LazyLoad>
        <div className="card-body">

          <div className="my-auto mx-auto card md:w-96   transition ease-in-out delay-50 bg-neutral hover:-translate-y-1 hover:scale-110  duration-300 text-neutral-content">
           
  <div className="card-body items-center text-center">
    <h2 className="card-title">{chef_name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-center">
      <button className="button"> <FaHeart className="text-red-400 mr-2"></FaHeart>{likes} Likes </button>
      <button className="button"> <FaUtensils className="text-red-400 mr-2"></FaUtensils> {number_of_recipes}  Recipes</button>
      <button className="button nmx-auto"> <FaMedal className="text-red-400 mr-2"></FaMedal> {experience_years} years of experience.</button>

    </div>
  </div>
</div>

        </div>
        
      </div>
      <div className="my-container">
        <h1 className="text-4xl font-bold italic  text-center">Best of {chef_name} </h1>
        <hr className="long-line" />
<hr   className="short-line"/>
      <div className="grid md:grid-cols-3 gap-10">
        {
          recipes.map((singleRecipe,index) => <SingleRecipe 
          key={index}
            singleRecipe={singleRecipe}
          ></SingleRecipe> )
        }
      </div>
      </div>
   
    </div>
</div>
   



  );
};

export default ChefDetails;