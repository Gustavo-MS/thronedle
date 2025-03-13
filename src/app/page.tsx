'use client';

import { useState, useEffect } from 'react';
import Game from '../components/Game';
import QuoteGame from '../components/QuoteGame';

type GameTab = 'character' | 'quote';

export default function Home() {
  const [activeTab, setActiveTab] = useState<GameTab>('character');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get saved tab preference
    const savedTab = localStorage.getItem('thronedle-active-tab');
    if (savedTab === 'character' || savedTab === 'quote') {
      setActiveTab(savedTab);
    }
    setMounted(true);
  }, []);

  const handleTabChange = (tab: GameTab) => {
    setActiveTab(tab);
    localStorage.setItem('thronedle-active-tab', tab);
  };

  const handleKeyDown = (e: React.KeyboardEvent, tab: GameTab) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabChange(tab);
    }
  };

  if (!mounted) return null;

  return (
    <main 
      className="min-h-screen flex flex-col relative" 
      style={{
        background: 'black',
      }}
    >
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/images/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <div className="relative z-10 flex-grow flex flex-col py-4 sm:py-8 px-2 sm:px-4">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6 sm:mb-8 text-yellow-500 got-font">
          Thronedle
        </h1>

        {/* Tab Navigation */}
        <div className="max-w-6xl mx-auto mb-4 sm:mb-6 w-full" role="tablist">
          <div className="flex gap-1 sm:gap-2 p-1 bg-gray-900/30 backdrop-blur-sm rounded-lg">
            <button
              role="tab"
              aria-selected={activeTab === 'character'}
              aria-controls="character-panel"
              tabIndex={activeTab === 'character' ? 0 : -1}
              onClick={() => handleTabChange('character')}
              onKeyDown={(e) => handleKeyDown(e, 'character')}
              className={`flex-1 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-lg transition-all duration-200 ${
                activeTab === 'character'
                  ? 'bg-yellow-500 text-black shadow-lg'
                  : 'bg-transparent text-yellow-500 hover:bg-gray-900/50'
              }`}
            >
              Character
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'quote'}
              aria-controls="quote-panel"
              tabIndex={activeTab === 'quote' ? 0 : -1}
              onClick={() => handleTabChange('quote')}
              onKeyDown={(e) => handleKeyDown(e, 'quote')}
              className={`flex-1 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-lg transition-all duration-200 ${
                activeTab === 'quote'
                  ? 'bg-yellow-500 text-black shadow-lg'
                  : 'bg-transparent text-yellow-500 hover:bg-gray-900/50'
              }`}
            >
              Quote
            </button>
          </div>
        </div>

        {/* Game Panels */}
        <div className="flex-grow flex flex-col">
          <div
            role="tabpanel"
            id="character-panel"
            aria-labelledby="character-tab"
            className={`h-full transition-opacity duration-300 ${
              activeTab === 'character' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          >
            <Game />
          </div>
          <div
            role="tabpanel"
            id="quote-panel"
            aria-labelledby="quote-tab"
            className={`h-full transition-opacity duration-300 ${
              activeTab === 'quote' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          >
            <QuoteGame />
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 mt-8 text-center">
          <a
            href="https://github.com/gustavo-ms/thronedle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm sm:text-base inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </footer>
      </div>
    </main>
  );
}
