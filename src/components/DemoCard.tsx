import React from 'react';

type Props = {
  cardTitle: string;
  subtitle: string | React.ReactNode;
  children: React.ReactNode;
};

function DemoCard({ cardTitle, subtitle, children }: Props) {
  return (
    <div className="flex flex-col items-center justify-between px-4 py-8 mb-4 bg-white rounded-md shadow h-[272px] w-[312px]">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-semibold font-title">{cardTitle}</span>
        <span className="text-sm">{subtitle}</span>
      </div>
      <div className="flex gap-2 mt-3">
        {children}
      </div>
    </div>
  );
}

export default DemoCard;
