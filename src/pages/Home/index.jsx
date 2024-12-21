import React from 'react'
import HeroSection from './HeroSection'
import WhyChooseUs from './WhyChooseUs'
import './home.css'
import CountSection from './CountSection'
import OurServices from './OurServices'
import Mission from './Mission'
import Pricing from './Pricing'
import Promotions from './Promotions'

function Home() {
  return (
    <>
      <div className="hero-bg">
        <HeroSection/>
        <WhyChooseUs/>
         {/* <CountSection/> */}
      </div>
        <OurServices/>
        <Mission/>
        <Pricing/>
        <Promotions/>
    </>
  )
}

export default Home