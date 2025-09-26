import React from "react";
import { GameProvider, useGame } from "./context/GameContext";
import StartScreen from "./components/StartScreen";

function GameRouter() {
  const { state } = useGame();

  if (state.stage === "start") return <StartScreen />;
  if (state.stage === "quiz") return <div>Quiz coming soon...</div>;
  if (state.stage === "results") return <div>Results coming soon...</div>;

  return <div>Unknown stage</div>;
}

export default function App() {
  return (
    <GameProvider>
      <GameRouter />
    </GameProvider>
  );
}