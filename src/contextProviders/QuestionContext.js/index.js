import React from "react";

export const LimitContext = React.createContext();
export const ScoreContext = React.createContext();

const QuestionProvider = ({ children }) => {
  const [limit, setLimit] = React.useState(5);
  const [score, setScore] = React.useState(0);

  return (
    <LimitContext.Provider value={{ limit: limit, setLimit: setLimit }}>
      <ScoreContext.Provider value={score}>{children}</ScoreContext.Provider>
    </LimitContext.Provider>
  );
};

export default QuestionProvider;
