import React, { createContext, useReducer, useContext } from "react";

const GameContext = createContext();

const initialState = {
  stage: "start", // can be: start | quiz | miniGame | results
  score: 0,
  answers: [],
};

function gameReducer(state, action) {
  switch (action.type) {
    case "START_GAME":
      return { ...state, stage: "quiz", score: 0, answers: [] };
    case "SUBMIT_ANSWER":
      return {
        ...state,
        answers: [...state.answers, action.payload],
        score: state.score + (action.payload.isCorrect ? 1 : 0),
      };
    case "FINISH_GAME":
      return { ...state, stage: "results" };
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
}

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
