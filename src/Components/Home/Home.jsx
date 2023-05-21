import React  from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Toys from '../Toys/Toys';
import ContentOne from '../Contents/ContentOne';
import ContentTwo from '../Contents/ContentTwo';
import UseTitle from '../UseTitle/UseTitle';

const Home = () => {
UseTitle('Home')
   

    return (
        <div className='mx-20  '>
            <Banner></Banner>
            <Gallery></Gallery>
            <Toys></Toys>
            <ContentOne></ContentOne>
            <ContentTwo></ContentTwo>
            
          
        </div>
    );
};

export default Home;