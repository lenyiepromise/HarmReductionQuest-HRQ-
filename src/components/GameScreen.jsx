import React, { useState } from "react";
import ScenarioCard from "./ScenarioCard";
import ScoreTracker from "./ScoreTracker";
import scenarios from "../data/scenarios";

const GameScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(50); // Start neutral at 50

  const handleChoice = (choice) => {
    setScore((prev) => prev + choice.effect);

    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert(`🎉 Game Over! Your final score: ${score + choice.effect}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-white p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Harm Reduction Quest
      </h1>

      <ScenarioCard
        scenario={scenarios[currentIndex]}
        onChoiceSelect={handleChoice}
      />

      {/* Visual Score Tracker */}
      <ScoreTracker score={score} />
    </div>
  );
};

export default GameScreen;