import React from 'react'

const HeadingSection = () => {
    return (
        <section className=" bg-cover bg- bg-center bg-no-repeat"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/contact-bg.jpg')" }}
        >

            <div className="w-full  font-bold max-w-screen-xl h-screen md:h-auto px-5 md:px-20 relative flex flex-col text-right justify-center py-20 md:py-60 ">
                <h2 className=" uppercase font-sairaCondensed text-6xl py-10 md:py-5 text-white ">Contact <span className="text-bronze text-8xl">Us</span></h2>
                <p className="font-sairaCondensed text-2xl  text-white/75">Got Questions? <br/>
                Let's Connect and Kickstart Your Fitness Journey Together!</p>
            </div>

        </section>
    )
}

export default HeadingSection