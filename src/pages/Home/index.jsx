import React from 'react'
import HeroSection from './HeroSection'
import WhyChooseUs from './WhyChooseUs'
import './home.css'
import CountSection from './CountSection'
import OurServices from './OurServices'
import Mission from './Mission'
import Pricing from './Pricing'

function Home() {
  return (
    <>
      <div className="hero-bg">
        <HeroSection/>
        <WhyChooseUs/>
        <CountSection/>
        <OurServices/>
        <Mission/>
        <Pricing/>
      </div>
        <div>Home</div>
    </>
  )
}

export default Home