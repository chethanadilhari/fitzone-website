import React from 'react'
import { Element } from 'react-scroll';
import './WhyChooseUs.css';
import BronzeBtn from '../../components/common/BronzeBtn'

function WhyChooseUs() {
    return (
        <Element name="whyChooseUs">
        <section className="custom-gradient h-screen p-20 flex flex-col justify-end">
            <div className='grid grid-cols-3'>
                <div className="mx-auto font-sairaCondensed uppercase font-bold vertical-text" >
                    <h2><span className="text-6xl text-right float-end custome-outline">Why</span> <br />
                        <span className="text-8xl text-white">Choose</span> <br />
                        <span className="text-8xl text-bronze"> Us?</span></h2>
                </div>
                <div className="inline-flex flex-col items-center col-span-2">
                    <div className="text-white font-sairaCondensed text-sm px-20 py-5 tracking-[0.2em] ">
                        <p>At our center, you’ll discover the perfect blend of expert coaching, cutting-edge equipment, and customized fitness programs tailored to your unique needs. Whether your goal is to build strength, boost endurance, or transform your overall well-being, we provide the guidance, tools, and motivation to help you succeed.</p>
                            <br/>
                            <p>It’s more than just fitness; it’s a lifestyle upgrade that unlocks a healthier, happier, and stronger version of yourself.</p>
                    <BronzeBtn to="#aboutUs" text="Read more" className='mt-10'/>
                    </div>
                </div>
            </div>
        </section>
        </Element>
    )

}

export default WhyChooseUs