import React from 'react';

function ImageButtonContainer({ data, handleClick }) {
  return (
    <div 
      className="relative text-white p-2 font-bold overflow-hidden group" 
      onClick={() => handleClick(data)}
    >
      {/* Image */}
      <img 
        src={data.image} 
        alt="Image description" 
        className="max-w-80 h-56 object-cover group-hover:scale-105 border-4 group-hover:border-bronze  duration-200 border-white" 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent  to-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

      {/* Button Text */}
      <div className="absolute inset-0 flex items-end ">
        <a 
          className="group-hover:text-bronze font-sairaCondensed text-md tracking-[0.3em]  px-3 py-3 w-full bg-black text-white"
        >
          {data.name}
        </a>
      </div>
    </div>
  );
}

export default ImageButtonContainer;
