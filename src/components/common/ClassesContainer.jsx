import React from 'react'
import BronzeBtn from './BronzeBtn'

const ClassesContainer = ({ data }) => {
    return (
        <section>
            <div className="w-full text-white max-w-screen-xl h-auto mx-auto mb-5 px-5 md:px-20">
                <div className="md:flex md:flex-rows-2  items-center hover:border-bronze border-2 gap-5 justify-center">

                    <img 
                        src={data.image}
                        alt="Image description"
                        className="md:w-96 w-auto h-auto "
                    />
                    <div className="flex flex-col font-sairaCondensed gap-4 items-start py-5 px-5 justify-center">
                        <div className="text-2xl font-bold text-bronze">
                            {data.name}
                        </div>
                        <div>
                            {data.description}
                        </div>
                        <div>
                            <BronzeBtn to="whyChooseUs" text="Join now"  />
                        </div>
                    </div>
 


                </div>
            </div>

        </section>
    )
}

export default ClassesContainer