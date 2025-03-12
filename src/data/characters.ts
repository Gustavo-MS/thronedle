export interface Character {
  id: number;
  name: string;
  house: string;
  status: 'Alive' | 'Deceased';
  title?: string;
  firstAppearance: string;
  lastAppearance: string;
  actor: string;
  image: string;
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Daenerys Targaryen",
    house: "House Targaryen",
    status: "Deceased",
    title: "Queen of the Andals and the First Men",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    actor: "Emilia Clarke",
    image: "/characters/daenerys.jpg"
  },
  {
    id: 2,
    name: "Jon Snow",
    house: "House Stark",
    status: "Alive",
    title: "King Beyond the Wall",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    actor: "Kit Harington",
    image: "/characters/jon.jpg"
  },
  {
    id: 3,
    name: "Tyrion Lannister",
    house: "House Lannister",
    status: "Alive",
    title: "Hand of the King",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    actor: "Peter Dinklage",
    image: "/characters/tyrion.jpg"
  },
  {
    id: 4,
    name: "Cersei Lannister",
    house: "House Lannister",
    status: "Deceased",
    title: "Queen of the Seven Kingdoms",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Bells",
    actor: "Lena Headey",
    image: "/characters/cersei.jpg"
  },
  {
    id: 5,
    name: "Arya Stark",
    house: "House Stark",
    status: "Alive",
    title: "Princess of Winterfell",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    actor: "Maisie Williams",
    image: "/characters/arya.jpg"
  },
  {
    id: 6,
    name: "Sansa Stark",
    house: "House Stark",
    status: "Alive",
    title: "Queen in the North",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Iron Throne",
    actor: "Sophie Turner",
    image: "/characters/sansa.jpg"
  },
  {
    id: 7,
    name: "Jaime Lannister",
    house: "House Lannister",
    status: "Deceased",
    title: "Lord Commander of the Kingsguard",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Bells",
    actor: "Nikolaj Coster-Waldau",
    image: "/characters/jaime.jpg"
  },
  {
    id: 8,
    name: "Brienne of Tarth",
    house: "House Tarth",
    status: "Alive",
    title: "Lord Commander of the Kingsguard",
    firstAppearance: "What Is Dead May Never Die",
    lastAppearance: "The Iron Throne",
    actor: "Gwendoline Christie",
    image: "/characters/brienne.jpg"
  },
  {
    id: 9,
    name: "Petyr Baelish",
    house: "House Baelish",
    status: "Deceased",
    title: "Lord Protector of the Vale",
    firstAppearance: "Lord Snow",
    lastAppearance: "The Dragon and the Wolf",
    actor: "Aidan Gillen",
    image: "/characters/littlefinger.jpg"
  },
  {
    id: 10,
    name: "Samwell Tarly",
    house: "House Tarly",
    status: "Alive",
    title: "Grand Maester",
    firstAppearance: "The Kingsroad",
    lastAppearance: "The Iron Throne",
    actor: "John Bradley",
    image: "/characters/sam.jpg"
  },
  {
    id: 11,
    name: "Jorah Mormont",
    house: "House Mormont",
    status: "Deceased",
    title: "Lord of Bear Island",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Long Night",
    actor: "Iain Glen",
    image: "/characters/jorah.jpg"
  },
  {
    id: 12,
    name: "Theon Greyjoy",
    house: "House Greyjoy",
    status: "Deceased",
    title: "Prince of the Iron Islands",
    firstAppearance: "Winter Is Coming",
    lastAppearance: "The Long Night",
    actor: "Alfie Allen",
    image: "/characters/theon.jpg"
  },
  {
    id: 13,
    name: "Margaery Tyrell",
    house: "House Tyrell",
    status: "Deceased",
    title: "Queen of the Seven Kingdoms",
    firstAppearance: "What Is Dead May Never Die",
    lastAppearance: "The Winds of Winter",
    actor: "Natalie Dormer",
    image: "/characters/margaery.jpg"
  },
  {
    id: 14,
    name: "Tormund Giantsbane",
    house: "Free Folk",
    status: "Alive",
    title: "Leader of the Free Folk",
    firstAppearance: "Valar Dohaeris",
    lastAppearance: "The Iron Throne",
    actor: "Kristofer Hivju",
    image: "/characters/tormund.jpg"
  },
  {
    id: 15,
    name: "Melisandre",
    house: "None",
    status: "Deceased",
    title: "Red Priestess",
    firstAppearance: "The North Remembers",
    lastAppearance: "The Long Night",
    actor: "Carice van Houten",
    image: "/characters/melisandre.jpg"
  },
  {
    id: 16,
    name: "Varys",
    house: "None",
    status: "Deceased",
    title: "Master of Whisperers",
    firstAppearance: "Lord Snow",
    lastAppearance: "The Bells",
    actor: "Conleth Hill",
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