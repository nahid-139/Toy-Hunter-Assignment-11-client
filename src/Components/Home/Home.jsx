import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Toys from '../Toys/Toys';

const Home = () => {

   

    return (
        <div className='mx-20 '>
            <Banner></Banner>
            <Gallery></Gallery>
            <Toys></Toys>

          
            
        </div>
    );
};

export default Home;