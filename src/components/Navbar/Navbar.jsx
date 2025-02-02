import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/T-logo.png'
import menu_icon from '../../assets/menu_icon.png'
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SingUp/SignUp';

// Aliasing the `Link` from react-scroll
import {  Link as RouterLink } from 'react-router-dom';


const Navbar = () => {

  const[mobileMenu, setMoileMenu]= useState(false);
  const toggleMenu=()=>{

    mobileMenu?setMoileMenu(false):setMoileMenu(true);
  }

  return (
  <>
    <nav>
      <RouterLink to="/" className="logo">
        <img src={logo} alt="TechnoLytics Logo" />
      </RouterLink>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About us</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Contact us</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">
            <button className="btn">Login</button>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/signup">
            <button className="btn">Sign up</button>
          </RouterLink>
        </li>
      </ul>
    </nav>


  </>
  )
}

export default Navbar
//      <img src={menu_icon} alt='' className='menu-icon' onclick={toggleMenu}></img>