const games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch"],
  },
  {
    id: "2",
    title: "Red Dead Redemption 2",
    platform: ["PlayStation 4"],
  },
  {
    id: "3",
    title: "Fortnite",
    platform: ["PC", "PlayStation 4", "Xbox One"],
  },
  {
    id: "4",
    title: "Minecraft",
    platform: ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
  },
  {
    id: "5",
    title: "Final Fantasy VII Remake",
    platform: ["PlayStation 4"],
  },
];

const authors = [
  {
    id: "1",
    name: "John Doe",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    verified: false,
  },
  {
    id: "3",
    name: "Robert Johnson",
    verified: true,
  },
];

const reviews = [
  {
    id: "1",
    rating: 4,
    content: "Great game with amazing graphics!",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 3,
    content: "Enjoyable gameplay, but the story could be better.",
    author_id: "2",
    game_id: "2",
  },
  {
    id: "3",
    rating: 5,
    content: "Highly recommended! The multiplayer is fantastic.",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: 2,
    content: "Disappointing graphics and repetitive gameplay.",
    author_id: "1",
    game_id: "4",
  },
  {
    id: "5",
    rating: 4,
    content: "Incredible sandbox experience. Endless possibilities!",
    author_id: "2",
    game_id: "4",
  },
  {
    id: "6",
    rating: 4,
    content: "Engaging storyline and well-developed characters.",
    author_id: "3",
    game_id: "5",
  },
  {
    id: "7",
    rating: 3,
    content: "Fun gameplay mechanics, but lacks depth.",
    author_id: "1",
    game_id: "6",
  },
  {
    id: "8",
    rating: 4,
    content: "Absolutely stunning visuals and immersive gameplay!",
    author_id: "2",
    game_id: "7",
  },
];

export default { games, reviews, authors };
