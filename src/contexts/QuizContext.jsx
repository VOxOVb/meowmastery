import { createContext, useReducer } from "react";

const QuizContext = createContext();
const initialState = {
  status: "landing",
  questions: [],
  index: 0,
  answers: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "quiz":
      return { ...state, status: "quiz" };
  }
}

function QuizProvider({ children }) {
  const [{ status, questions, index, answers }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <QuizContext.Provider
      value={{ status, questions, index, answers, dispatch }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, QuizContext };
