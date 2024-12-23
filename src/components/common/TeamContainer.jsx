import React from 'react'


    function TeamContainer({ data, handleClick }) {
        return (
          <div 
            className="relative text-white font-bold overflow-hidden group group-hover:scale-105 border-none " 
            onClick={() => handleClick(data)}
          >
            
            <img 
              src={data.image} 
              alt="Image description" 
              className=" relative text-center w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105" 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent  to-black opacity-30 group-hover:opacity-50 transition-opacity "></div>
      
            {/* Button Text */}
            <div className="absolute w-full z-50 flex items-end ">
              <a 
                className="group-hover:text-bronze font-sairaCondensed text-md tracking-[0.3em]  px-3 py-3 w-full bg-black text-white"
              >
                {data.name}
              </a>
            </div>
          </div>
        );
      }


export default TeamContainer