import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 200 ? setSticky(true) : setSticky(false); 
    })
  })

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <p className='logo'>ＴｅｃｈｎｏＬｙｔｉｃｓ</p>
      <ul>
        <li><input type="text" className="search-input" placeholder="What do you want to learn? "/>
           <button type="submit" className="search-button">Search</button>
        </li>

        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
        <li><button className='btn'>Login</button></li>
        <li><button className='btn'>Sign up</button></li>
      </ul>
      
    </nav>
  )
}

export default Navbar
