import React from 'react'

const HeadingSection = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('/images/classes-bg-2.jpg')" }}
        >

            <div className="w-full  font-bold mx-auto h-screen md:h-auto max-w-screen-xl px-5 md:px-20 relative flex flex-col text-right justify-center py-40 ">
                <h2 className=" uppercase font-sairaCondensed py-10 md:py-5 text-6xl  text-white ">Our <span className="text-bronze text-8xl">Classes</span></h2>
                <p className="font-sairaCondensed text-2xl text-white/75">Discover Dynamic Fitness Classes Designed to Challenge, Motivate, and Empower <br/> Every Step of Your Journey.</p>
            </div>

        </section>
    )
}

export default HeadingSection