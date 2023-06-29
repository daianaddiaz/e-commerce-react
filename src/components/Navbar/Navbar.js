import React from 'react';
import {FaCartShopping} from 'react-icons/fa6';
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className=" bg-green-500 ">
        <nav className='navbar'>
            <h1 className='logo'>Verde Manzana Macetas</h1>
           <Link to={"/cart"} className='carrito' ><FaCartShopping/> </Link>
        </nav>
    </div>
  )
}

export default Navbar
