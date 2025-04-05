import { createContext, useReducer } from "react";
import { questionMerge, questionPick } from "../questions";

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
      return {
        ...state,
        status: "quiz",
        questions: questionPick(questionMerge, 10),
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answers: [...state.answers, action.payload],
      };
    case "quizEnd":
      return {
        ...state,
        status: "quizEnd",
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
