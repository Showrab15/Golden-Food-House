import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(()=>{
        fetch('https://assignment10-server-site-showrab15.vercel.app/recipes')
        .then(res => res.json())
        .then(data => {
            setChefs(data)
            // console.log(data);
        })
        
    },[])
    return (
        <div className="my-container">
            <h1 className="text-4xl font-bold text-center italic">Know About Our Chefs</h1>
            <hr style={{ border:" 1px solid  #FF900E"}}  className="w-48 mx-auto mt-2 " />
<hr style={{ border:" 1px solid  #FF900E"}}  className="w-32 mx-auto mt-2  " />
            <div className="grid  md:grid-cols-2 lg:grid-cols-2 justify-center gap-10 ">
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