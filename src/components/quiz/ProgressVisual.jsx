import styles from "./ProgressVisual.module.css";
import useQuiz from "../../hooks/useQuiz";
export default function ProgressVisual() {
  const { index } = useQuiz();
  const step = Math.min(Math.floor(index / 3) + 1, 3);

  return (
    <>
      <div
        key={`step-${Math.ceil((index + 1) / 3)}`}
        className={`${styles.ProgressVisual} ${styles[`step${step}`]}`}
      ></div>
    </>
  );
}
