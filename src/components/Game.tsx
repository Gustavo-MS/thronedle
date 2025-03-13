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
  { key: 'gender', label: 'Gender' },
  { key: 'region', label: 'Region' },
];

export default function Game() {
  const [isClient, setIsClient] = useState(false);
  const [dailyCharacter, setDailyCharacter] = useState<Character | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Character[]>([]);
  const [isFocused, setIsFocused] = useState(false);
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
    if (query.length >= 2 || isFocused) {
      setSuggestions(searchCharacters(query, gameState.guesses));
    } else if (!isFocused) {
      setSuggestions([]);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setSuggestions(searchCharacters('', gameState.guesses));
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      if (searchQuery.length < 2) {
        setSuggestions([]);
      }
    }, 200);
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
    <div className="max-w-6xl mx-auto p-3 sm:p-6 bg-black/80 rounded-lg shadow-2xl backdrop-blur-sm">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 text-yellow-500">Daily Character</h2>
      
      {/* Game input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Enter a character name..."
        className="w-full p-2 sm:p-3 text-sm sm:text-base border-2 border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
        disabled={gameState.gameOver}
      />
      
      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="mt-2 border border-gray-700 rounded-lg bg-gray-900 shadow-xl overflow-hidden max-h-60 sm:max-h-80 overflow-y-auto">
          {suggestions.map((character) => (
            <div
              key={character.id}
              onClick={() => handleGuess(character)}
              className="p-2 sm:p-3 hover:bg-gray-800 cursor-pointer flex items-center gap-2 sm:gap-3 border-b border-gray-700 last:border-none"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 relative rounded-full overflow-hidden">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm sm:text-base text-white">{character.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Column Headers */}
      <div className="grid grid-cols-5 gap-1 sm:gap-3 mt-3 mb-2 sm:mb-3">
        {columnHeaders.map((header) => (
          <div key={header.key} className="p-1 sm:p-3 text-xs sm:text-base text-yellow-500 font-bold text-center bg-gray-900/50 rounded-lg">
            {header.label}
          </div>
        ))}
      </div>

      {/* Guesses */}
      {gameState.guesses.map((guess, index) => (
        <div key={index} className="grid grid-cols-5 gap-1 sm:gap-3 mb-1 sm:mb-3">
          <div className={`flex items-center gap-1 sm:gap-2 p-1 sm:p-3 rounded-lg ${getHintColor(guess, 'name')}`}>
            <div className="w-8 h-8 sm:w-16 sm:h-16 relative rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={guess.image}
                alt={guess.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs sm:text-base text-white font-medium truncate">{guess.name}</span>
          </div>
          {['house', 'status', 'gender', 'region'].map((prop) => (
            <div
              key={prop}
              className={`p-1 sm:p-3 rounded-lg ${getHintColor(guess, prop as keyof Character)} text-white text-xs sm:text-base min-h-[2rem] sm:min-h-[5rem] flex items-center justify-center text-center`}
            >
              {guess[prop as keyof Character]}
            </div>
          ))}
        </div>
      ))}

      {/* Empty guess slots */}
      {Array.from({ length: 8 - gameState.guesses.length }).map((_, index) => (
        <div key={index} className="grid grid-cols-5 gap-1 sm:gap-3 mb-1 sm:mb-3">
          {Array.from({ length: 5 }).map((_, colIndex) => (
            <div key={colIndex} className="p-1 sm:p-3 rounded-lg bg-gray-800/50 border border-gray-700 min-h-[2rem] sm:min-h-[5rem]"></div>
          ))}
        </div>
      ))}

      {/* Game Over Message */}
      {gameState.gameOver && (
        <div className="mt-4 sm:mt-8 text-center bg-gray-900/90 p-4 sm:p-8 rounded-lg border border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-yellow-500">
            {gameState.won ? 'You Won!' : 'Game Over!'}
          </h2>
          <div className="mb-4 sm:mb-6 flex justify-center">
            <div className="w-24 h-24 sm:w-40 sm:h-40 relative rounded-lg overflow-hidden">
              <Image
                src={dailyCharacter?.image || ''}
                alt={dailyCharacter?.name || ''}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-base sm:text-xl text-white">
            The character was: <span className="font-bold text-yellow-500">{dailyCharacter?.name}</span>
          </p>
        </div>
      )}
    </div>
  );
} 