import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/T-logo.png'
import menu_icon from '../../assets/menu_icon.png'
import Login from '../Login/Login';
import SignUp from '../SingUp/SignUp';

// Aliasing the `Link` from react-scroll
import { Link as ScrollLink } from 'react-scroll';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';

const Navbar = () => {

  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 200 ? setSticky(true) : setSticky(false); 
    })
  })

  const[mobileMenu, setMoileMenu]= useState(false);
  const toggleMenu=()=>{
    mobileMenu?setMoileMenu(false):setMoileMenu(true);
  }

  return (
  <>
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <p className='logo'><img src={logo}/></p>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>

        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='card' smooth={true} offset={-230} duration={500}>Program</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-90} duration={500}>About us</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500}>Contact us</ScrollLink></li>
        <li>
          <RouterLink to="/Login">
            <button className="btn">Login</button>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/SignUp">
            <button className="btn">Sign up</button>
          </RouterLink>
        </li>
      </ul>

    </nav>
    <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
</Routes>

  </>
  )
}

export default Navbar
//      <img src={menu_icon} alt='' className='menu-icon' onclick={toggleMenu}></img>