import React from 'react';
import News from '../../News/News';
import Services from '../../Services/Services';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return (
        <>
         <Services></Services>
         <Carousel></Carousel>
         <News></News>
        </>
    );
};

export default Home;