import React from "react";
import { motion } from "framer-motion";

const EndScreen = ({ score, onRestart }) => {
  let message = "";
  let color = "";

  if (score >= 70) {
    message = "🌟 Excellent! You made safe and smart choices.";
    color = "text-green-600";
  } else if (score >= 40) {
    message = "⚖️ Not bad! But there’s room to improve.";
    color = "text-yellow-600";
  } else {
    message = "⚠️ Be careful! Some choices put you at risk.";
    color = "text-red-600";
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Game Over</h2>

      <p className={`text-xl font-semibold mb-2 ${color}`}>
        Final Score: {score}/100
      </p>

      <p className="text-gray-700 mb-6">{message}</p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition duration-200"
      >
        🔄 Play Again
      </motion.button>
    </motion.div>
  );
};

export default EndScreen;