import React from "react";
import { motion } from "framer-motion";

const ScenarioCard = ({ scenario, onChoiceSelect }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-800 text-lg mb-4">{scenario.text}</p>
      <div className="flex flex-col gap-3">
        {scenario.choices.map((choice, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChoiceSelect(choice)}
            className="px-4 py-2 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 transition duration-200"
          >
            {choice.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ScenarioCard;