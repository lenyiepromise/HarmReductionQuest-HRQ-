import React, { useState } from "react";
import { motion } from "framer-motion";

const TrueFalseMiniGame = ({ question, correctAnswer, onComplete }) => {
  const [feedback, setFeedback] = useState(null);

  const handleAnswer = (answer) => {
    if (answer === correctAnswer) {
      setFeedback("✅ Correct! +10 points");
      setTimeout(() => onComplete(10), 1000);
    } else {
      setFeedback("❌ Wrong! No points gained");
      setTimeout(() => onComplete(0), 1000);
    }
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Mini-Game 🎲
      </h3>
      <p className="text-gray-700 mb-6">{question}</p>

      <div className="flex justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer(true)}
          className="px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
        >
          ✅ True
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer(false)}
          className="px-6 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700"
        >
          ❌ False
        </motion.button>
      </div>

      {feedback && (
        <p className="mt-4 font-medium text-gray-800">{feedback}</p>
      )}
    </motion.div>
  );
};

export default TrueFalseMiniGame;