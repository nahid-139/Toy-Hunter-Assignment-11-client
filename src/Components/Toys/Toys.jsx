import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';


const Toys = () => {


    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5005/toys")
            .then((response) => response.json())
            .then((data) => setToys(data));
    }, []);
    console.log(toys);
    return (
        <div className='mb-20' >
            <h1 className='font-bold text-4xl mb-10 text-center underline'>Our Toys</h1>

            <Tabs>
                <TabList className={'md:flex justify-center font-bold text-2xl gap-10 '}>
                    <Tab className={'bg-slate-500 px-20 py-2 rounded-xl hover:bg-slate-400'}>Marvel Toys</Tab>
                    <Tab className={'bg-slate-500 px-20 py-2 rounded-xl hover:bg-slate-400'}>Avengers Toys</Tab>
                    <Tab className={'bg-slate-500 px-20 py-2 rounded-xl hover:bg-slate-400'}>Star Wars Toys</Tab>

                </TabList>
                {
                    toys.map(toy => <div
                        key={toy.id}

                    >

                        {/* Marvel Cards */}
                        <TabPanel>
                            <div className='md:flex justify-center gap-10 mt-10'>
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                                    <Link>
                                        <img className="rounded-t-lg" src={toy.categories[0].picture} alt="" />
                                    </Link>
                                    <div className="p-5">
                                        <Link>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{toy.categories[0].name}</h5>
                                        </Link>
                                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Price: </span>{toy.categories[0].price}$</p>
                                        <div className='flex'>
                                            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Ratings : </span>{toy.categories[0].rating}</p>
                                            <FaStar className='mt-2 ml-2 text-slate-100'></FaStar>
                                        </div>
                                        <Link to={'/allToys'} className="inline-flex items-center px-32 py-2 text-sm font-medium text-center text-slate-200 bg-slate-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-400 dark:hover:bg-slate-500 dark:focus:ring-black">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                                    <Link>
                                        <img className="rounded-t-lg" src={toy.categories[1].picture} alt="" />
                                    </Link>
                                    <div className="p-5">
                                        <Link>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{toy.categories[1].name}</h5>
                                        </Link>
                                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Price: </span>{toy.categories[1].price}$</p>
                                        <div className='flex'>
                                            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Ratings : </span>{toy.categories[1].rating}</p>
                                            <FaStar className='mt-2 ml-2 text-slate-100'></FaStar>
                                        </div>
                                        <Link to={'/allToys'} className="inline-flex items-center px-32 py-2 text-sm font-medium text-center text-slate-200 bg-slate-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-400 dark:hover:bg-slate-500 dark:focus:ring-black">
                                            View Details

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        {/* Avengers card */}
                        <TabPanel>
                            <div className='md:flex justify-center gap-10 mt-10'>
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                                    <Link>
                                        <img className="rounded-t-lg" src={toy.categories[2].picture} alt="" />
                                    </Link>
                                    <div className="p-5">
                                        <Link>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{toy.categories[2].name}</h5>
                                        </Link>
                                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Price: </span>{toy.categories[2].price}$</p>
                                        <div className='flex'>
                                            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Ratings : </span>{toy.categories[2].rating}</p>
                                            <FaStar className='mt-2 ml-2 text-slate-100'></FaStar>
                                        </div>
                                        <Link to={'/allToys'} className="inline-flex items-center px-32 py-2 text-sm font-medium text-center text-slate-200 bg-slate-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-400 dark:hover:bg-slate-500 dark:focus:ring-black">
                                            View Details

                                        </Link>
                                    </div>
                                </div>
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                                    <Link>
                                        <img className="rounded-t-lg" src={toy.categories[3].picture} alt="" />
                                    </Link>
                                    <div className="p-5">
                                        <Link>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{toy.categories[3].name}</h5>
                                        </Link>
                                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Price: </span>{toy.categories[3].price}$</p>
                                        <div className='flex'>
                                            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Ratings : </span>{toy.categories[3].rating}</p>
                                            <FaStar className='mt-2 ml-2 text-slate-100'></FaStar>
                                        </div>
                                        <Link to={'/allToys'} className="inline-flex items-center px-32 py-2 text-sm font-medium text-center text-slate-200 bg-slate-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-400 dark:hover:bg-slate-500 dark:focus:ring-black">
                                            View Details

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        {/* Star Wars Card */}
                        <TabPanel>
                            <div className='md:flex justify-center gap-10 mt-10'>
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                                    <Link>
                                        <img className="rounded-t-lg" src={toy.categories[4].picture} alt="" />
                                    </Link>
                                    <div className="p-5">
                                        <Link>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{toy.categories[4].name}</h5>
                                        </Link>
                                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Price: </span>{toy.categories[4].price}$</p>
                                        <div className='flex'>
                                            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Ratings : </span>{toy.categories[4].rating}</p>
                                            <FaStar className='mt-2 ml-2 text-slate-100'></FaStar>
                                        </div>
                                        <Link to={'/allToys'} className="inline-flex items-center px-32 py-2 text-sm font-medium text-center text-slate-200 bg-slate-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-400 dark:hover:bg-slate-500 dark:focus:ring-black">
                                            View Details

                                        </Link>
                                    </div>
                                </div>
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                                    <Link>
                                        <img className="rounded-t-lg" src={toy.categories[5].picture} alt="" />
                                    </Link>
                                    <div className="p-5">
                                        <Link>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{toy.categories[5].name}</h5>
                                        </Link>
                                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Price: </span>{toy.categories[5].price}$</p>
                                        <div className='flex'>
                                            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400"><span className='font-bold text-xl'>Ratings : </span>{toy.categories[5].rating}</p>
                                            <FaStar className='mt-2 ml-2 text-slate-100'></FaStar>
                                        </div>
                                        <Link to={'/allToys'} className="inline-flex items-center px-32 py-2 text-sm font-medium text-center text-slate-200 bg-slate-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-400 dark:hover:bg-slate-500 dark:focus:ring-black">
                                            View Details

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>



                    </div>)
                }
            </Tabs>

        </div>
    );
};

export default Toys;