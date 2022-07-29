import React from 'react';
import cn from 'classnames';
import DemoCard from './DemoCard';

type BadgeProps = {
  class?: string;
  classObj?: {
    [className: string]: boolean;
  };
  children: React.ReactNode;
}
export const Badge: React.FC<BadgeProps> = ({ class: classes = '', classObj, children }) => {
  return (
    <span
      className={cn({
        'px-4 py-2 text-xs font-semibold text-green-800 uppercase bg-green-300 rounded-xl bg-opacity-30': true,
        [classes]: true,
        ...classObj
      })}
    >
      { children }
    </span>
  );
};

function DemoSection() {
  return (
    <div className="grid -mt-16 place-items-center text-slate-800">
      <div className="w-full max-w-6xl gap-4 mb-8 lg:rounded-md bg-opacity-60 glass">
        <div className="flex flex-col px-2 pt-2">
          <div className="flex flex-col">
            <span className="p-4 text-2xl font-semibold uppercase">Card demo</span>
          </div>
          <div className="grid grid-cols-1 mx-4 md:grid-cols-2 place-items-center">
            <DemoCard
              cardTitle="Functional Components"
              subtitle="These badges are functional components"
            >
              <Badge>Music</Badge>
              <Badge>Books</Badge>
              <Badge>Biking</Badge>
            </DemoCard>
            <DemoCard
              cardTitle="Form Components"
              subtitle={<span>This form uses <code>@tailwindcss/forms</code></span>}
            >
              <div className="grid grid-cols-1 gap-2">
                <label className="block">
                  <span className="text-gray-700">Input field</span>
                  <input type="text" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="" />
                </label>
                <label className="block">
                  <span className="text-gray-700">Date picker</span>
                  <input type="date" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
              </div>
            </DemoCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoSection;
