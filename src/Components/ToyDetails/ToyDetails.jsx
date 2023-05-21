import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../UseTitle/UseTitle';

const ToyDetails = () => {
    UseTitle('Toy Details')
    const toys = useLoaderData()
    return (
        <div className='mb-20 bg-gray-400 mx-40 p-20 rounded-xl'>
            <div className=' w-5/12 mx-auto mb-10 '>
            <img className='rounded-xl' src={toys.img} alt="" />
            </div>
            <h1 className='text-center text-xl font-bold'><span className='text-xl font-semibold px-2'>Sellar Name :</span>{toys.user}</h1>
            <h1 className='text-center text-6xl font-bold'>{toys.name}</h1>
            <div>
            <div className='mt-4'> 
            <h1 className='text-center text-lg font-bold mt-10'><span className='text-xl font-semibold px-2'>Sellar Email :</span>{toys.email}</h1>
                <p className='text-center font-bold px-2'><span className='font-bold text-xl'>Price: </span> {toys.price}$</p>
                <p className='text-center font-bold px-2'><span className='font-bold text-xl'>Ratings: </span> {toys.ratings}<Rating
                 placeholderRating={4.5}
                 readonly
                 emptySymbol={<FaRegStar></FaRegStar>}
                 placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
                 fullSymbol={<FaStar className='text-yellow-400'></FaStar>}
                ></Rating></p>
                <p className='text-center text-lg '><span className='font-bold text-xl px-2'>Description: </span>{toys.description}</p>
            </div>
            </div>
        </div>
    );
};

export default ToyDetails;