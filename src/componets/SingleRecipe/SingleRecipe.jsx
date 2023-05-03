import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { FaRegGrinHearts } from 'react-icons/fa';


const SingleRecipe = ({singleRecipe}) => {
    const {recipe_name, cooking_method, rating, recipe_img_url, ingredients}= singleRecipe;
    console.log(singleRecipe);


const handleFavoriteToast =()=>{
    return toast("Added in the favorite List!");
     

}

    return (
        <div className="my-container">
            <div className="card w-full opacity-100 glass">
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>Cooking Method : {cooking_method}</p>
    <p  className='flex'> Rating : <Rating style={{ maxWidth: 100 }} value={rating} readOnly /></p>
    <p className="font-bold">Ingredients : </p>
    {
   ingredients.map(ingre => <li>{ingre}</li> )
    }
    <div className="card-actions ">
      <button onClick={handleFavoriteToast} className="btn btn-active btn-secondary">Add To Favorite <FaRegGrinHearts className="text-white ml-2"></FaRegGrinHearts> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleRecipe;