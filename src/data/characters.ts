export interface Character {
  id: number;
  name: string;
  house: string;
  status: 'Alive' | 'Deceased';
  gender: 'Male' | 'Female';
  region: string;
  firstAppearance: string;
  lastAppearance: string;
  image: string;
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Daenerys Targaryen",
    house: "House Targaryen",
    status: "Deceased",
    gender: "Female",
    region: "Essos",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    image: "/characters/daenerys.jpg"
  },
  {
    id: 2,
    name: "Jon Snow",
    house: "House Stark",
    status: "Alive",
    gender: "Male",
    region: "The North",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    image: "/characters/jon.jpg"
  },
  {
    id: 3,
    name: "Tyrion Lannister",
    house: "House Lannister",
    status: "Alive",
    gender: "Male",
    region: "The Westerlands",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    image: "/characters/tyrion.jpg"
  },
  {
    id: 4,
    name: "Cersei Lannister",
    house: "House Lannister",
    status: "Deceased",
    gender: "Female",
    region: "The Westerlands",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Bells",
    image: "/characters/cersei.jpg"
  },
  {
    id: 5,
    name: "Arya Stark",
    house: "House Stark",
    status: "Alive",
    gender: "Female",
    region: "The North",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    image: "/characters/arya.jpg"
  },
  {
    id: 6,
    name: "Sansa Stark",
    house: "House Stark",
    status: "Alive",
    gender: "Female",
    region: "The North",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    image: "/characters/sansa.jpg"
  },
  {
    id: 7,
    name: "Jaime Lannister",
    house: "House Lannister",
    status: "Deceased",
    gender: "Male",
    region: "The Westerlands",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Bells",
    image: "/characters/jaime.jpg"
  },
  {
    id: 8,
    name: "Brienne of Tarth",
    house: "House Tarth",
    status: "Alive",
    gender: "Female",
    region: "The Stormlands",
    firstAppearance: "What Is Dead May Never Die",
    lastAppearance: "The Iron Throne",
    image: "/characters/brienne.jpg"
  },
  {
    id: 9,
    name: "Petyr Baelish",
    house: "House Baelish",
    status: "Deceased",
    gender: "Male",
    region: "The Vale",
    firstAppearance: "Lord Snow",
    lastAppearance: "The Dragon and the Wolf",
    image: "/characters/littlefinger.jpg"
  },
  {
    id: 10,
    name: "Samwell Tarly",
    house: "House Tarly",
    status: "Alive",
    gender: "Male",
    region: "The Reach",
    firstAppearance: "The Kingsroad",
    lastAppearance: "The Iron Throne",
    image: "/characters/sam.jpg"
  },
  {
    id: 11,
    name: "Jorah Mormont",
    house: "House Mormont",
    status: "Deceased",
    gender: "Male",
    region: "The North",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Long Night",
    image: "/characters/jorah.jpg"
  },
  {
    id: 12,
    name: "Theon Greyjoy",
    house: "House Greyjoy",
    status: "Deceased",
    gender: "Male",
    region: "Iron Islands",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Long Night",
    image: "/characters/theon.jpg"
  },
  {
    id: 13,
    name: "Margaery Tyrell",
    house: "House Tyrell",
    status: "Deceased",
    gender: "Female",
    region: "The Reach",
    firstAppearance: "What Is Dead May Never Die",
    lastAppearance: "The Winds of Winter",
    image: "/characters/margaery.jpg"
  },
  {
    id: 14,
    name: "Tormund Giantsbane",
    house: "Free Folk",
    status: "Alive",
    gender: "Male",
    region: "Beyond the Wall",
    firstAppearance: "Valar Dohaeris",
    lastAppearance: "The Iron Throne",
    image: "/characters/tormund.jpg"
  },
  {
    id: 15,
    name: "Melisandre",
    house: "None",
    status: "Deceased",
    gender: "Female",
    region: "Essos",
    firstAppearance: "The North Remembers",
    lastAppearance: "The Long Night",
    image: "/characters/melissandre.jpg"
  },
  {
    id: 16,
    name: "Varys",
    house: "None",
    status: "Deceased",
    gender: "Male",
    region: "Essos",
    firstAppearance: "Lord Snow",
    lastAppearance: "The Bells",
    image: "/characters/varys.jpg"
  },
  {
    id: 17,
    name: "Eddard Stark",
    house: "House Stark",
    status: "Deceased",
    gender: "Male",
    region: "The North",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "Baelor",
    image: "/characters/ned.jpg"
  },
  {
    id: 18,
    name: "Catelyn Stark",
    house: "House Stark",
    status: "Deceased",
    gender: "Female",
    region: "The North",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Rains of Castamere",
    image: "/characters/catelyn.jpg"
  },
  {
    id: 19,
    name: "Robb Stark",
    house: "House Stark",
    status: "Deceased",
    gender: "Male",
    region: "The North",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Rains of Castamere",
    image: "/characters/robb.jpg"
  },
  {
    id: 20,
    name: "Bran Stark",
    house: "House Stark",
    status: "Alive",
    gender: "Male",
    region: "The North",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    image: "/characters/bran.jpg"
  },
  {
    id: 21,
    name: "Stannis Baratheon",
    house: "House Baratheon",
    status: "Deceased",
    gender: "Male",
    region: "The Stormlands",
    firstAppearance: "The North Remembers",
    lastAppearance: "Mother's Mercy",
    image: "/characters/stannis.jpg"
  },
  {
    id: 22,
    name: "Robert Baratheon",
    house: "House Baratheon",
    status: "Deceased",
    gender: "Male",
    region: "The Stormlands",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Wolf and the Lion",
    image: "/characters/robert.jpg"
  },
  {
    id: 23,
    name: "Joffrey Baratheon",
    house: "House Baratheon",
    status: "Deceased",
    gender: "Male",
    region: "The Crownlands",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Lion and the Rose",
    image: "/characters/joffrey.jpg"
  },
  {
    id: 24,
    name: "Tommen Baratheon",
    house: "House Baratheon",
    status: "Deceased",
    gender: "Male",
    region: "The Crownlands",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Winds of Winter",
    image: "/characters/tommen.jpg"
  },
  {
    id: 25,
    name: "Oberyn Martell",
    house: "House Martell",
    status: "Deceased",
    gender: "Male",
    region: "Dorne",
    firstAppearance: "Two Swords",
    lastAppearance: "The Mountain and the Viper",
    image: "/characters/oberyn.jpg"
  },
  {
    id: 26,
    name: "Ygritte",
    house: "Free Folk",
    status: "Deceased",
    gender: "Female",
    region: "Beyond the Wall",
    firstAppearance: "The Old Gods and the New",
    lastAppearance: "The Watchers on the Wall",
    image: "/characters/ygritte.jpg"
  },
  {
    id: 27,
    name: "The Night King",
    house: "White Walkers",
    status: "Deceased",
    gender: "Male",
    region: "Beyond the Wall",
    firstAppearance: "Oathkeeper",
    lastAppearance: "The Long Night",
    image: "/characters/nightking.jpg"
  },
  {
    id: 28,
    name: "Bronn",
    house: "House Blackwater",
    status: "Alive",
    gender: "Male",
    region: "The Reach",
    firstAppearance: "Cripples, Bastards, and Broken Things",
    lastAppearance: "The Iron Throne",
    image: "/characters/bronn.jpg"
  },
  {
    id: 29,
    name: "Podrick Payne",
    house: "House Payne",
    status: "Alive",
    gender: "Male",
    region: "The Westerlands",
    firstAppearance: "The Night Lands",
    lastAppearance: "The Iron Throne",
    image: "/characters/podrick.jpg"
  },
  {
    id: 30,
    name: "Missandei",
    house: "None",
    status: "Deceased",
    gender: "Female",
    region: "Essos",
    firstAppearance: "Valar Dohaeris",
    lastAppearance: "The Last of the Starks",
    image: "/characters/missandei.jpg"
  },
  {
    id: 31,
    name: "Grey Worm",
    house: "None",
    status: "Alive",
    gender: "Male",
    region: "Essos",
    firstAppearance: "Valar Dohaeris",
    lastAppearance: "The Iron Throne",
    image: "/characters/greyworm.jpg"
  },
  {
    id: 32,
    name: "Davos Seaworth",
    house: "House Seaworth",
    status: "Alive",
    gender: "Male",
    region: "The Stormlands",
    firstAppearance: "The North Remembers",
    lastAppearance: "The Iron Throne",
    image: "/characters/davos.jpg"
  },
  {
    id: 33,
    name: "Gendry",
    house: "House Baratheon",
    status: "Alive",
    gender: "Male",
    region: "The Stormlands",
    firstAppearance: "Cripples, Bastards, and Broken Things",
    lastAppearance: "The Iron Throne",
    image: "/characters/gendry.jpg"
  },
  {
    id: 34,
    name: "Sandor Clegane",
    house: "House Clegane",
    status: "Deceased",
    gender: "Male",
    region: "The Westerlands",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Bells",
    image: "/characters/hound.jpg"
  },
  {
    id: 35,
    name: "Gregor Clegane",
    house: "House Clegane",
    status: "Deceased",
    gender: "Male",
    region: "The Westerlands",
    firstAppearance: "Cripples, Bastards, and Broken Things",
    lastAppearance: "The Bells",
    image: "/characters/mountain.jpg"
  },
  {
    id: 36,
    name: "Olenna Tyrell",
    house: "House Tyrell",
    status: "Deceased",
    gender: "Female",
    region: "The Reach",
    firstAppearance: "Dark Wings, Dark Words",
    lastAppearance: "The Queen's Justice",
    image: "/characters/olenna.jpg"
  }
];

