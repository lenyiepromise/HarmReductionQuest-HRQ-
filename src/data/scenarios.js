const scenarios = {
  1: {
    text: "You are at a party and someone offers you a drink. What do you do?",
    options: [
      { text: "Accept the drink", nextId: 2 },
      { text: "Politely decline", nextId: 3 },
    ],
  },
  2: {
    text: "The drink was too strong, you feel dizzy. What next?",
    options: [
      { text: "Keep drinking", nextId: 4 },
      { text: "Find water and rest", nextId: 5 },
    ],
  },
  3: {
    text: "You stay sober and can drive your friends home safely. 🎉",
    options: [],
  },
  4: {
    text: "You pass out and miss the rest of the night. Game over!",
    options: [],
  },
  5: {
    text: "You recover and enjoy the rest of the party responsibly. 🎉",
    options: [],
  },
};

export default scenarios;