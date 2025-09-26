import React, { useState } from "react";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import MiniGameScreen from "./screens/MiniGameScreen";
import ResultsScreen from "./screens/ResultsScreen";

// Sample quiz questions
const quizQuestions = [
  {
    text: "What is harm reduction?",
    options: [
      "Avoiding all risky behavior",
      "Minimizing negative consequences of risky behavior",
      "Encouraging risky behavior",
      "Punishing risky behavior",
    ],
    answer: 1,
    points: 10,
  },
  {
    text: "Which of these is a harm reduction strategy?",
    options: ["Needle exchange programs", "Prohibition", "Ignoring addiction", "Punishment"],
    answer: 0,
    points: 10,
  },
  {
    text: "Why is education important in harm reduction?",
    options: [
      "It prevents all risky behavior",
      "It raises awareness and promotes safer practices",
      "It discourages discussions about risks",
      "It punishes risky behavior",
    ],
    answer: 1,
    points: 10,
  },
];

function App() {
  const [stage, setStage] = useState("start");
  const [totalScore, setTotalScore] = useState(0);

  const updateScore = (points) => {
    setTotalScore((prev) => prev + points);
  };

  const handleQuizComplete = () => {
    setStage("miniGame");
  };

  const handleMiniGameComplete = () => {
    setStage("results");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {stage === "start" && (
        <StartScreen
          onStart={() => setStage("game")}
        />
      )}

      {stage === "game" && (
        <GameScreen
          questions={quizQuestions}
          onComplete={handleQuizComplete}
          updateScore={updateScore}
        />
      )}

      {stage === "miniGame" && (
        <MiniGameScreen
          onComplete={handleMiniGameComplete}
          updateScore={updateScore}
        />
      )}

      {stage === "results" && (
        <ResultsScreen
          score={totalScore}
          total={quizQuestions.length * 10 + 40} // quiz max + mini-game max
          onRestart={() => {
            setStage("start");
            setTotalScore(0);
          }}
        />
      )}
    </div>
  );
}

export default App;