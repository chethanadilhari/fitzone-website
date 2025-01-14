import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const HeadingSection = ({search}) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <section className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/images/blog-bg.jpg')" }}
        >
            <div className="w-full font-bold mx-auto h-auto max-w-screen-xl px-20 tracking-wider relative flex flex-col text-center items-center justify-center py-20">
                <h2 className="uppercase font-sairaCondensed text-5xl md:text-8xl text-white py-10 md:py-5">Blog</h2>
                <p className="font-sairaCondensed md:text-2xl text-white">Your Ultimate Guide to Fitness, Health, and Wellness <br /> – Stay Informed, Stay Motivated!</p>
                <div className="flex justify-center items-end gap-3">
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-1 bg-transparent border-b-2 border-bronze  text-white outline-none pb-2 mt-20 font-sairaCondensed"
                            style={{ width: '300px' }}
                        />
                    </div>
                    <div>
                        <button onClick={() => search(searchQuery)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#b08d57", fontSize: "1.5rem" }} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeadingSection