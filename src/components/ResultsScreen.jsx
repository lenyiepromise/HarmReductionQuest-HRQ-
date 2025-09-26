import React from 'react';

function ResultsScreen({ score, totalQuestions, restartGame }) {
  const getFeedback = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) return "🎉 Perfect score! You’re a Harm Reduction Hero!";
    if (percentage >= 70) return "👍 Great job! You know your stuff!";
    if (percentage >= 40) return "🙂 Not bad! Keep learning!";
    return "😢 Don’t worry! Try again to improve!";
  };

  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Quest Completed!</h2>
      <p className="text-lg mb-2">
        You scored <span className="font-semibold">{score}</span> out of {totalQuestions}
      </p>
      <p className="text-gray-700 mb-6">{getFeedback()}</p>
      <button
        onClick={restartGame}
        className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all"
      >
        Restart Quest
      </button>
    </div>
  );
}

export default ResultsScreen;
