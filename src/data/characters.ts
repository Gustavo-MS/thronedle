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

export const searchCharacters = (query: string): Character[] => {
  const lowercaseQuery = query.toLowerCase();
  return characters.filter(character =>
    character.name.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 5);
}; 