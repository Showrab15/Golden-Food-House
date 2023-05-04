import React from 'react';
import Header from '../Header/Header';
import Chef from '../Chef/Chef';
import ClientReviews from '../ClientReviews/ClientReviews';
import Event from '../Event/Event';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Chef></Chef>
            <Event></Event>
            <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;