import React from 'react'
import HeroSection from './HeroSection'
import WhyChooseUs from './WhyChooseUs'
import './home.css'
import CountSection from './CountSection'

function Home() {
  return (
    <>
      <div className="hero-bg">
        <HeroSection/>
        <WhyChooseUs/>
        <CountSection/>
      </div>
        <div>Home</div>
    </>
  )
}

export default Home