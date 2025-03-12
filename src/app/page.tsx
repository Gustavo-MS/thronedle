'use client';

import { useState } from 'react';
import Game from '../components/Game';
import QuoteGame from '../components/QuoteGame';

type GameTab = 'character' | 'quote';

export default function Home() {
  const [activeTab, setActiveTab] = useState<GameTab>('character');

  return (
    <main className="min-h-screen py-8 px-4" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/images/background.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}>
      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto mb-6 flex gap-2">
        <button
          onClick={() => setActiveTab('character')}
          className={`px-6 py-3 rounded-lg font-bold text-lg transition-colors ${
            activeTab === 'character'
              ? 'bg-yellow-500 text-black'
              : 'bg-gray-900/50 text-yellow-500 hover:bg-gray-900'
          }`}
        >
          Character Game
        </button>
        <button
          onClick={() => setActiveTab('quote')}
          className={`px-6 py-3 rounded-lg font-bold text-lg transition-colors ${
            activeTab === 'quote'
              ? 'bg-yellow-500 text-black'
              : 'bg-gray-900/50 text-yellow-500 hover:bg-gray-900'
          }`}
        >
          Quote Game
        </button>
      </div>

      {/* Active Game */}
      {activeTab === 'character' ? <Game /> : <QuoteGame />}
    </main>
  );
}