export const getRandomCharacter = (): Character => {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};

const getDateString = () => {
  const date = new Date();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
};

export const getDailyCharacter = (): Character => {
  // Use a consistent string format for the date to generate the seed
  const dateStr = getDateString();
  // Create a simple hash of the date string
  const hash = dateStr.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0);
  }, 0);
  // Use the absolute value of the hash to ensure positive number
  const index = Math.abs(hash) % characters.length;
  return characters[index];
};

export interface Quote {
  id: number;
  text: string;
  characterId: number;
  episode: string;
  season: number;
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: "When you play the game of thrones, you win or you die.",
    characterId: 4, // Cersei
    episode: "You Win or You Die",
    season: 1
  },
  {
    id: 2,
    text: "Winter is coming.",
    characterId: 17, // Ned Stark
    episode: "Winter Is Coming",
    season: 1
  },
  {
    id: 3,
    text: "I drink and I know things.",
    characterId: 3, // Tyrion
    episode: "No One",
    season: 6
  },
  {
    id: 4,
    text: "Dracarys.",
    characterId: 1, // Daenerys
    episode: "And Now His Watch Is Ended",
    season: 3
  },
  {
    id: 5,
    text: "The things I do for love.",
    characterId: 7, // Jaime
    episode: "Winter Is Coming",
    season: 1
  },
  {
    id: 6,
    text: "Tell Cersei. I want her to know it was me.",
    characterId: 36, // Olenna
    episode: "The Queen's Justice",
    season: 7
  },
  {
    id: 7,
    text: "Chaos is a ladder.",
    characterId: 9, // Littlefinger
    episode: "The Climb",
    season: 3
  },
  {
    id: 8,
    text: "You know nothing, Jon Snow.",
    characterId: 26, // Ygritte
    episode: "The Old Gods and the New",
    season: 2
  },
  {
    id: 9,
    text: "A Lannister always pays his debts.",
    characterId: 3, // Tyrion
    episode: "Garden of Bones",
    season: 2
  },
  {
    id: 10,
    text: "The night is dark and full of terrors.",
    characterId: 15, // Melisandre
    episode: "The North Remembers",
    season: 2
  }
];

export const getRandomQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export const getDailyQuote = (): Quote => {
  const dateStr = getDateString();
  const hash = dateStr.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0);
  }, 0);
  const index = Math.abs(hash) % quotes.length;
  return quotes[index];
};

export const searchCharacters = (query: string, previousGuesses: Character[] = []): Character[] => {
  const lowercaseQuery = query.toLowerCase();
  const guessedIds = new Set(previousGuesses.map(char => char.id));
  
  return characters
    .filter(character => 
      !guessedIds.has(character.id) &&
      (query.length === 0 || character.name.toLowerCase().includes(lowercaseQuery))
    );
}; 