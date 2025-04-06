import styles from "./IntroText.module.css";
export default function IntroText() {
  return (
    <div className={styles.IntroText}>
      <div className={styles.context}>
        <p>輸入暱稱並決定證書照片吧!</p>
      </div>
    </div>
  );
}
