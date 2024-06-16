import React from 'react'
import '../Navbar.css';
import {NavLink} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Navbar = () => {
  const params = useParams();
  return (
    <>
        <div>
            <nav>
                <NavLink className={(e)=>{return e.isActive?'red':''}} to="/"><li>Home</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?'red':''}} to="/about"><li>About</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?'red':''}} to="/information"><li>Information</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?'red':''}} to="/contact"><li>Contact</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?'red':''}} to="/products/1"><li>Products</li></NavLink>
            </nav>
        </div>
    </>
  )
}

export default Navbar;
