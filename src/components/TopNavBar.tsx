import React, { useState } from 'react';
import cn from 'classnames';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Link, { LinkProps } from './Link';

const IconLink: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      class="flex items-center gap-2 p-2 bg-transparent hover:bg-neutral-50 hover:bg-opacity-10"
    >
      {children}
    </Link>
  );
};

const LinkToGitHub: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <IconLink to={to}>
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
      {children}
    </IconLink>
  );
};

function TopNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useScrollPosition(() => {
    setIsScrolled(() => window.scrollY > 10);
  }, [isScrolled]);

  return (
    <div className={cn({
      'fixed inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b border-transparent': true,
      'bg-transparent': !isScrolled,
      'bg-zinc-100': isScrolled
    })}>
      <div className={cn({
        'flex items-center justify-between w-full p-2 h-hero': true,
        'text-slate-100': !isScrolled,
        'text-slate-800': isScrolled
      })}>
        <div className="flex items-center p-4">
          <span className="text-4xl font-title">Example<span className="font-extrabold text-purple-900">UI</span></span>
        </div>
        <div className="items-center hidden gap-3 p-4 sm:flex">
          <LinkToGitHub to="https://github.com/Poimen/tailwindcss_reactjs_helloworld">GitHub Repo</LinkToGitHub>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
