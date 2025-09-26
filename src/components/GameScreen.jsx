// src/screens/GameScreen.jsx

import React, { useState } from "react";
import scenarios from "../data/scenarios";

const GameScreen = () => {
  const [currentId, setCurrentId] = useState(1);
  const [health, setHealth] = useState(100);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentScenario = scenarios.find((s) => s.id === currentId);

  const handleChoice = (choice) => {
    setHealth((prev) => Math.max(0, prev + choice.health));
    setScore((prev) => prev + choice.score);
    setFeedback(choice.feedback);

    if (choice.nextId) {
      setTimeout(() => {
        setCurrentId(choice.nextId);
        setFeedback("");
      }, 1200); // short delay to show feedback
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Harm Reduction Quest</h2>

      <div className="mb-4">
        <p>❤️ Health: {health}</p>
        <p>⭐ Score: {score}</p>
      </div>

      {currentScenario ? (
        <>
          <p className="mb-6 text-lg">{currentScenario.text}</p>
          <div className="space-y-2">
            {currentScenario.choices.length > 0 ? (
              currentScenario.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 w-full"
                >
                  {choice.text}
                </button>
              ))
            ) : (
              <p className="text-green-600 font-semibold">
                🎉 You finished the demo!
              </p>
            )}
          </div>
        </>
      ) : (
        <p>Game Over</p>
      )}

      {feedback && (
        <div className="mt-4 text-yellow-600 font-medium">{feedback}</div>
      )}
    </div>
  );
};

export default GameScreen;