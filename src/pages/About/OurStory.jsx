import React from 'react'

const OurStory = () => {
    return (
        <section className="bg-customDarkGrey">
            <div className="w-full max-w-screen-xl mx-auto h-auto px-20 ">
                <div className="grid grid-cols-2 items-center gap-8 py-10">
                    <div>
                        <img
                            src="/images/our-story-img.jpg"
                            alt="our story"
                        />
                    </div>

                    <div className="text-white font-sairaCondensed ">
                        <h2 className="text-bronze uppercase font-bold text-4xl">Our <span className="text-7xl text-white">Story</span></h2>
                        <p className=" py-5 text-base tracking-wider font-light">Founded in 2003, FitZone Fitness Center was built with one goal in mind: to help individuals achieve their health and fitness goals in a supportive and motivating environment. <br/>
                           <br/>
                            From humble beginnings, we’ve grown into a community-driven fitness center offering personalized training programs, expert coaching, and cutting-edge fitness technology.
                            Whether you’re taking your first step toward fitness or you’re an experienced athlete looking to push limits, we’re here to help you every step of the way.
                        </p>

                    </div>

                </div>
            </div>
        </section>

    )
}

export default OurStory