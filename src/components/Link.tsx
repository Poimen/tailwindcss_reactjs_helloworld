import React from 'react';
import cn from 'classnames';

export type LinkProps = {
  to: string;
  class?: string;
  classObj?: any;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, class: classes = '', classObj, children }) => {
  return (
    <a
      href={to}
      className={cn({
        'no-underline transition duration-300 ease-in-out rounded cursor-pointer': true,
        [classes]: true,
        ...classObj
      })}
      rel="noopener noreferrer"
    >
      { children }
    </a>
  );
};

export default Link;
