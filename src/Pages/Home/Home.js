import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Tourist from '../Tourist/Tourist';
import TouristImages from '../TouristImages/TouristImages';

const Home = () => {
    return (
        <div id="#home">
             <Banner />
             <Tourist />
             <TouristImages></TouristImages>
             <Contact></Contact>
        </div>
    );
};

export default Home;