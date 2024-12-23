import React from 'react';
import './Home.css';
import BronzeBtn from '../../components/common/BronzeBtn'
import SocialMediaLinks from '../../components/common/SocialMediaLinks';

const HeroSection = () => {
    return (
        <section className="bg-black/20 h-screen max-h-[720px] grid items-center">
            <div className="w-full max-w-screen-xl px-5 md:px-20 z-10 text-center md:text-right mx-auto justify-center pt-44 md:pt-0">
                <h1 className="text-white text-4xl md:text-6xl md:pb-5 pt-14 md:pt-32 font-sairaCondensed font-bold uppercase tracking-[0.03em]">Elevate your fitness <br /> Redefine your life</h1>
                <div>
                    <p className="text-customGrey font-krub font-medium text-base  pt-5 md:pt-1 pb-32 md:pb-10">Push your limits, redefine your strength, and transform your body.<br />
                        Join fitness journey where every rep counts and <br />
                        every drop of sweat fuels your success.   </p>
 
                </div>
                <div className="inline-flex flex-col items-center">
                    <BronzeBtn to="whyChooseUs" text="Explore more"/>
                    <SocialMediaLinks className="align-middle" />
                </div>

            </div>




        </section>
    );
};

export default HeroSection;
