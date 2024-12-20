import React from 'react'
import Testomonials from '../../components/common/Testomonials'



const SuccessStories = () => {

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
            <div className="max-w-screen-xl mx-auto px-20 h-auto justify-center items-center flex flex-col py-10">
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
                <div className="text-bronze text-8xl font-stalinist ">
                    "
                </div>
                <div >
                    <Testomonials item={stories[0]} />

                </div>
                

            </div>
        </section>
    )
}

export default SuccessStories