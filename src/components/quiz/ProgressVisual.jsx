import styles from "./ProgressVisual.module.css";
import useQuiz from "../../hooks/useQuiz";
export default function ProgressVisual() {
  const { index } = useQuiz();
  const step = Math.floor(index / 4) + 1;

  return (
    <>
      <div
        key={`step-${step}`}
        className={`${styles.ProgressVisual} ${styles[`step${step}`]}`}
      ></div>
    </>
  );
}
