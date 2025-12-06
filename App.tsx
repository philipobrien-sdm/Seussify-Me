import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { PoemDisplay } from './components/PoemDisplay';
import { LoadingState } from './components/LoadingState';
import { generateSeussPoem, generateSeussIllustration } from './services/gemini';
import { PoemResponse } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [poemData, setPoemData] = useState<PoemResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (topic: string) => {
    if (!topic.trim()) return;

    setLoading(true);
    setError(null);
    setPoemData(null);
    setImageLoading(false);

    try {
      // 1. Generate the poem text
      const result = await generateSeussPoem(topic);
      // Merge the original topic into the result
      setPoemData({ ...result, originalTopic: topic });
      setLoading(false); // Stop main loading to show text
      
      // 2. Start image generation
      setImageLoading(true);
      try {
        const imagePrompt = `${result.title}. ${topic}`;
        const imageUrl = await generateSeussIllustration(imagePrompt);
        if (imageUrl) {
          setPoemData(prev => prev ? { ...prev, imageUrl } : null);
        }
      } catch (imgErr) {
        console.error("Failed to generate image, but keeping poem", imgErr);
        // We don't block the UI if image fails
      } finally {
        setImageLoading(false);
      }

    } catch (err) {
      console.error(err);
      setError("Oh dear, oh my! Something went wrong. The Sneetches are confused. Please try again!");
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPoemData(null);
    setError(null);
    setImageLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
      <div className="w-full max-w-3xl space-y-8">
        <Header />
        
        <main className="relative z-10">
          {!poemData && !loading && (
            <InputSection onGenerate={handleGenerate} />
          )}

          {loading && <LoadingState />}

          {poemData && (
            <PoemDisplay 
              title={poemData.title} 
              content={poemData.content}
              imageUrl={poemData.imageUrl}
              originalTopic={poemData.originalTopic}
              isImageLoading={imageLoading}
              onReset={handleReset} 
            />
          )}

          {error && (
            <div className="mt-8 p-6 bg-red-100 border-l-4 border-seussRed rounded-r-lg shadow-md animate-bounce">
              <h3 className="text-xl font-bold text-seussRed mb-2">Oh No!</h3>
              <p className="text-red-800 font-hand text-lg">{error}</p>
              <button 
                onClick={() => setError(null)}
                className="mt-4 px-4 py-2 bg-seussRed text-white rounded-full font-bold hover:bg-red-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Decorative footer elements */}
      <div className="fixed bottom-0 left-0 w-full h-4 bg-seussRed z-0"></div>
      <div className="fixed bottom-4 left-0 w-full h-4 bg-white z-0"></div>
      <div className="fixed bottom-8 left-0 w-full h-4 bg-seussRed z-0"></div>
    </div>
  );
};

export default App;