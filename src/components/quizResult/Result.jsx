import styles from "./Result.module.css";
import useQuiz from "../../hooks/useQuiz";
import Comment from "./Comment";

export default function Result() {
  const { modal, selectedPhoto, uploaded, nickname } = useQuiz();
  const hasUploadPhoto = selectedPhoto === 5 && uploaded;

  return (
    <div className={styles.background}>
      <p className={styles.nickname}>{nickname}</p>
      <div className={styles.loadingText}>
        <div>
          <div></div>
        </div>
      </div>
      <div className={styles.resultText}>
        <div className={`${styles.achievement} ${styles[`${modal}`]}`}>
          <div></div>
        </div>
        <div className={styles.modalContainer}>
          <div className={styles.border}>
            {hasUploadPhoto && (
              <img
                className={styles.photo}
                style={{
                  backgroundImage: `url(${uploaded})`,
                }}
              />
            )}
            {!hasUploadPhoto && (
              <div
                className={styles.photo}
                style={{ backgroundPositionX: `${selectedPhoto * 20}%` }}
              ></div>
            )}
          </div>
          <div className={`${styles.modal} ${styles[`${modal}`]}`}></div>
        </div>
        <div className={styles.comment}>
          <Comment />
        </div>
      </div>
    </div>
  );
}
