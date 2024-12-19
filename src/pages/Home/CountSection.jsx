import React from 'react'
import CountDown from '../../components/common/CountDown'

function CountSection() {
  return (
    <section className="bg-black/50 px-20 flex flex-col justify-end">
    <div className='w-full max-w-screen-xl mx-auto flex justify-between text-white py-10 h-36'>
        <div><CountDown number={"15+"} content={"Years of Experience"}/></div>
        <div><CountDown number={"19+"} content={"Fitness Trainee"}/></div>
        <div><CountDown number={"5K"} content={"Hours Trained"}/></div>
        <div><CountDown number={"4K"} content={"Happy Clients"}/></div>
    </div>
</section>
  )
}

export default CountSection