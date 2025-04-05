import styles from "./CTAButton.module.css";
import useQuiz from "../../hooks/useQuiz";
import { useEffect, useState } from "react";
export default function CTAButton() {
  const { dispatch } = useQuiz();
  const [isClicked, setIsClicked] = useState(false);
  function handleCTA() {
    setIsClicked(true);
  }

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        dispatch({ type: "quiz" });
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [isClicked, dispatch]);

  return (
    <button
      type="button"
      className={`${styles.CTAButton} ${isClicked ? styles.isActive : ""}`}
      onClick={handleCTA}
    >
      <img src="/landing/btn_index_p.png" alt="button text" />
    </button>
  );
}
