import React from 'react';

export const LoadingState: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border-4 border-seussYellow p-10 flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-8 border-gray-100 rounded-full"></div>
        <div className="absolute inset-0 border-8 border-seussRed rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-4 border-8 border-seussBlue rounded-full border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      
      <h3 className="text-2xl font-bold text-seussBlue mb-2 animate-pulse">
        Thinking up words...
      </h3>
      <p className="text-lg text-gray-500 font-hand text-center max-w-md">
        We're consulting the Lorax,<br/>
        And asking the fish,<br/>
        To grant your specific,<br/>
        Poetical wish!
      </p>
    </div>
  );
};