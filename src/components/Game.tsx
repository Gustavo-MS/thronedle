'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Character, getDailyCharacter, searchCharacters } from '../data/characters';

interface GameState {
  guesses: Character[];
  gameOver: boolean;
  won: boolean;
}

const getStorageKey = () => {
  const date = new Date();
  return `thronedle-${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
};

const columnHeaders = [
  { key: 'name', label: 'Character' },
  { key: 'house', label: 'House' },
  { key: 'status', label: 'Status' },
  { key: 'title', label: 'Title' },
  { key: 'actor', label: 'Actor' },
];

export default function Game() {
  const [isClient, setIsClient] = useState(false);
  const [dailyCharacter, setDailyCharacter] = useState<Character | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Character[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    guesses: [],
    gameOver: false,
    won: false,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const character = getDailyCharacter();
    setDailyCharacter(character);
    
    const savedState = localStorage.getItem(getStorageKey());
    if (savedState) {
      setGameState(JSON.parse(savedState));
    }
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    if (gameState.guesses.length > 0) {
      localStorage.setItem(
        getStorageKey(),
        JSON.stringify(gameState)
      );
    }
  }, [gameState, isClient]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length >= 2) {
      setSuggestions(searchCharacters(query));
    } else {
      setSuggestions([]);
    }
  };

  const handleGuess = (character: Character) => {
    if (gameState.gameOver) return;

    const newGuesses = [...gameState.guesses, character];
    const won = character.id === dailyCharacter?.id;
    const gameOver = won || newGuesses.length >= 8;

    setGameState({
      guesses: newGuesses,
      gameOver,
      won,
    });
    setSearchQuery('');
    setSuggestions([]);
  };

  const getHintColor = (guess: Character, property: keyof Character) => {
    if (!dailyCharacter) return 'bg-gray-200';
    return guess[property] === dailyCharacter[property]
      ? 'bg-green-600'
      : 'bg-red-600';
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-black/80 rounded-lg shadow-2xl backdrop-blur-sm">
      <h1 className="text-5xl font-bold text-center mb-8 text-yellow-500 font-serif">Thronedle</h1>
      
      {/* Game input */}
      <div className="mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Enter a character name..."
          className="w-full p-3 border-2 border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
          disabled={gameState.gameOver}
        />
        
        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="mt-2 border border-gray-700 rounded-lg bg-gray-900 shadow-xl overflow-hidden">
            {suggestions.map((character) => (
              <div
                key={character.id}
                onClick={() => handleGuess(character)}
                className="p-3 hover:bg-gray-800 cursor-pointer flex items-center gap-3 border-b border-gray-700 last:border-none"
              >
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-white">{character.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-5 gap-3 mb-3">
        {columnHeaders.map((header) => (
          <div key={header.key} className="p-3 text-yellow-500 font-bold text-center bg-gray-900/50 rounded-lg">
            {header.label}
          </div>
        ))}
      </div>

      {/* Guesses */}
      <div className="space-y-3">
        {gameState.guesses.map((guess, index) => (
          <div key={index} className="grid grid-cols-5 gap-3">
            <div className={`flex items-center gap-2 p-3 rounded-lg ${getHintColor(guess, 'name')}`}>
              <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={guess.image}
                  alt={guess.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-white font-medium truncate">{guess.name}</span>
            </div>
            {['house', 'status', 'title', 'actor'].map((prop) => (
              <div
                key={prop}
                className={`p-3 rounded-lg ${getHintColor(guess, prop as keyof Character)} text-white min-h-[5rem] flex items-center justify-center text-center`}
              >
                {guess[prop as keyof Character]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Empty guess slots */}
      {Array.from({ length: 8 - gameState.guesses.length }).map((_, index) => (
        <div key={index} className="grid grid-cols-5 gap-3 mt-3">
          {Array.from({ length: 5 }).map((_, colIndex) => (
            <div key={colIndex} className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 min-h-[5rem]"></div>
          ))}
        </div>
      ))}

      {/* Game Over Message */}
      {gameState.gameOver && (
        <div className="mt-8 text-center bg-gray-900/90 p-8 rounded-lg border border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">
            {gameState.won ? 'You Won!' : 'Game Over!'}
          </h2>
          <div className="mb-6 flex justify-center">
            <div className="w-40 h-40 relative rounded-lg overflow-hidden">
              <Image
                src={dailyCharacter?.image || ''}
                alt={dailyCharacter?.name || ''}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-xl text-white mb-4">
            The character was: <span className="font-bold text-yellow-500">{dailyCharacter?.name}</span>
          </p>
          <button
            onClick={() => {
              const date = new Date();
              navigator.clipboard.writeText(
                `Thronedle ${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}\n` +
                `${gameState.won ? gameState.guesses.length : 'X'}/8 guesses`
              );
            }}
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Share Result
          </button>
        </div>
      )}
    </div>
  );
} 