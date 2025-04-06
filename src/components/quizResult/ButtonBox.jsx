import styles from "./ButtonBox.module.css";
import useQuiz from "../../hooks/useQuiz";

export default function ButtonBox() {
  const { dispatch } = useQuiz();
  function handlePreview() {
    dispatch({ type: "preview" });
  }
  function handleTryAgain() {
    dispatch({ type: "tryAgain" });
  }

  return (
    <div className={styles.ButtonBox}>
      {/* <button
        type="button"
        className={styles.btnPreview}
        onClick={handlePreview}
      >
        <img src="/quizResult/btn_question_p.png" alt="button text" />
      </button> */}
      <button
        type="button"
        className={styles.btnTryAgain}
        onClick={handleTryAgain}
      >
        <img src="/quizResult/btn_tryagain_p.png" alt="button text" />
      </button>
    </div>
  );
}
