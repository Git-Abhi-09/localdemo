import React from 'react'
import Home from "./components/Home";
import About from './components/About';
import Info from './components/Info';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const Route = () => {
    const router = createBrowserRouter([
        {
          path:'/',
          element:<><Navbar/><Home/></>
        },
        {
          path:'/about',
          element:<><Navbar/><About/></>
        },
        {
          path:'/information',
          element:<><Navbar/><Info/></>
        },
        {
          path:'/contact',
          element:<><Navbar/><Contact/></>
        }
      ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Route;
