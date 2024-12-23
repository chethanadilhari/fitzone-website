import React, { useState } from 'react'
import Testomonials from '../../components/common/Testomonials'

const SuccessStories = () => {
    const [currentStory, setCurrentStory] = useState(0);

    const stories = [
        {
            name: "Sarah Thompson",
            title: "Regular Client",
            image: "/images/testomonial-1.jpg",
            description: "FitZone completely transformed my fitness journey. I lost 15kg and gained so much confidence thanks to their supportive trainers and personalized programs"
        },
        {
            name: "John Doe",
            title: "Regular Client",
            image: "/images/testomonial-2.jpg",
            description: "I've been a member of FitZone for 3 years now and I can't imagine going anywhere else. The community, the trainers, and the facilities are top-notch!"
        },
        {
            name: "Jane Smith",
            title: "Regular Client",
            image: "/images/testomonial-3.jpg",
            description: "I've been a member of FitZone for 3 years now and I can't imagine going anywhere else. The community, the trainers, and the facilities",
        }
    ];

    return (
        <section className="bg-black">
            <div className="max-w-screen-xl mx-auto px-5 md:px-20 h-auto justify-center items-center flex flex-col py-10">
                <div className="font-sairaCondensed uppercase font-bold">
                    <h2 className="text-bronze text-4xl">Success <span className="text-7xl text-white">Stories</span></h2>
                </div>
                <div
                    style={{
                        borderTop: '3px solid white',
                        width: '350px',
                        margin: '20px 0',
                    }}
                ></div>
                <div className=" ">
                <img src="/images/inverted-commas.png" alt="success stories" className="w-10 md:w-20 " />
                </div>
                <div>
                    <Testomonials item={stories[currentStory]} />
                </div>
                <div className="flex justify-center mt-10">
                    {stories.map((_, index) => (
                        <div
                            key={index}
                            className={`w-6 h-3 mx-2 rounded-sm cursor-pointer ${currentStory === index ? 'bg-bronze' : 'bg-white'}`}
                            onClick={() => setCurrentStory(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuccessStories
