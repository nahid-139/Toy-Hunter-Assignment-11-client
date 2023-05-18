import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth, AuthContext } from "../Context/UseContext";
import Swal from "sweetalert2";


const Register = () => {
  
  const {createUser,updateprofile}= useContext(AuthContext)
  const googleProvider= new GoogleAuthProvider()

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name=from.name.value
    const email = from.email.value;
    const password = from.password.value;
    console.log(name,email,password)
    createUser(email,password)
    .then((result)=>{
      const user= result.user;
      console.log(user)
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      updateprofile(name)
      .then(()=>{
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
      })
      .catch((error)=>{
        console.error(error)
      })
    })
    .catch(error=>{
      console.error(error)
    })
  
  };
  const signInGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
      const user= result.user;
      console.log(user)
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }).catch(error=>{
      console.error(error)
    })
  }
 

  return (
    <div className="flex py-20  justify-evenly">
      <div className="w-1/2">
        <img src="https://cdn.dribbble.com/users/612155/screenshots/1718172/dribbble_ordi.gif" alt="" />
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-xl bg-amber-100 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center py-2">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-xl dark:text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 text-lg py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="PhotoURL"
                      className="text-xl inline-block mb-1 font-medium"
                    >
                     PhotoURL
                    </label>
                    <input
                      placeholder="Enter Your ImageUrl"
                      required
                      type="text"
                      className="text-xl flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="PhotoURL"
                      name="Photo"
                    />
                  </div>
          <div className="space-y-1 text-sm">
            <label for="email" className="block text-xl dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 text-lg py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-xl dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full text-lg px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-violet-400">
            Sign in
          </button>
        </form>
        <div className="text-center">
          <div className=" sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-lg dark:text-gray-400">
            Login with social accounts
          </p>
        </div>
        <div>
          <button onClick={signInGoogle} className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  text-white   bg-blue-600 focus:ring-violet-400">
            <span className=" text-2xl">
              <FaGoogle></FaGoogle>
            </span>
            <p>Login with Google</p>
          </button>
        </div>
        <p className="text-lg text-center sm:px-6 dark:text-gray-400">
          Already  have an account?
          <Link to="/login" className="underline dark:text-gray-100">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
