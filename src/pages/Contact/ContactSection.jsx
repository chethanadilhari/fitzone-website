import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactSection = () => {
    return (
        <section className="bg-black">
            <div className="w-full max-w-screen-xl h-auto mx-auto px-40 py-10 ">
                <div className="flex justify-between text-white">
                    
                    <div className="flex flex-col font-sairaCondensed">
                        <div>
                            <h1 className="text-xl text-bronze pb-5 uppercase font-bold">Contact Us</h1>
                            <h1 className="text-3xl uppercase font-bold">Get in Touch</h1>
                        </div>
                        <div className="pt-10 flex flex-col items-start tracking-widest gap-10">

                            <div className="flex justify-between gap-10">
                                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#b08d57", fontSize: "2rem" }} />
                                <p>
                                    333 Middle Winchendon Rd, Rindge, <br /> NH 03461
                                </p>
                            </div>

                            <div className="flex justify-between gap-10">
                                <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#b08d57", fontSize: "2rem" }} />
                                <p>
                                    125-711-811  |  125-668-886
                                </p>
                            </div>

                            <div className="flex justify-between gap-10">
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#b08d57", fontSize: "2rem" }} />
                                <p>
                                    Support.fitzone@gmail.com
                                </p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="flex flex-col font-sairaCondensed tracking-widest text-white gap-5">
                            <input type="text" placeholder="Name" className="w-full px-2 bg-black border-b-2 border-bronze text-white outline-none" style={{ width: '500px' }} />
                            <input type="email" placeholder="Email" className="w-full px-2 bg-black border-b-2 border-bronze text-white outline-none" style={{ width: '500px' }} />
                            <input type="tel" placeholder="Mobile Number" className="w-full px-2 bg-black border-b-2 border-bronze text-white outline-none" style={{ width: '500px' }} />
                            <input type="text" placeholder="Comments" className="w-full px-2 bg-black border-2 border-bronze text-white outline-none" style={{ width: '500px',height:'100px' }} />
                            <button className="mt-5 px-5 py-2 bg-bronze text-white font-bold uppercase">Submit</button>
                        </div>
                    </div>
                    
                    </div>
                    <div className="pt-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086487497839!2d-122.419415484681!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e9e3b1b%3A0x4c8b8b8b8b8b8b8b!2s333%20Middle%20Winchendon%20Rd%2C%20Rindge%2C%20NH%2003461!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactSection