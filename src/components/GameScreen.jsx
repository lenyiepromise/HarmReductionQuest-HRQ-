// src/components/GameScreen.jsx
import React, { useState } from "react";
import scenarios from "../data/scenarios";

const GameScreen = () => {
  const [currentId, setCurrentId] = useState(1);
  const scenario = scenarios[currentId];

  if (!scenario) {
    return <div className="text-xl">No scenario found!</div>;
  }

  return (
    <div className="max-w-xl bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Harm Reduction Quest</h1>
      <p className="mb-6">{scenario.text}</p>

      {scenario.options.length > 0 ? (
        <div className="space-y-2">
          {scenario.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setCurrentId(option.nextId)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-green-600 font-semibold">🎉 The End!</p>
      )}
    </div>
  );
};

export default GameScreen;