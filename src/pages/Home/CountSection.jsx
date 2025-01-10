import React from 'react'
import CountDown from '../../components/common/CountDown'

function CountSection() {
  return (
    <section className="bg-black/50 px-4 md:px-20 flex flex-col justify-end">
      <div className='w-full max-w-screen-xl mx-auto items-center flex flex-col md:flex-row justify-between  text-white py-10 h-auto md:h-36'>
        <div className='mb-4 md:mb-0'><CountDown number={"15+"} content={"Years of Experience"}/></div>
        <div className='mb-4 md:mb-0'><CountDown number={"19+"} content={"Fitness Trainee"}/></div>
        <div className='mb-4 md:mb-0'><CountDown number={"5K"} content={"Hours Trained"}/></div>
        <div className='mb-4 md:mb-0'><CountDown number={"4K"} content={"Happy Clients"}/></div>
      </div>
    </section>
  )
}

export default CountSection