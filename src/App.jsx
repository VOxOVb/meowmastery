import Landing from "./pages/Landing";
import "./App.css";
import useQuiz from "./hooks/useQuiz";
import Quiz from "./pages/Quiz";
import QuizEnd from "./pages/QuizEnd";

export default function App() {
  const { status } = useQuiz();
  return (
    <>
      {status === "landing" && <Landing />}
      {status === "quiz" && <Quiz />}
      {status === "quizEnd" && <QuizEnd />}
    </>
  );
}
