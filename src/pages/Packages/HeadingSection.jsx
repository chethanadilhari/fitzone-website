import React from 'react';

const HeadingSection = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/packages-bg.jpg')" }}
        >
            <div className="w-full font-bold mx-auto h-screen md:h-auto max-w-screen-xl px-5 md:px-20 relative flex flex-col text-right justify-center py-60">
                <h2 className="uppercase font-sairaCondensed py-10 md:py-5 text-6xl text-white ">
                    Our <span className="text-bronze text-8xl">Packages</span>
                </h2>
                <p className="font-sairaCondensed text-2xl text-white">
                    Discover Our Passion for Fitness - Choose the Perfect Membership Plan for You!
                </p>
            </div>
           
        </section>
    )
}

export default HeadingSection