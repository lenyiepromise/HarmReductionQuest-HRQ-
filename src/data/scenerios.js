// src/data/scenarios.js

const scenarios = [
  {
    id: 1,
    prompt: "You’re at a party and someone offers you a pill. What do you do?",
    choices: [
      { text: "Take it without asking", effect: -10 },
      { text: "Say no politely", effect: +10 },
      { text: "Ask what it is first", effect: +5 },
    ],
  },
  {
    id: 2,
    prompt: "Your friend is feeling dizzy after drinking. What do you do?",
    choices: [
      { text: "Ignore and keep partying", effect: -15 },
      { text: "Help them sit and give water", effect: +10 },
      { text: "Call for medical help", effect: +15 },
    ],
  },
  {
    id: 3,
    prompt: "You’re stressed about exams. Someone offers you drugs to ‘relax’.",
    choices: [
      { text: "Try the drugs", effect: -20 },
      { text: "Say no and take a break instead", effect: +10 },
      { text: "Talk to a friend about stress", effect: +8 },
    ],
  },
];

export default scenarios;
