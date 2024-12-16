import React from 'react';

function ImageButtonContainer({ data, handleClick }) {
  return (
    <div className="relative  text-white p-2 font-bold overflow-hidden" 
    onClick={() => handleClick(data)}>
      <img src={data.image} alt="Image description" className="w-full h-40 object-cover mb-2" />
      
      <div className="absolute inset-0 flex items-center justify-center">
      <a className="font-sairaCondensed text-md tracking-[0.3em] border-2 border-white bg-transparent text-white" >
        {data.name}
      </a>
      </div>
    </div>
  );
}

export default ImageButtonContainer;
