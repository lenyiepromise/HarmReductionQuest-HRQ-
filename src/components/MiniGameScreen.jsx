import React, { useState, useEffect } from "react";

// Sample cards data (pairs)
const cardPairs = [
  { id: 1, content: "🍎" },
  { id: 2, content: "🍎" },
  { id: 3, content: "🍌" },
  { id: 4, content: "🍌" },
  { id: 5, content: "🍇" },
  { id: 6, content: "🍇" },
  { id: 7, content: "🍉" },
  { id: 8, content: "🍉" },
];

const MiniGameScreen = ({ onComplete, updateScore }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);

  // Shuffle cards on mount
  useEffect(() => {
    const shuffled = [...cardPairs].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  // Handle card click
  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].content === cards[second].content) {
        setMatched((prev) => [...prev, first, second]);
        setScore((prev) => prev + 10);
        updateScore(10);
        setTimeout(() => setFlipped([]), 800);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  // Check for game completion
  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setTimeout(() => onComplete(score), 1000);
    }
  }, [matched, cards, score, onComplete]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
        Mini Memory Match
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`flex items-center justify-center h-20 rounded-xl shadow-md cursor-pointer transition-transform duration-300
                ${isFlipped ? "bg-indigo-500 text-white" : "bg-indigo-100 text-indigo-100 hover:bg-indigo-200"}`}
            >
              {isFlipped ? card.content : "❓"}
            </div>
          );
        })}
      </div>
      <div className="mt-6 text-center text-gray-700 font-semibold">
        Mini-Game Score: {score}
      </div>
    </div>
  );
};

export default MiniGameScreen;