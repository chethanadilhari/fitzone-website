import React from 'react';
import { Link } from 'react-router-dom';

const BronzeBtn = ({ to, text, className = "" }) => {
    return (
      <button className={`hover:border-white shadow-none hover:shadow-[0_0_0_2px_white] transition-shadow font-koulen text-xl tracking-[0.2em] uppercase border border-bronze bg-bronze text-white px-10 py-3 ${className}`}>
        <Link to={to}>
          {text}
        </Link>
      </button>
    );
  };

export default BronzeBtn;
