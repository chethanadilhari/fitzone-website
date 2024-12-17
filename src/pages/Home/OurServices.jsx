import React, { useState } from "react";
import ServiceItem from '../../components/common/ImageButtonContainer'

const OurServices = () => {
    const services = [
        {
            image: "/images/services-cardio-training.jpg",
            name: "Cardio Training",
            description: "Boost endurance and burn calories with high-energy cardio workouts.",
            link: "/cardio"
        },
        {
            image: "/images/services-body-building.jpg",
            name: "Body Building",
            description: "Build serious muscle mass and sculpt your physique with expert-guided strength programs.",
            link: "/body-building"
        },
        {
            image: "/images/services-fat-burning.jpg",
            name: "Fat Burning",
            description: "Shed excess fat and tone your body through targeted fat-burning routines.",
            link: "/fat-burning"
        },
        {
            image: "/images/services-crossfit.jpg",
            name: "Crossfit",
            description: "Push your limits with high-intensity functional training for full-body fitness and endurance.",
            link: "/crossfit"
        }
    ]
    const [selectedService, setSelectedService] = useState(services[0]);

    return (

        <section className="bg-black  max-w-screen-xl h-auto px-20 ">
            <div className="text-white font-bold font-sairaCondensed text-4xl uppercase text-center pt-10 pb-3">
                <h2> <span className="text-bronze text-3xl">Our </span>Services</h2>
            </div>
            <div className=" grid grid-cols-2 pt-5 pb-10 ">
                <div className=" grid gap-3 grid-cols-2">
                    <ServiceItem data={services[0]} handleClick={setSelectedService} />
                    <ServiceItem data={services[1]} handleClick={setSelectedService} />
                    <ServiceItem data={services[2]} handleClick={setSelectedService} />
                    <ServiceItem data={services[3]} handleClick={setSelectedService} />
                </div>
                <div>
                    <div className="items-center pl-8  w-auto">
                        <div className=" grid border broder-2 border-bronze">
                            <img src={selectedService.image} alt="Image description" className="max-w h-auto object-cover mb-4" />

                            <div className="px-5">
                                <a className="font-sairaCondensed text-2xl font-bold tracking-[0.3em]  text-white" >

                                    {selectedService.name}
                                    <div className="font-krub text-xs py-2 font-light tracking-[0.2em]">
                                        {selectedService.description}
                                    </div>

                                </a>

                                <button className="text-bronze font-koulen text-sm px-5 py-1 border-2 mt-2 mb-3 tracking-[0.3em] border-bronze bg-transparent ">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default OurServices;