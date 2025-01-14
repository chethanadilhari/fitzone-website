import React from 'react'
import { Element } from 'react-scroll';
import './WhyChooseUs.css';
import BronzeBtn from '../../components/common/BronzeBtn'

function WhyChooseUs() {
    return (
        <Element name="whyChooseUs">
        <section className="custom-gradient pb-10">
            <div className='md:grid md:grid-cols-3 w-full max-w-screen-xl h-auto px-5 md:px-20 md:py-28 mx-auto'>
                <div className="mx-auto font-sairaCondensed uppercase font-bold text-center md:text-start vertical-text" >
                    <h2><span className="md:text-6xl text-4xl text-right md:float-end custome-outline">Why</span> <br />
                        <span className="md:text-8xl text-6xl text-white">Choose</span> <br />
                        <span className="md:text-8xl text-5xl text-bronze text-left"> Us?</span></h2>
                </div>
                <div className="inline-flex flex-col items-center col-span-2">
                    <div className="text-white font-sairaCondensed text-sm px-3 md:pl-10 py-5 tracking-[0.2em] text-center md:text-left ">
                        <p>At our center, you’ll discover the perfect blend of expert coaching, cutting-edge equipment, and customized fitness programs tailored to your unique needs. Whether your goal is to build strength, boost endurance, or transform your overall well-being, we provide the guidance, tools, and motivation to help you succeed.</p>
                            <br/>
                            <p>It’s more than just fitness; it’s a lifestyle upgrade that unlocks a healthier, happier, and stronger version of yourself.</p>
                    <BronzeBtn to="/about" text="Read more" className='mt-10'/>
                    </div>
                </div>
            </div>
        </section>
        </Element>
    )

}

export default WhyChooseUs