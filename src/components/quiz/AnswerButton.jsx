import styles from "./AnswerButton.module.css";
export default function AnswerButton() {
  return (
    <>
      <button type="button" className={`${styles.AnswerButton} ${styles.top}`}>
        <div>
          <p>喵星人踏踏...</p>
        </div>
      </button>
      <button
        type="button"
        className={`${styles.AnswerButton} ${styles.bottom}`}
      >
        <div>
          <p>喵星人踏踏...</p>
        </div>
      </button>
    </>
  );
}
