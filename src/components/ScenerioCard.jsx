// src/components/ScenarioCard.jsx
import React from "react";

const ScenarioCard = ({ scenario, onChoiceSelect }) => {
  if (!scenario) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
      {/* Scenario Prompt */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {scenario.prompt}
      </h2>

      {/* Choices */}
      <div className="flex flex-col gap-3">
        {scenario.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onChoiceSelect(choice)}
            className="px-4 py-2 text-left rounded-md border border-gray-300 hover:bg-gray-100 transition duration-200"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScenarioCard;
