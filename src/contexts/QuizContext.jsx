import { createContext, useReducer } from "react";
import { questionMerge, questionPick } from "../questions";
import { randomNickname } from "../utils/randomNickname";
import { caculateScore } from "../utils/caculateScore";
import { generateModal } from "../utils/generateModal";

const QuizContext = createContext();
const initialState = {
  status: "landing",
  questions: [],
  index: 0,
  answers: [],
  score: 0,
  modal: "",
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
        score: caculateScore(state.answers),
        modal: generateModal(caculateScore(state.answers)),
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
    case "quizResult":
      return {
        ...state,
        status: "quizResult",
        nickname: state.nickname === "" ? randomNickname : state.nickname,
      };
    case "preview":
      return {
        ...state,
        status: "preview",
      };
    case "tryAgain":
      return initialState;
  }
}

function QuizProvider({ children }) {
  const [
    {
      status,
      questions,
      index,
      answers,
      score,
      modal,
      selectedPhoto,
      nickname,
      uploaded,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider
      value={{
        status,
        questions,
        index,
        answers,
        score,
        modal,
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
