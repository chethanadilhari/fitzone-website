import React, { useState } from "react";
import TeamContainer from '../../components/common/TeamContainer'

const OurTeam = () => {
    const trainers = [
        {
            image: "/images/trainer-1.jpg",
            name: "Cardio Training",
            description: "Boost endurance and burn calories with high-energy cardio workouts.",
            link: "/cardio"
        },
        {
            image: "/images/trainer-2.jpg",
            name: "Body Building",
            description: "Build serious muscle mass and sculpt your physique with expert-guided strength programs.",
            link: "/body-building"
        },
        {
            image: "/images/trainer-3.jpg",
            name: "Fat Burning",
            description: "Shed excess fat and tone your body through targeted fat-burning routines.",
            link: "/fat-burning"
        },
        {
            image: "/images/trainer-4.jpg",
            name: "Crossfit",
            description: "Push your limits with high-intensity functional training for full-body fitness and endurance.",
            link: "/crossfit"
        },

    
    ];
    const [selectedTrainer, setSelectedTrainer] = useState(trainers[0]);

    return (
        <section className="bg-black">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-20 py-10">
                <div className="text-white font-bold font-sairaCondensed text-4xl uppercase text-center">
                    <h2><span className="text-bronze text-3xl">Our </span>Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 pb-10">
                    <div className="grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                        {trainers.map((trainer, index) => (
                            <TeamContainer key={index} data={trainer} handleClick={setSelectedTrainer} />
                        ))}
                    </div>
                    <div>
                        <div className="items-center pl-0 lg:pl-8 w-auto ">
                            <div className="grid border-2 border-bronze">
                                <img src={selectedTrainer.image} alt="Image description" className="max-w-full object-cover h-84" />
                                <div className="p-5">
                                    <a className="font-sairaCondensed text-2xl font-bold tracking-[0.3em] text-white">
                                        {selectedTrainer.name}
                                        <div className="font-krub text-xs py-2 font-light tracking-[0.2em]">
                                            {selectedTrainer.description}
                                        </div>
                                    </a>
                                    <button className="text-bronze font-koulen text-sm px-5 py-1 border-2 mt-2 mb-3 tracking-[0.3em] hover:text-white hover:bg-bronze border-bronze bg-transparent">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default OurTeam