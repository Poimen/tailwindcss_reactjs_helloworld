import React from 'react';

function HeroSection() {
  return (
    <div className="grid min-h-screen overflow-hidden pt-hero bg-gradient-to-br from-green-500 to-indigo-500 place-items-center">
      <div className="flex flex-col justify-between w-full max-w-6xl gap-4 p-4 mt-10 mb-48 item text-slate-100">
        <h1 className="flex flex-col gap-4 py-4 mb-2 font-extrabold text-center">
          <span className="mb-2 text-4xl lg:text-6xl">Example integration of React and The Speedy Web Compiler</span>
          <span className="text-3xl">React + Webpack + SWC + Tailwind CSS</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex items-center w-full gap-2 p-5 font-mono text-xs bg-transparent border-2 rounded-md md:text-base sm:text-sm border-opacity-40">
            <code>$</code>
            <code>git clone git@github.com:Poimen/tailwindcss_reactjs_helloworld.git</code>
          </div>
          <div className="flex flex-col gap-2 my-2">
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Use React with SWC
            </div>
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Use Tailwind inline
            </div>
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Use custom Webpack configuration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
