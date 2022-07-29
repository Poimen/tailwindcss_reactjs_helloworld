import React from 'react';
import Link from './Link';

function FooterNav() {
  return (
    <div className="grid lg:rounded-md place-items-center text-slate-800 bg-zinc-200">
      <div className="flex flex-col-reverse w-full max-w-6xl gap-16 p-4 mt-4 mb-8 lg:flex-row">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-title">Example<span className="font-extrabold text-purple-900">UI</span></span>
          <span>Example of using <code>React, Webpack, SWC and Tailwind</code></span>
          <span>Website inspiration taken from <Link to="https://daisyui.com/">daisyUI</Link></span>
        </div>
        <div className="flex flex-col">
          <span className="mb-2 font-bold uppercase opacity-50">Links</span>
          <ul className="flex flex-col gap-2 lg:gap-4">
            <Link to="https://github.com/Poimen/tailwindcss_reactjs_helloworld">This Example Repository</Link>
            <Link to="https://github.com/Poimen">GitHub Profile</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
