import React  from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Toys from '../Toys/Toys';
import ContentOne from '../Contents/ContentOne';

const Home = () => {

   

    return (
        <div className='mx-20 '>
            <Banner></Banner>
            <Gallery></Gallery>
            <Toys></Toys>
            <ContentOne></ContentOne>
            
          
        </div>
    );
};

export default Home;