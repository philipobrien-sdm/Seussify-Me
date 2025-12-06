import React, { useState } from 'react';
import { InputSectionProps } from '../types';

const DEMO_STORY = `A small town called Brindlewood sat at the edge of a quiet forest.
Every winter, the townspeople hung lanterns from the tall oak trees to guide travellers through the long, dark nights.
This year, however, something strange happened.
The lanterns began to disappear — one each night — leaving the forest path dimmer and dimmer.
A boy named Milo noticed the pattern and decided to follow the faint trail of light left behind.
He packed a sandwich, lit his own lantern, and set off into the woods just before dusk.
Deep in the forest, he discovered a clearing filled with hundreds of missing lanterns.
They were being collected by a shy creature covered in leaves and moss, who believed the lights were stars that had fallen from the sky.
When Milo explained what the lanterns truly were, the creature grew embarrassed and tried to hide.
But Milo offered a deal: the creature could keep one lantern as a “star,” as long as the rest were returned to the town.
The next night, the forest glowed brighter than ever, with all the lanterns restored — except one, shining proudly in the clearing.
And every year afterward, the creature returned for a single lantern, and the townspeople let it keep its star.`;

export const InputSection: React.FC<InputSectionProps> = ({ onGenerate }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onGenerate(input);
    }
  };

  const handleDemoClick = () => {
    setInput(DEMO_STORY);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-seussBlue p-6 md:p-10 transform transition-all hover:scale-[1.01]">
      <div className="mb-6">
        <label htmlFor="story-input" className="block text-2xl font-bold text-seussTeal mb-4 text-center">
          What story shall we tell today?
        </label>
        <textarea
          id="story-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Once upon a time, there was a developer who needed code..."
          className="w-full h-40 p-4 rounded-xl border-2 border-gray-200 focus:border-seussRed focus:ring-4 focus:ring-red-100 transition-all text-lg font-hand resize-none outline-none"
        />
        <div className="flex justify-end mt-2">
           <button 
             type="button"
             onClick={handleDemoClick}
             className="text-seussBlue hover:text-seussTeal font-bold font-hand text-lg transition-colors flex items-center gap-2 opacity-80 hover:opacity-100 py-1 px-2 rounded hover:bg-blue-50"
           >
             <span>✨</span> Need an idea? Click for a demo story!
           </button>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={!input.trim()}
          className={`
            relative px-8 py-4 rounded-full text-2xl font-bold text-white shadow-lg 
            transform transition-all duration-200
            ${input.trim() 
              ? 'bg-seussRed hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl active:translate-y-0' 
              : 'bg-gray-300 cursor-not-allowed'}
          `}
        >
          Make it Rhyme!
          {input.trim() && (
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-seussYellow rounded-full animate-bounce"></span>
          )}
        </button>
      </div>
      
      <p className="text-center text-gray-400 mt-4 text-sm font-hand">
        (Don't be shy, give it a try!)
      </p>
    </div>
  );
};