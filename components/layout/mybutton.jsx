'use client';
import React, { useState } from 'react';

const MyButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const screenHeight = window.innerHeight+100;
    window.scrollTo({ top: screenHeight, behavior: 'smooth' });
    setClicked(true);
  };

  return (
    <div className={`mt-[410px] sticky bottom-4 left-1/2 transform -translate-x-1/2 }`}>
      <button
        className="flex justify-center items-center w-fit font-medium basis-1 p-2 px-5 min-w-max text-sm text-center hover:!text-[#09073a] hover:bg-opacity-100 active:bg-opacity-90 hover:outline-white/80 outline rounded-full hover:outline-offset-4 active:outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-white/80 aspect-square bg-slate-800/20 hover:bg-slate-700/50"
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="20" className="inline text-slate-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
        </svg>
      </button>
    </div>
  );
};

export default MyButton;