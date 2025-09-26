import React from "react";
import { motion } from "framer-motion";

const StartScreen = ({ onStart }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to Harm Reduction Quest 🎮
      </h2>

      <p className="text-gray-700 mb-6 text-center">
        In this game, you’ll face real-life scenarios and make choices that 
        affect your wellbeing. 
        <br />
        Can you stay safe and score high? Let’s find out!
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition duration-200"
      >
        ▶️ Start Game
      </motion.button>
    </motion.div>
  );
};

export default StartScreen;