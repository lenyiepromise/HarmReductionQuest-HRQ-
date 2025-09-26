import React from "react";
import { useGame } from "../context/GameContext";

export default function StartScreen() {
  const { dispatch } = useGame();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Harm Reduction Quest
        </h1>
        <p className="text-gray-600 mb-6">
          Learn, play, and make safe choices!
        </p>
        <button
          onClick={() => dispatch({ type: "START_GAME" })}
          className="w-full px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600"
        >
          Start Quest
        </button>
      </div>
    </div>
  );
}