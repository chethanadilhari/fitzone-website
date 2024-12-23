import React from 'react'

const HeadingSection = () => {
  return (
    <section className=" bg-black/70"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))" }}
        >

            <div className="w-full text-center md:text-right  font-bold mx-auto max-w-screen-xl h-auto px-5 md:px-20 relative flex flex-col justify-center py-20 ">
                <h2 className=" uppercase font-sairaCondensed text-2xl md:text-6xl  text-bronze  py-10 md:py-5">Privacy Policy</h2>
                <p className="font-sairaCondensed text-base md:text-xl text-white/75">Your Privacy, Our Commitment - Safeguarding Your Personal Data with Care</p>
            </div>

        </section>
  )
}

export default HeadingSection