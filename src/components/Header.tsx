import React from "react";

interface HeaderProps {
  center?: React.ReactNode;
  right?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ center, right }) => (
  <header className="w-full fixed top-0 z-50 py-4 md:py-8">
    <div className="container mx-auto px-4 md:px-6 flex flex-row items-center justify-between relative mt-2 md:mt-0">
      <div className="flex items-center flex-1 min-w-[70px] md:min-w-[180px] w-0 md:w-auto justify-start pr-2">
        <h1 className="text-xs md:text-xl text-orange-500 italic whitespace-nowrap" style={{ fontFamily: 'Pacifico, cursive' }}>
          nicholas chua
        </h1>
      </div>
      {/* Center content (menu or invisible menu) */}
      {center}
      {/* Right button (avatar/about or back) */}
      <div className="flex items-center flex-1 min-w-0 md:min-w-[80px] w-0 md:w-auto justify-end">
        {right}
      </div>
    </div>
  </header>
); 