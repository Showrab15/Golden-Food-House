import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import { FaHeart, FaUtensils, FaMedal  } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const ChefDetails = () => {
  const chefDetails = useLoaderData()
  // console.log(chefDetails);
  const { chef_name, chef_picture_url, description, likes, number_of_recipes, experience_years , recipes
  } = chefDetails;

  
  
  return (
<div className="md:mt-0 mt-48">
  <h1 className="italic text-4xl font-bold text-center"> {chef_name}'s Profile</h1>
  <hr style={{ border:" 1px solid  #FF900E"}}  className="w-48 mx-auto mt-2 " />
<hr style={{ border:" 1px solid  #FF900E"}}  className="w-32 mx-auto mt-2  " />
<div>
      <div className="my-container card md:w-full w-96  image-full">
        <figure><img className="md:w-full w-96" src={chef_picture_url} alt="" /></figure>
        <div className="card-body">

          <div className="md:mt-96 mx-auto card md:w-96   transition ease-in-out delay-50 bg-neutral hover:-translate-y-1 hover:scale-110  duration-300 text-neutral-content">
           
  <div className="card-body items-center text-center">
    <h2 className="card-title">{chef_name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-center">
      <button className=" btn btn-active btn-secondary"> <FaHeart className="text-red-400 mr-2"></FaHeart>{likes} Likes </button>
      <button className=" btn btn-active btn-secondary"> <FaUtensils className="text-red-400 mr-2"></FaUtensils> {number_of_recipes}  Recipes</button>
      <button className=" btn btn-active btn-secondary mx-auto"> <FaMedal className="text-red-400 mr-2"></FaMedal> {experience_years} years of experience.</button>

    </div>
  </div>
</div>

        </div>
        
      </div>
      <div className="my-container">
        <h1 className="text-4xl font-bold italic  text-center">Best of {chef_name} </h1>
        <hr style={{ border:" 1px solid  #FF900E"}}  className="w-48 mx-auto mt-2 " />
<hr style={{ border:" 1px solid  #FF900E"}}  className="w-32 mx-auto mt-2  " />
      <div className="grid md:grid-cols-3 gap-10">
        {
          recipes.map(singleRecipe => <SingleRecipe 
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