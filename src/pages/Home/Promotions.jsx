import React from 'react';
import BronzeBtn from '../../components/common/BronzeBtn';

const Promotions = () => {
    return (
        <section className="h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/promotions-bg.jpg')" }}
        >
            <div className="flex justify-end font-sairaCondensed text-white py-20 px-20">
                <div className="text-left">
                    <div className="flex gap-4">
                        <div
                            style={{
                                borderTop: '3px solid white',
                                width: '100px',
                                margin: '20px 0',
                            }}
                        ></div>
                        <div>
                            <p className="text-3xl font-bold tracking-[0.05em]">Special Offer At Gym</p>
                        </div>
                    </div>
                    <h2 className="text-8xl font-bold tracking-tight text-bronze uppercase">30% off</h2>
                    <h3 className="text-2xl font-bold tracking-wider">With Annual Packages</h3>
                    <p className="text-base tracking-wider">Join now and get 30% off your first month! Upgrade to an Annual Plan and enjoy 2 months free. <br/> Don’t miss out — start your fitness journey today!</p>
                    <BronzeBtn to="#aboutUs" text="Become a member" className="mt-5" />
                </div>
            </div>
        </section>
    );
};

export default Promotions;