import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import UseContext from './Components/Context/UseContext';
import Login from './Components/Login/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]

  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseContext>
    <RouterProvider router={router} />
    </UseContext>
  </React.StrictMode>
)
