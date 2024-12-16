import React, { useState } from "react";
import ServiceItem from '../../components/common/ImageButtonContainer'

const OurServices = () => {
    const services = [
        {
            image:"/images/services-cardio-training.jpg",
            name:"Cardio Training",
            description:"Boost endurance and burn calories with high-energy cardio workouts.",
            link:"/cardio"
        },
        {
            image:"/images/services-body-building.jpg",
            name:"Body Building",
            description:"Build serious muscle mass and sculpt your physique with expert-guided strength programs.",
            link:"/body-building"
        },
        {
            image:"/images/services-fat-burning.jpg",
            name:"Fat Burning",
            description:"Shed excess fat and tone your body through targeted fat-burning routines.",
            link:"/fat-burning"
        },
        {
            image:"/images/services-crossfit.jpg",
            name:"Crossfit",
            description:"Push your limits with high-intensity functional training for full-body fitness and endurance.",
            link:"/crossfit"
        }
    ]
    const [selectedService, setSelectedService] = useState(services[0]);

    return (

        <section className="bg-black h-screen">
            <div className="text-white font-bold font-sairaCondensed text-4xl uppercase text-center pt-10 pb-3">
                <h2> <span className="text-bronze text-3xl">Our </span>Services</h2>
            </div>
<div className=" grid grid-cols-2  px-20">
            <div className=" grid px-10 grid-cols-2">
                <ServiceItem data={services[0]} handleClick={setSelectedService}/>
                <ServiceItem data={services[1]} handleClick={setSelectedService}/>
                <ServiceItem data={services[2]} handleClick={setSelectedService}/>
                <ServiceItem data={services[3]} handleClick={setSelectedService}/>
            </div>
            <div>
            <div className="max-w-sm mx-auto p-6 ">
      <img src={selectedService.image} alt="Image description"  className="w-full h-full object-fill mb-4"  />
      <a className="font-sairaCondensed text-3xl font-bold tracking-[0.3em]  text-white" >
        {selectedService.name}
        <div className="font-krub text-xs font-light tracking-[0.2em]">
        {selectedService.description}
        </div>
       
     
      </a>
      
    </div>
            </div>
</div>
        </section>
 
    )
}

export default OurServices;