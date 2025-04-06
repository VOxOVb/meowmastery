import "./App.css";
import useQuiz from "./hooks/useQuiz";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import QuizEnd from "./pages/QuizEnd";
import QuizResult from "./pages/QuizResult";

export default function App() {
  const { status } = useQuiz();
  return (
    <>
      {status === "landing" && <Landing />}
      {status === "quiz" && <Quiz />}
      {status === "quizEnd" && <QuizEnd />}
      {status === "quizResult" && <QuizResult />}
    </>
  );
}
