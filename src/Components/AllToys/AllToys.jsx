import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const user = useLoaderData();
    return (
        <div>
            {
                user.map((allToy=>(

                    <div key={allToy.id}
                    >
                        <div className="container subCategory p-2 mx-auto sm:p-4 dark:text-gray-100">
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col className="w-5"/>
			</colgroup>
			<tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
				<tr>
					
					<td className="px-3 py-2">
						<span>Saller Name</span>
						<p className="dark:text-gray-400">{allToy.user}</p>
					</td>
					<td className="px-3 py-2">
						<span>Toy Name</span>
						<p className="dark:text-gray-400">{allToy.name}</p>
					</td>
					<td className="px-3 py-2">
						<span>Sub-Category</span>
						<p className="dark:text-gray-400">{allToy.subCategory}</p>
					</td>
					<td className="px-3 py-2">
						<span>Price</span>
						<p className="dark:text-gray-400">{allToy.price}$</p>
					</td>
					<td className="px-3 py-2">
						<span>Quantity</span>
						<p className="dark:text-gray-400">{allToy.quantity} ps</p>
					</td>
					
					<td className="px-3 py-2">
                    <Link to={`/toys/${allToy._id}`} className='bg-slate-600 px-4 py-2 text-white font-bold rounded-xl'>View details</Link>
					</td>
				</tr>
				
			</tbody>
			
		</table>
	</div>
</div>
                        
                
                    </div>
                )))
            }
            
        </div>
    );
};

export default AllToys;




