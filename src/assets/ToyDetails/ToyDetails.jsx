import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toys = useLoaderData()
    return (
        <div>
            <img src={toys.image} alt="" />
        </div>
    );
};

export default ToyDetails;