import React, { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import Login from './components/Login/Login'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Signup from './components/SingUp/SignUp'

const App = () => {
  const router= createBrowserRouter([
    {
      path:"/",
      element: <Navbar/>
    },
    {
      path:"/hero",
      element: <Hero/>
    },
    {
      path:"/programs",
      element: <Programs/>
    },
    {
      path:"/contact",
      element: <Contact/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/signup",
      element: <Signup/>
    },
  ])
  
  return (
    <div>
    
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Title subTitle='Our programs' title='What We Offer'/>
        <Programs/>
        
        <About/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default App
//{showLogin && <Login/>}
/*
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import Login from './components/Login/Login'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Signup from './components/SingUp/SignUp'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={Navbar} />
      <Route path="/hero" element={Hero} />
    
      <Route path="/programs" element={Programs} />
  
      <Route path="/about" element={About} />
        
      <Route path="/contact" element={Contact} />
      <Route path="/footer" element={Footer} />
      <Route path="/login" element={Login} />
      <Route path="/signup" element={Signup} />

      </Routes>
    </Router>
   
  )
}

export default App
*/