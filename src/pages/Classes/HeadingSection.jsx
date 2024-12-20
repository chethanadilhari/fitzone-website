import React from 'react'

const HeadingSection = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('/images/classes-bg-2.jpg')" }}
        >

            <div className="w-full  font-bold mx-auto h-auto max-w-screen-xl px-20 relative flex flex-col text-right justify-center py-40 ">
                <h2 className=" uppercase font-sairaCondensed text-6xl  text-white py-5">Our <span className="text-bronze text-8xl">Classes</span></h2>
                <p className="font-sairaCondensed text-2xl text-white">Discover Dynamic Fitness Classes Designed to Challenge, Motivate, and Empower <br/> Every Step of Your Journey.</p>
            </div>

        </section>
    )
}

export default HeadingSection