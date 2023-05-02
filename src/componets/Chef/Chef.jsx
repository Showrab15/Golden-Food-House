import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => {
            setChefs(data.chefs)
            console.log(data)
        })
        
    },[])
    return (
        <div className="mt-8">
            <h1 className="text4xl font-bold text-center ">Know About Our Chefs</h1>
            <div className="grid  md:grid-cols-2 lg:grid-cols-2 justify-center  my-container gap-10 ">
            {
                chefs.map(chef => <ChefCard 
                key={chef.id}
                chef={chef}
                ></ChefCard> )
            }
        </div>
        </div>
    );
};

export default Chef;