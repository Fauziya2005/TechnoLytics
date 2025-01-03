import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import Login from './components/Login/Login'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our programs' title='What We Offer'/>
        <Programs/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
      </div>
      <Login/>
      
    </div>
  );
}

export default App
