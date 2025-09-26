// src/data/scenarios.js

const scenarios = [
  {
    id: 1,
    text: "You arrive at a party. Someone offers you an unknown pill.",
    choices: [
      {
        text: "Take the pill without asking.",
        health: -30,
        score: -10,
        nextId: 2,
        feedback: "Risky choice! Taking unknown substances can be harmful."
      },
      {
        text: "Ask what it is before deciding.",
        health: 0,
        score: 10,
        nextId: 2,
        feedback: "Smart move! Always check what you're being offered."
      },
      {
        text: "Politely decline.",
        health: 0,
        score: 15,
        nextId: 2,
        feedback: "Great! Saying no is always a safe option."
      }
    ]
  },
  {
    id: 2,
    text: "You feel thirsty and see different drinks on the table.",
    choices: [
      {
        text: "Grab the first open drink you see.",
        health: -20,
        score: -5,
        nextId: 3,
        feedback: "Unsafe! An open drink could be spiked."
      },
      {
        text: "Look for a sealed bottle of water.",
        health: +10,
        score: +20,
        nextId: 3,
        feedback: "Good choice! Sealed drinks are safer."
      },
      {
        text: "Decide not to drink anything.",
        health: 0,
        score: 5,
        nextId: 3,
        feedback: "Safe, but remember to stay hydrated!"
      }
    ]
  },
  {
    id: 3,
    text: "You notice a friend looking unwell and dizzy.",
    choices: [
      {
        text: "Ignore them and continue partying.",
        health: 0,
        score: -20,
        nextId: 4,
        feedback: "Not good. Friends’ safety matters too."
      },
      {
        text: "Stay with them and check if they are okay.",
        health: 0,
        score: +15,
        nextId: 4,
        feedback: "Caring choice! Always look out for friends."
      },
      {
        text: "Find a sober adult or call for help.",
        health: 0,
        score: +25,
        nextId: 4,
        feedback: "Excellent! Acting responsibly saves lives."
      }
    ]
  },
  {
    id: 4,
    text: "End of Demo – You’ve reached the end of the test scenarios!",
    choices: []
  }
];

export default scenarios;