import React from 'react'
import Hero from '../components/Hero/Hero'
import Programs from '../components/Programs/Programs'
import Title from '../components/Title/Title'

const Home = () => {

  return (
    <div className="container">
      <Hero />
      <div id="programs"> 
        <Title subTitle='Our programs' title='What We Offer'/>
        <Programs />
      </div>
    </div>
  )
}

export default Home 