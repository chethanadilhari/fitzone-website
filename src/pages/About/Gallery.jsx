import React from 'react'
import BronzeBtn from'../../components/common/BronzeBtn'

const Gallery = () => {
    return (
        <section className="bg-black">
            <div className=" w-full max-w-screen-xl mx-auto h-auto px-5 md:px-20">
                <div className="md:grid md:grid-cols-2 gap-4 py-10">
                   <div className="inset-0  inline-block">
                        <img
                            src="/images/gallery-img-1.jpg"
                            alt="our gallery"
                            className="w-full h-full object-cover"
                            
                        />
                       
                    </div>

                  <div className="grid grid-rows gap-2 md:gap-4">
                        <img
                            src="/images/gallery-img-2.jpg"
                            alt="our gallery"
                            className="w-full h-full object-cover"
                        />
                    <div className="grid grid-cols-2 gap-2 md:gap-4 ">
                        <img
                            src="/images/gallery-img-3.jpg"
                            alt="our gallery"
                            className="w-full h-full object-cover"
                        />
                    
                        <img
                            src="/images/gallery-img-4.jpg"
                            alt="our gallery"
                            className="w-full h-full object-cover"
                        />
                        </div>
                  </div>
                </div>
            </div>
        </section>
    )


}

export default Gallery