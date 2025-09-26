import React, { useState } from "react";
import ScenarioCard from "./ScenarioCard";
import ScoreTracker from "./ScoreTracker";
import EndScreen from "./EndScreen";
import StartScreen from "./StartScreen";
import scenarios from "../data/scenarios";

const GameScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(50); 
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleChoice = (choice) => {
    const newScore = score + choice.effect;
    setScore(newScore);

    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(50);
    setIsGameOver(false);
    setIsGameStarted(false);
  };

  const handleStart = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-white p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Harm Reduction Quest
      </h1>

      {!isGameStarted ? (
        <StartScreen onStart={handleStart} />
      ) : !isGameOver ? (
        <>
          <ScenarioCard
            scenario={scenarios[currentIndex]}
            onChoiceSelect={handleChoice}
          />
          <ScoreTracker score={score} />
        </>
      ) : (
        <EndScreen score={score} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default GameScreen;