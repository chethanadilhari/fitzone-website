import React from 'react';
import './Home.css';
import BronzeBtn from '../../components/common/BronzeBtn'
import SocialMediaLinks from '../../components/common/SocialMediaLinks';

const HeroSection = () => {
    return (
        <section className="bg-black/20 h-screen grid justify-right items-center ">
            <div className=" max-w-screen-xl px-20 z-10 text-right">
                <h1 className="text-white text-4xl md:text-6xl pt-14 font-sairaCondensed font-bold uppercase tracking-[0.03em]">Elevate your fitness <br /> Redefine your life</h1>
                <div>
                    <p className="text-customGrey font-krub text-base py-6">Push your limits, redefine your strength, and transform your body.<br />
                        Join fitness journey where every rep counts and <br />
                        every drop of sweat fuels your success.   </p>

                </div>
                <div className="inline-flex flex-col items-center">
                    <BronzeBtn to="whyChooseUs" text="Explore more" />
                    <SocialMediaLinks className="align-middle" />
                </div>

            </div>


        </section>
    );
};

export default HeroSection;
