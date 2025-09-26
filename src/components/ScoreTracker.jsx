import React from "react";

const ScoreTracker = ({ score }) => {
  // Clamp score between 0 and 100
  const safeScore = Math.max(0, Math.min(100, score));

  return (
    <div className="w-full max-w-lg mt-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">Wellbeing</span>
        <span className="text-sm font-medium text-gray-700">{safeScore}/100</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`h-4 rounded-full transition-all duration-300 ${
            safeScore > 70
              ? "bg-green-500"
              : safeScore > 40
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
          style={{ width: `${safeScore}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreTracker;