'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Character, Quote, getDailyQuote, searchCharacters } from '../data/characters';

interface QuoteGameState {
  guesses: Character[];
  gameOver: boolean;
  won: boolean;
}

const getQuoteStorageKey = () => {
  const date = new Date();
  return `thronedle-quote-${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
};

export default function QuoteGame() {
  const [isClient, setIsClient] = useState(false);
  const [dailyQuote, setDailyQuote] = useState<Quote | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Character[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [gameState, setGameState] = useState<QuoteGameState>({
    guesses: [],
    gameOver: false,
    won: false,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const quote = getDailyQuote();
    setDailyQuote(quote);
    
    const savedState = localStorage.getItem(getQuoteStorageKey());
    if (savedState) {
      setGameState(JSON.parse(savedState));
    }
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    if (gameState.guesses.length > 0) {
      localStorage.setItem(
        getQuoteStorageKey(),
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
    const won = character.id === dailyQuote?.characterId;
    const gameOver = won || newGuesses.length >= 3;

    setGameState({
      guesses: newGuesses,
      gameOver,
      won,
    });
    setSearchQuery('');
    setSuggestions([]);
  };

  if (!isClient || !dailyQuote) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-black/80 rounded-lg shadow-2xl backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500 got-font">Quote of the Day</h2>
      
      <div className="mb-8 p-6 bg-gray-900/50 rounded-lg border-2 border-gray-700">
        <p className="text-xl text-white text-center italic">&ldquo;{dailyQuote.text}&rdquo;</p>
        <p className="text-sm text-gray-400 text-center mt-2">Season {dailyQuote.season}, Episode: {dailyQuote.episode}</p>
      </div>

      {/* Game input */}
      <div className="mb-8">
        <p className="text-white mb-2">Who said this quote? ({3 - gameState.guesses.length} guesses remaining)</p>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Enter a character name..."
          className="w-full p-3 border-2 border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
          disabled={gameState.gameOver}
        />
        
        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="mt-2 border border-gray-700 rounded-lg bg-gray-900 shadow-xl overflow-hidden max-h-80 overflow-y-auto">
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

      {/* Previous Guesses */}
      <div className="space-y-3">
        {gameState.guesses.map((guess, index) => (
          <div key={index} className={`p-4 rounded-lg ${guess.id === dailyQuote.characterId ? 'bg-green-600' : 'bg-red-600'} flex items-center gap-4`}>
            <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={guess.image}
                alt={guess.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-white font-medium">{guess.name}</span>
          </div>
        ))}
      </div>

      {/* Game Over Message */}
      {gameState.gameOver && (
        <div className="mt-8 text-center bg-gray-900/90 p-8 rounded-lg border border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">
            {gameState.won ? 'You Won!' : 'Game Over!'}
          </h2>
          <button
            onClick={() => {
              const date = new Date();
              navigator.clipboard.writeText(
                `Thronedle Quote ${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}\n` +
                `${gameState.won ? gameState.guesses.length : 'X'}/3 guesses`
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