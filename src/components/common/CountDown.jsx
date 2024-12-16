import React from 'react'

const CountDown = ({ number, content, className = "" }) => {
    return (
        <div className={`font-sairaCondensed flex items-center text-2xl tracking-[0.2em] uppercase font-bold text-white px-5 py-2 ${className}`}>
            <div className="text-6xl">{number}</div>
            <div style={{
            borderLeft: '5px solid #b08d57',
            height: '55px', // Adjust as needed
            margin: '0 10px',
        }}></div>
            <div>{content}</div>
        </div>
    );
}

export default CountDown