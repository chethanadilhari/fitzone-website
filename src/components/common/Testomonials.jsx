import React from 'react'

const Testomonials = ({ item }) => {
    return (
        <div className="grid font-sairaCondensed justify-center text-center">
            <div className="font-base text-white py-4 text-center ">
                "
                {item.description}
                "
            </div>
            <div>
                <img src={item.image} alt="testomonial" className="w-36 rounded-3xl mx-auto" />
            </div>
            <div className="text-white text-2xl py-2">
                {item.name}
            </div>
            <div className="text-white text-base">
                {item.title}
            </div>
        </div >

    )
}

export default Testomonials