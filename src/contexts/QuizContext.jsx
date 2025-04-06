import { createContext, useReducer } from "react";
import { questionMerge, questionPick } from "../questions";

const QuizContext = createContext();
const initialState = {
  status: "landing",
  questions: [],
  index: 0,
  answers: [],
  selectedPhoto: 0,
  uploaded: null,
  nickname: "",
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
    case "select":
      return {
        ...state,
        selectedPhoto: state.selectedPhoto + action.payload,
      };
    case "upload":
      return {
        ...state,
        uploaded: action.payload,
      };
    case "nickname":
      return { ...state, nickname: action.payload };
    case "result":
      return { ...state, status: "result" };
  }
}

function QuizProvider({ children }) {
  const [
    { status, questions, index, answers, selectedPhoto, nickname, uploaded },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider
      value={{
        status,
        questions,
        index,
        answers,
        dispatch,
        selectedPhoto,
        nickname,
        uploaded,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, QuizContext };
