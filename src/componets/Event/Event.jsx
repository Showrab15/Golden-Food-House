import React from 'react';
import './Event.css'
import event1 from '../../assets/event1.jpg'
import event2 from '../../assets/event2.jpg'
import event3 from '../../assets/event4.jpg'
const Event = () => {
    return (
        <div>
            <div className="my-container mx-auto">
                <h2 className="title">We Specialize in Intimate
                    Catering</h2>
                <p className="text-center italic font-semibold mt-4">Think back to your last party. It was probably a great time
                    with amazing friends</p>
                <hr  className="long-line"/>
                <hr  className="short-line"/>

                <div className="grid mx-auto md:gap-10 mt-8 md:grid-cols-3">

                    <div className="event-card">
                        <figure><img src={event1} alt=""/></figure>
                        <div className="card-body cc animate-pulse">
                            <h2 className="card-title font-bold">Corporate Events!</h2>
                            <p className="text-semibold ">Join us for a unique corporate event where you and your team can experience the joy of cooking with a professional chef.</p>

                        </div>

                    </div>
                    <div className="event-card">
                        <figure><img src={event2} alt="" /></figure>
                        <div className="card-body cc animate-pulse">
                            <h2 className="card-title font-bold">Weddings And Galas!</h2>
                            <p className="text-semibold ">Make your special day unforgettable with our  wedding and gala catering services. We will provide a memorable culinary experience </p>

                        </div>

                    </div>
                    <div className="event-card">
                        <figure><img src={event3} alt="" /></figure>
                        <div className="card-body cc animate-pulse">
                            <h2 className="card-title font-bold">Cooking Classes!</h2>
                            <p className="text-semibold ">Discover the joy of cooking with our hands-on cooking classes led by a professional chef and to improve your culinary skills .</p>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Event;