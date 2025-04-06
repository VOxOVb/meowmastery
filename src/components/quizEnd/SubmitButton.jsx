import styles from "./SubmitButton.module.css";
import useQuiz from "../../hooks/useQuiz";
export default function SubmitButton() {
  const { dispatch } = useQuiz();

  function handleSubmit() {
    dispatch({ type: "quizResult" });
  }

  return (
    <button
      type="button"
      className={styles.SubmitButton}
      onClick={handleSubmit}
    >
      <img src="/quizEnd/btn_result_p.png" alt="button text" />
    </button>
  );
}
