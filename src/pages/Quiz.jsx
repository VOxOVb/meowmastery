import AnswerButton from "../components/quiz/AnswerButton";
import ProgressBar from "../components/quiz/ProgressBar";
import ProgressVisual from "../components/quiz/ProgressVisual";
import QuizQuestion from "../components/quiz/QuizQuestion";

export default function Quiz() {
  return (
    <>
      <ProgressBar />
      <ProgressVisual />
      <QuizQuestion />
      <AnswerButton />
    </>
  );
}
