import React from 'react';
import './ClientReviews.css'
import restaurantBackground from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';
import clientFood1 from '../../assets/clientfood1.jpg'
import clientFood2 from '../../assets/clientfood2.jpg'
import clientFood3 from '../../assets/clientfood3.jpg'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.jpg'
import client3 from '../../assets/client3.jpg'


const ClientReviews = () => {
    return (
        <div className="my-container ">
<h2 className="text-4xl font-bold text-center italic	 ">Our Testimonial</h2>
<hr style={{ border:" 1px solid  #FF900E"}}  className="w-48 mx-auto mt-2 " />
<hr style={{ border:" 1px solid  #FF900E"}}  className="w-32 mx-auto mt-2  " />

<div className="carousel w-full mt-4">

  <div id="feedback1" className="carousel-item w-full">
  <div className="relative h-full">
            <img src={clientFood1} alt="Restaurant background" className=" object-cover bg-blend-overlay		  banner w-full h-full rounded-lg " />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
<img src={client1} className="w-[60px] h-[60px] mx-auto rounded-full" alt="" />  
<p></p>     
         <i className="text-white  font-semibold text-1xl">The dishes prepared by the chef were bursting with flavor and expertly presented excellent service.  </i>
                  <p className="font-bold text-2xl mt-4"> - John Doe</p>

         <div style={{paddingBottom: '100px'}} className="flex justify-center  w-full  gap-2">
  <a href="#feedback1" className=" text-6xl font-extrabold text-yellow-600	 hover:font-bold ">.</a> 
  <a href="#feedback2" className=" text-6xl font-extrabold text-yellow-600	 hover:font-bold ">.</a> 
  <a href="#feedback3" className=" text-6xl font-extrabold text-yellow-600	 hover:font-bold ">.</a> 
  
</div>
            </div>
        </div>
          </div> 
  <div id="feedback2" className="carousel-item w-full">
  <div className="relative h-full">
            <img src={clientFood2} alt="Restaurant background" className=" object-cover banner w-full  h-full rounded-lg " />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
<img src={client2} className="w-[60px] h-[60px] mx-auto rounded-full" alt="" />       
         <i className=" text-white font-semibold text-1xl">Sed posuere consectetur est at lobortis.Pellentesque ornare sem lacinia quam venenatis vestibulum.</i>
         <p className="font-bold text-2xl mt-4 "> - Alexander Mark</p>
         <div style={{paddingBottom: '100px'}} className="flex justify-center w-full gap-2">
  <a href="#feedback1" className=" text-6xl font-extrabold text-yellow-600	 hover:font-bold ">.</a> 
  <a href="#feedback2" className=" text-6xl font-extrabold text-yellow-600	 hover:font-bold ">.</a> 
  <a href="#feedback3" className=" text-6xl font-extrabold text-yellow-600	 hover:font-bold ">.</a> 
  
</div>
            </div>
        </div>
          </div> 
  <div id="feedback3" className="carousel-item w-full">
  <div className="relative h-full">
            <img src={clientFood3} alt="Restaurant background" className=" object-cover w-full banner h-full rounded-lg " />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
<img src={client3} className="w-[60px] h-[60px] mx-auto rounded-full" alt="" />       
         <i className="text-1xl  font-semibold text-white">The dishes prepared by the chef were bursting with flavor and expertly presented. </i>
         <p className="font-bold text-2xl mt-4"> - Maria Jahan</p>

         <div style={{paddingBottom: '100px'}} className="flex justify-center w-full  gap-2">
  <a href="#feedback1" className=" text-6xl font-extrabold text-yellow-600	 hover:font-bold ">.</a> 
  <a href="#feedback2" className=" text-6xl font-extrabold text-yellow-600	 hover:font-bold ">.</a> 
  <a href="#feedback3" className=" text-6xl font-extrabold text-yellow-600	 hover:font-bold ">.</a> 
  
</div>
            </div>
        </div>
          </div> 


 
         
 
</div> 

        </div>
     
    );
};

export default ClientReviews;