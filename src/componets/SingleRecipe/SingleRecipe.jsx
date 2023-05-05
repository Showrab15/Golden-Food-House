import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { FaRegGrinHearts } from 'react-icons/fa';


const SingleRecipe = ({singleRecipe}) => {
    const {recipe_name, cooking_method, rating, recipe_img_url, ingredients}= singleRecipe;
    // console.log(singleRecipe);
const [disabled , setDisabled] = useState(false)

const handleFavoriteToast =()=>{
   
    setDisabled(  toast("Added in the favorite List!"))

}

    return (
        <div className="my-container ">
           
            <div className="card w-full mt-8 transition ease-in-out delay-80 bg-orange-200 hover:-translate-y-1 hover:scale-110  hover:bg-orange-300 duration-300   md:mr-0 mr-2  opacity-100 glass">

  <div className="card-body border-red-200">
    <h2 className="card-title font-bold mx-auto ">{recipe_name}</h2>
    <hr style={{ border:" 1px solid  #FF900E"}}  className="w-48 mx-auto mt-2 " />
<hr style={{ border:" 1px solid  #FF900E"}}  className="w-32 mx-auto mt-2  " />
    <p> <span className="font-bold"> Cooking Method :</span> {cooking_method}</p>
    <p  className='flex'> <span className="font-bold  mr-2" > Rating  :</span> <Rating style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly /></p>
    <p className="font-bold"> <span className="font-bold"> Ingredients :</span> </p>
    {
   ingredients.map(ingre => <li className="font-semibold">{ingre}</li> )
    }
    <div className="card-actions ">
      <button onClick={handleFavoriteToast} disabled={disabled} className="button">Add To Favorite <FaRegGrinHearts className="text-white ml-2"></FaRegGrinHearts> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleRecipe;