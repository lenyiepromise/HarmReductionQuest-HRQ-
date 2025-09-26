import React, { useState, useEffect } from "react";

const GameScreen = ({ questions, onComplete, updateScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  // Handle option selection
  const handleOptionClick = (index) => {
    setSelectedOption(index);
    const isCorrect = index === currentQuestion.answer;
    const points = isCorrect ? currentQuestion.points : 0;
    setScore((prev) => prev + points);
    updateScore(points);

    // Automatically move to next question after delay
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        onComplete(score + points);
      }
    }, 1200);
  };

  // Calculate progress percentage
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="bg-indigo-500 h-3 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question */}
      <div className="bg-indigo-100 p-6 rounded-2xl mb-6 shadow-md">
        <p className="text-xl font-semibold text-indigo-800">
          {currentQuestion.text}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`w-full px-6 py-4 rounded-full text-left font-semibold shadow-md transition-all
              ${
                selectedOption === index
                  ? index === currentQuestion.answer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-white text-gray-800 hover:bg-indigo-100"
              }`}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Score */}
      <div className="mt-6 text-gray-600 font-semibold">
        Score: {score}
      </div>
    </div>
  );
};

export default GameScreen;