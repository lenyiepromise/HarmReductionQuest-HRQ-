import React, { useState } from "react";
import quizQuestions from "../data/quiz";

const QuizScreen = ({ onQuizComplete, updateScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentQuestion = quizQuestions[currentIndex];

  const handleAnswer = (optionIndex) => {
    if (optionIndex === currentQuestion.answer) {
      setFeedback("✅ Correct!");
      updateScore(10); // give 10 points
    } else {
      setFeedback("❌ Wrong. Try again next time.");
    }

    setTimeout(() => {
      setFeedback("");
      if (currentIndex < quizQuestions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        onQuizComplete(); // switch to Game
      }
    }, 1000);
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Time</h2>
      <p className="mb-4">{currentQuestion.question}</p>
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 w-full"
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
    </div>
  );
};

export default QuizScreen;