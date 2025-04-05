import Landing from "./pages/Landing";
import "./App.css";
import useQuiz from "./hooks/useQuiz";
import Quiz from "./pages/Quiz";

export default function App() {
  const { status } = useQuiz();
  return (
    <>
      {status === "landing" && <Landing />}
      {status === "quiz" && <Quiz />}
    </>
  );
}
