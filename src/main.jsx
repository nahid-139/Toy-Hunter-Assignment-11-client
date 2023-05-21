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
import Register from './Components/Register/Register';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AddToys from './Components/AddToys/AddToys';
import MyToys from './Components/MyToys/MyToys';
import AllToys from './Components/AllToys/AllToys';
import ToyDetails from './Components/ToyDetails/ToyDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'/addToys',
        element:<AddToys></AddToys>
      },
      {
        path:'/myToys',
        element:<MyToys></MyToys>
      },
      {
        path:'/allToys',
        element:<AllToys></AllToys>,
        loader:()=>fetch('http://localhost:5000/toysAdd')

      },
      {
        path:'/toys/:id',
        element:<ToyDetails></ToyDetails>,
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
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
