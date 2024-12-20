import React from 'react';
import BronzeBtn from '../../components/common/BronzeBtn'


const Mission = () => {
    return (
        <section className="  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/mission-bg.jpg')" }}
        >

            <div className="w-full max-w-screen-xl h-auto px-20 relative flex flex-col mx-auto items-center justify-center py-40 ">
                <h2 className="uppercase font-sairaCondensed text-7xl font-bold text-white py-5">Don't <span className="text-bronze">Think</span>, Begin <span className="text-bronze ">Today</span>!</h2>
                <p className="font-sairaCondensed text-xl text-center text-white">Stop waiting for the perfect moment — take charge of your fitness journey now. Every step you take brings you closer to the best version of yourself!</p>
                <BronzeBtn to="#aboutUs" text="Become a member" className='mt-10' />
            </div>
           
        </section>
    )
}

export default Mission