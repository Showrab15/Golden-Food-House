import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Chef from '../Chef/Chef';
import ClientReviews from '../ClientReviews/ClientReviews';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Chef></Chef>
            <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;