import React from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../UseTitle/UseTitle';

const AllToys = () => {
    UseTitle('All Toys')





    
    const user = useLoaderData();
    return (
        <div className='m-10'>
            <h1 className="text-center p-4 font-bold text-3xl">ALL My Toys</h1>
        <div className="search-box p-2 text-center  ">
          <input
            // onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="px-10 border-4 border-slate-600 rounded-xl" 
          />
          {/* {" "} */}
          {/* onClick={handleSearch} */}
          <button className='ml-2 p-2 bg-slate-600 rounded-xl'><FaSearch></FaSearch></button>
        </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Saller name
                </th>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Sub-Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                   Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                   Rating
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((allToy=>(

                    <tr key={allToy.id} className='text-black'
                    >
                     <th scope="row" className="">
                    {allToy.user}
                </th>
                     <th scope="row" className="">
                    {allToy.name}
                </th>
                <td className="px-6 py-4">
                    {allToy.subCategory}
                </td>
                <td className="px-6 py-4">
                    {allToy.price}$
                </td>
                <td className="px-6 py-4">
                    {allToy.quantity}
                </td>
                <td className="px-6 py-4">
                    {allToy.ratings}<FaStar></FaStar>
                </td>
                <td className="px-6 py-4">
                <Link to={`/toys/${allToy._id}`} className='bg-slate-600 px-4 py-2 text-white font-bold rounded-xl'>View details</Link>
                </td>
                        
                
                    </tr>
                )))
            }
            </tbody>
			</table>
			</div>
        </div>
    );
};

export default AllToys;




