import React from 'react';

function StartScreen({ startGame }) {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">Harm Reduction Quest</h1>
      <p className="text-lg text-gray-600 mb-8">Embark on a journey to learn, grow, and stay safe. Your choices matter.</p>
      <button
        className="px-8 py-4 bg-indigo-500 text-white rounded-full font-bold text-xl shadow-lg hover:bg-indigo-600 transition-all"
        onClick={startGame}
      >
        Start Quest
      </button>
    </div>
  );
}

export default StartScreen;