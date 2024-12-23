import React from 'react'

const AboutClasses = () => {
    return (
        <section className="bg-customDarkGrey">
            <div className="w-full max-w-screen-xl mx-auto h-auto px-5 md:px-20 ">
                <div className="lg:grid lg:grid-cols-2 items-center gap-8 py-10">
                    <div className="relative">
                        <img
                            src="/images/our-classes-about.jpg"
                            alt="our story"
                        />
                    </div>

                    <div className="text-white text-center md:text-left font-sairaCondensed lg:pt-0 pt-10 ">
                        <h2 className="text-bronze uppercase font-bold text-3xl md:text-4xl">About <span className="text-5xl md:text-7xl text-white">Our Classes</span></h2>
                        <p className=" py-5 text-base tracking-wider font-light">At FitZone Fitness Center, we offer a diverse range of classes designed to help you achieve your fitness goals in a fun and motivating environment. Whether you're looking to build strength, improve flexibility, enhance endurance, or find balance through mindfulness, our expert-led classes cater to all fitness levels. 
                            <br/>
                            <br/>
                            From high-energy cardio and strength sessions to calming yoga and Pilates, every class is thoughtfully designed to ensure maximum results. Join us to experience personalized guidance, supportive community vibes, and an exciting path toward a healthier, stronger you!
                        </p>

                    </div>

                </div>
            </div>
        </section>

    )
}

export default AboutClasses