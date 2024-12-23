import React from 'react';

const HeadingSection = () => {
    return (
        <section className=" bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/about-bg.jpg')" }}
        >

            <div className="w-full   font-bold max-w-screen-xl h-screen md:h-auto px-5 md:px-20 relative flex flex-col text-right justify-center py-40 ">
                <h2 className=" uppercase font-sairaCondensed text-6xl  text-white py-10 md:py-5">About <span className="text-bronze  text-8xl">Us</span></h2>
                <p className="font-sairaCondensed text-2xl py-0 md:py-10 text-white/75">Discover Our Passion for Fitness - Empowering You to Achieve Your Best Self!</p>
            </div>

        </section>
    )
}

export default HeadingSection