import styles from "./ProgressBar.module.css";
import useQuiz from "../../hooks/useQuiz";
export default function ProgressBar() {
  const { index } = useQuiz();
  return (
    <>
      <div className={styles.ProgressBar}>
        <div className={styles.bar}></div>
        {index >= 0 && (
          <div className={styles.progress} style={{ width: `${index * 10}%` }}>
            <div
              key={index}
              className={`${styles.pin} ${
                index > 0 ? styles.rotate : styles.bigger
              }`}
            ></div>
          </div>
        )}
      </div>
    </>
  );
}
