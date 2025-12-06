import React, { useState } from 'react';
import { PoemDisplayProps } from '../types';

export const PoemDisplay: React.FC<PoemDisplayProps> = ({ 
  title, 
  content, 
  imageUrl, 
  originalTopic, 
  isImageLoading, 
  onReset 
}) => {
  const [isOriginalVisible, setIsOriginalVisible] = useState(false);

  const handleSaveHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - A Seussified Story</title>
    <style>
        body { margin: 0; padding: 40px; background-color: #f0f9ff; font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif; color: #333; }
        .container { max-width: 800px; margin: 0 auto; background: white; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden; border-top: 10px solid #FF4136; }
        .header { background-color: #e6f7ff; padding: 20px; text-align: center; border-bottom: 1px solid #b3e5fc; display: flex; justify-content: space-between; align-items: center; }
        .badge { display: inline-block; background: #FFDC00; color: #333; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; }
        .brand { font-size: 0.8em; color: #0074D9; font-weight: bold; }
        .content { padding: 40px; text-align: center; }
        h1 { color: #0074D9; font-size: 2.5rem; margin-top: 0; line-height: 1.2; margin-bottom: 30px; }
        .poem-text { font-size: 1.3rem; line-height: 1.6; white-space: pre-wrap; color: #444; margin: 30px 0; font-family: 'Comic Sans MS', cursive; }
        .illustration { max-width: 80%; height: auto; border: 4px dashed #ccc; border-radius: 10px; transform: rotate(1deg); padding: 10px; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin: 0 auto 30px auto; display: block; }
        .original-section { background: #fafafa; padding: 20px 40px; border-top: 2px dashed #eee; text-align: left; font-size: 0.9rem; color: #666; }
        .original-label { font-weight: bold; text-transform: uppercase; color: #999; margin-bottom: 5px; font-size: 0.8rem; }
        .footer { background: #FFDC00; height: 20px; width: 100%; display: flex; }
        .footer-stripe { flex: 1; height: 100%; }
        .footer-stripe:nth-child(even) { background-color: #ffe55e; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <span class="badge">Official Seussified Souvenir</span>
            <span class="brand">Made with Seussify Me</span>
        </div>
        <div class="content">
            <h1>${title}</h1>
            ${imageUrl ? `<img src="${imageUrl}" class="illustration" alt="Seuss Illustration">` : ''}
            <div class="poem-text">${content}</div>
        </div>
        ${originalTopic ? `
        <div class="original-section">
            <div class="original-label">Based on the boring original story:</div>
            <div>${originalTopic}</div>
        </div>` : ''}
        <div class="footer">
            ${Array.from({length:20}).map(() => '<div class="footer-stripe"></div>').join('')}
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border-t-8 border-seussRed overflow-hidden">
      <div className="bg-blue-50 p-6 border-b border-blue-100 flex justify-between items-center">
        <div className="flex gap-2 items-center">
           <div className="flex gap-2 mr-3">
             <div className="w-3 h-3 rounded-full bg-seussRed"></div>
             <div className="w-3 h-3 rounded-full bg-seussYellow"></div>
             <div className="w-3 h-3 rounded-full bg-seussBlue"></div>
           </div>
           <span className="font-hand text-gray-400 uppercase tracking-widest text-sm hidden sm:inline">Official Poem</span>
        </div>
        
        <button 
          onClick={handleSaveHtml}
          className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-blue-100 shadow-sm text-seussBlue font-bold text-sm hover:bg-seussBlue hover:text-white transition-all hover:shadow-md"
          title="Save this masterpiece as an HTML file"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="hidden sm:inline">Save Souvenir</span>
          <span className="sm:hidden">Save</span>
        </button>
      </div>
      
      <div className="p-8 md:p-12 pb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-seussBlue mb-8 leading-tight">
          {title}
        </h2>

        {/* Image Section */}
        <div className="flex justify-center mb-8">
           {imageUrl ? (
             <div className="relative p-2 bg-white border-4 border-dashed border-gray-300 rounded-xl shadow-lg transform rotate-1 max-w-md transition-transform hover:rotate-0 hover:scale-105 duration-300">
               <img 
                 src={imageUrl} 
                 alt="Seuss-style illustration" 
                 className="rounded-lg w-full h-auto"
               />
               <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-seussYellow rounded-full flex items-center justify-center shadow font-bold text-white transform rotate-12">
                 Art!
               </div>
             </div>
           ) : isImageLoading ? (
             <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl border-2 border-gray-100 animate-pulse w-full max-w-sm">
               <div className="w-16 h-16 border-4 border-seussTeal border-t-transparent rounded-full animate-spin mb-4"></div>
               <p className="font-hand text-xl text-seussTeal">Sketching up a doodle...</p>
             </div>
           ) : null}
        </div>
        
        <div className="prose prose-lg max-w-none text-center">
          <div className="font-hand text-2xl md:text-3xl leading-relaxed text-gray-700 whitespace-pre-wrap">
            {content}
          </div>
        </div>

        <div className="mt-12 flex justify-center mb-8">
          <button
            onClick={onReset}
            className="group px-8 py-3 bg-seussTeal text-white text-xl font-bold rounded-full hover:bg-teal-500 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>Start Another!</span>
            <svg 
              className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Original Text Accordion Ribbon */}
      {originalTopic && (
        <div className="border-t border-gray-100">
            <button 
                onClick={() => setIsOriginalVisible(!isOriginalVisible)}
                className="w-full bg-gray-50 hover:bg-gray-100 p-4 text-center transition-colors flex flex-col items-center group cursor-pointer"
            >
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-seussBlue font-bold text-xs uppercase tracking-[0.2em] transition-colors">
                    <span>{isOriginalVisible ? 'Hide' : 'Show'} the Boring Original Version</span>
                    <svg 
                        className={`w-4 h-4 transform transition-transform duration-300 ${isOriginalVisible ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out bg-gray-50 ${isOriginalVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-center max-w-2xl mx-auto">
                    <div className="inline-block px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm text-gray-600 font-sans italic text-sm leading-relaxed">
                        "{originalTopic}"
                    </div>
                </div>
            </div>
        </div>
      )}
      
      {/* Decorative footer inside card */}
      <div className="bg-seussYellow h-4 w-full flex">
         {Array.from({ length: 20 }).map((_, i) => (
             <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-seussYellow' : 'bg-yellow-300'}`}></div>
         ))}
      </div>
    </div>
  );
};