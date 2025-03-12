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
    <main className="min-h-screen py-4 sm:py-8 px-2 sm:px-4" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/images/background.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}>
      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto mb-4 sm:mb-6" role="tablist">
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
            Character Game
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
            Quote Game
          </button>
        </div>
      </div>

      {/* Game Panels */}
      <div className="relative">
        <div
          role="tabpanel"
          id="character-panel"
          aria-labelledby="character-tab"
          className={`transition-opacity duration-300 ${
            activeTab === 'character' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        >
          <Game />
        </div>
        <div
          role="tabpanel"
          id="quote-panel"
          aria-labelledby="quote-tab"
          className={`transition-opacity duration-300 ${
            activeTab === 'quote' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        >
          <QuoteGame />
        </div>
      </div>
    </main>
  );
}
