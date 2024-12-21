import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { faTag } from "@fortawesome/free-solid-svg-icons"


const BlogContainer = ({ data }) => {
    return (
        <section>
            <div className="w-full text-white max-w-screen-xl h-auto  mx-auto  ">
                <div className="flex font-sairaCondensed flex-col hover:scale-105 duration-500 items-left bg-black border-bronze tracking-widest hover:border-bronze border-2 gap-5 justify-center">
                    <div>
                        <img
                            src={data.image}
                            alt="Image description"
                            className="w-full h-48"
                        />
                    </div >

                    <div className="text-lg px-3  ">
                        {data.title}
                    </div>
                    <div className="text-white/75 px-3 pb-5 flex text-xs gap-7">
                        <div className="flex gap-2">
                            <div><FontAwesomeIcon icon={faCalendarDays} style={{ color: "#b08d57", fontSize: "1rem" }} /></div>
                            <div>{data.date}</div>
                        </div>
                        <div className="flex gap-2">
                            <div><FontAwesomeIcon icon={faTag} style={{ color: "#b08d57", fontSize: "1rem" }} /></div>
                            <div>{data.category}</div>
                        </div>
                    </div>




                </div>
            </div>

        </section>
    )
}

export default BlogContainer