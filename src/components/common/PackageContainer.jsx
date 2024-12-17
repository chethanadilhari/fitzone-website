import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";


const PackageContainer = ({ data, icon, className = "" }) => {
    return (
       
        <div
            className={`font-sairaCondensed border-2 hover:border-bronze hover:shadow-[0_0_0_2px_#b08d57] items-center tracking-[0.1em] font-bold text-white  ${className}`}
        >
            {/* Plan Name */}
            <div className="uppercase hover:text-bronze text-3xl font-bold py-3 text-center">
                {data.name}
            </div>

            {/* Plan Description */}
            <div className="text-sm text-center h-5 font-medium">{data.description}</div>

            {/* Plan Price */}
            <div className="font-bold my-5 hover:bg-bronze text-center py-2 bg-gray-600 text-3xl">
            <span className="text-5xl">${data.price}</span>
            <span className="text-base block">/month</span>
            </div>

            {/* Features List */}
            <ul className="font-light text-sm text-left h-30 list-disc pl-6">
                {data.features.map((feature, i) => (
                    <li key={i} className="flex items-center my-2">
                        <FontAwesomeIcon
                            icon={faSquareCheck}
                            className="text-bronze mr-2"
                        />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Action Button */}
            <button
                className="hover:border-bronze mx-20  hover:bg-bronze shadow-none hover:shadow-[0_0_0_1px_white] transition-shadow font-koulen text-lg tracking-[0.2em] uppercase border-2 border-customGrey bg-transparent text-white px-5 py-2 my-2 "
            >
                Join Now
            </button>
        </div>
  

    );
};

export default PackageContainer;
