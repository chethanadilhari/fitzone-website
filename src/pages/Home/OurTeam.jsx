import React, { useState } from "react";
import TeamContainer from '../../components/common/TeamContainer'
import SocialMediaLinks from "../../components/common/SocialMediaLinks";

const OurTeam = () => {
    const trainers = [
        {
            image: "/images/trainer-1.jpg",
            name: "Mark Bennett",
            service: "Cardio Training",
            description: "Boost endurance and burn calories with high-energy cardio workouts.",
            link: "/cardio"
        },
        {
            image: "/images/trainer-2.jpg",
            name: "Jason Wright",
            service: "Body Building",
            description: "Build serious muscle mass and sculpt your physique with expert-guided strength programs.",
            link: "/body-building"
        },
        {
            image: "/images/trainer-3.jpg",
            name: "Ryon Carter",
            service: "Fat Burning",
            description: "Shed excess fat and tone your body through targeted fat-burning routines.",
            link: "/fat-burning"
        },
        {
            image: "/images/trainer-4.jpg",
            name: "Emily Turner",
            service: "Crossfit",
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
                    <div className="">
                        <div className="items-center pl-0 lg:pl-8  ">
                            <div className="grid border-2 border-neutral-500 min-h-[400px] lg:min-h-[690px]">
                                <img src={selectedTrainer.image} alt="Image description" className="max-w-full w-auto object-cover h-84 " />
                                <div className="p-5">
                                    <a className="font-sairaCondensed text-2xl font-bold tracking-[0.3em] text-white">
                                        {selectedTrainer.name}
                                        <div className="text-lg font-bold tracking-[0.2em] text-bronze"> 
                                        {selectedTrainer.service}
                                        </div>
                                        <div
                                         className="font-krub text-xs py-2 font-light tracking-[0.2em]">
                                            {selectedTrainer.description}
                                        </div>
                                    </a>
                                   <div className="place-items-end">
                                   <SocialMediaLinks/>
                                   </div>
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