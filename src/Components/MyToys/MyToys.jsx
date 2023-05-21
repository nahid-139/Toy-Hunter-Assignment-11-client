import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UseContext';
import { Link } from 'react-router-dom';
import { FaEdit, FaStar } from 'react-icons/fa';

const MyToys = () => {

    const {user} =useContext(AuthContext)

    const [toy,setToy] =useState([])
    const url =`http://localhost:5005/myToys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setToy(data);
          });
      },[url]);
console.log(toy)


    return (
        <div className='m-10'>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {
                toy.map((toy =>(
                    <tr key={toy._id}className="text-black">
                      
                <th scope="row" className="">
                    {toy.name}
                </th>
                <td className="px-6 py-4">
                    {toy.subCategory}
                </td>
                <td className="px-6 py-4">
                    {toy.price}$
                </td>
                <td className="px-6 py-4">
                    {toy.quantity}
                </td>
                <td className="px-6 py-4">
                    {toy.ratings}<FaStar></FaStar>
                </td>
                <td className="px-6 py-4">
                <Link to={`/toys/${toy._id}`} className='bg-slate-600 px-4 py-2 text-white font-bold rounded-xl'>View details</Link>
                </td>
                <td><Link to={``} className=''><FaEdit></FaEdit></Link></td>
                <td><Link to={``} className=''><FaEdit></FaEdit></Link></td>
            

                    </tr>
                ))

             )
            }
            </tbody>
            </table>
           </div>
        </div>
    );
};

export default MyToys;