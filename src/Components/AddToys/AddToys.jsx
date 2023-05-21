import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/UseContext";
import UseTitle from "../UseTitle/UseTitle";
const AddToys = () => {
  UseTitle('Add a Toy')
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const img = event.target.img.value;
    const user = event.target.user.value;
    const email = event.target.email.value;
    const price = event.target.price.value;
    const ratings = event.target.ratings.value;
    const subCategory = event.target.subCategory.value;
    const quantity  = event.target.quantity.value;
    const description = event.target.description.value;
    console.log(name, img, price, ratings, subCategory , description);


    fetch("http://localhost:5005/toysAdd", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        img,
        user,
        email,
        price,
        ratings,
        subCategory ,
        quantity,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
              title: 'Success!',
              text: 'Your Toy is Added Successful',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
      }
      });
  };
  return (
    <div className="my-30">
      <form
        onSubmit={handleAddToy}
        className=" bg-slate-300 my-10 lg:w-2/3 mx-auto p-10"
      >
        <h2 className="text-3xl py-5">Add Toy</h2>
        <div className="space-y-1 text-sm my-3 py-3">
          <label htmlFor="img" className="block text-xl dark:text-gray-400">
            Toy Image URL *
          </label>
          <input
            type="text"
            name="img"
            placeholder="Enter Your ImageURL"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label
            html
            htmlFor="name"
            className="block text-xl dark:text-gray-400"
          >
            Your Toy Name*
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Product Name"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label
            html
            htmlFor="user"
            className="block text-xl dark:text-gray-400"
          >
            Seller Name*
          </label>
          <input
            type="text"
            name="user"
            defaultValue={user?.displayName}
            placeholder="Seller Name"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label
            html
            htmlFor="email"
            className="block text-xl dark:text-gray-400"
          >
            Seller Email*
          </label>
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder=" Seller Email"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="price" className="block text-xl dark:text-gray-400">
            Your Toy Price*
          </label>
          <input
            type="text"
            name="price"
            placeholder="Your Toy price"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label htmlFor="ratings" className="block text-xl dark:text-gray-400">
            Your Toy Rating*
          </label>
          <input
            type="text"
            name="ratings"
            placeholder="Your Toy Rating"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label htmlFor="subCategory" className="block text-xl dark:text-gray-400">
            Toy Sub-category*
          </label>
          <input
            type="text"
            name="subCategory"
            placeholder="Toy Sub-category"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label htmlFor="quantity" className="block text-xl dark:text-gray-400">
            Your Toy Quantity*
          </label>
          <input
            type="text"
            name="quantity"
            placeholder="Your Toy Quantity"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        
        
        
        <div className="space-y-1 text-sm">
          <label
            htmlFor="description"
            className="block text-xl dark:text-gray-400"
          >
             Description *
          </label>
          <textarea
            name="description"
            placeholder="Description "
            className="w-full p-3 h-32"
          ></textarea>
        </div>
        <button
          className="bg-orange-600 text-xl text-white py-3 px-5 my-5 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToys;
