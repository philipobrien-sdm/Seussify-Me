import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center relative mb-8">
      <div className="inline-block relative">
        {/* Hat graphic CSS construction */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-16 h-16 opacity-20 pointer-events-none md:opacity-100">
             <div className="w-full h-4 bg-seussRed rounded-t-lg mx-auto w-10"></div>
             <div className="w-full h-4 bg-white mx-auto w-12"></div>
             <div className="w-full h-4 bg-seussRed mx-auto w-14"></div>
             <div className="w-full h-4 bg-white mx-auto w-16"></div>
             <div className="w-full h-2 bg-seussRed rounded-b-lg w-24 -ml-4"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-seussRed tracking-tight drop-shadow-sm">
          Seussify <span className="text-seussBlue">Me!</span>
        </h1>
      </div>
      <p className="mt-4 text-xl text-gray-600 font-hand max-w-lg mx-auto">
        Type in a story, a thought, or a news,<br/>
        And we'll turn it right into a poem by Dr. Seuss!
      </p>
    </header>
  );
};