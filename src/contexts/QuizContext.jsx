import { createContext, useReducer } from "react";
import { questionMerge, questionPick } from "../questions";

const QuizContext = createContext();
const initialState = {
  status: "quiz",
  questions: [],
  index: 0,
  answers: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "quiz":
      return {
        ...state,
        status: "quiz",
        answers: questionPick(questionMerge, 10),
      };
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
