import React from 'react'


    function TeamContainer({ data, handleClick }) {
        return (
          <div 
            className="relative text-white font-bold overflow-hidden group group-hover:scale-105 border-2 border-customDarkGrey hover:border-neutral-700 cursor-pointer" 
            onClick={() => handleClick(data)}
          >
            
            <img 
              src={data.image} 
              alt="Image description" 
              className=" relative text-center w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105" 
            />
        
            {/* Gradient Overlay */}
            <div className="group-hover:opacity-50 transition-opacity "></div>
      
            {/* Button Text */}
            <div className="absolute w-full  flex items-center justify-center text-center group-hover:opacity-100 transition-opacity duration-300">
              <a 
                className="group-hover:text-bronze font-sairaCondensed text-md tracking-[0.3em]  px-3 py-3 w-full bg-customDarkGrey  text-white"
              >
                {data.name}
              </a>
            </div>
          </div>
        );
      }


export default TeamContainer