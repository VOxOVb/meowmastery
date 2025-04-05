import styles from "./ProgressVisual.module.css";
import useQuiz from "../../hooks/useQuiz";
export default function ProgressVisual() {
  const { index } = useQuiz();

  return (
    <>
      <div
        key={index}
        className={`${styles.ProgressVisual} ${
          styles[`step${Math.ceil((index + 1) / 3)}`]
        }`}
      ></div>
    </>
  );
}
