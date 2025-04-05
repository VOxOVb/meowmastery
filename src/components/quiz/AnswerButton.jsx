import { useEffect, useRef, useState } from "react";
import styles from "./AnswerButton.module.css";
import useQuiz from "../../hooks/useQuiz";

export default function AnswerButton() {
  const { index, questions, dispatch } = useQuiz();
  const [selectedId, setSelectedId] = useState("");
  const timeoutRef = useRef(null);

  function handleClick(answer, selectedId) {
    setSelectedId(selectedId);

    const id = setTimeout(() => {
      dispatch({ type: "nextQuestion", payload: answer });
    }, 500);
    timeoutRef.current = id;
  }

  useEffect(() => {
    setSelectedId("");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [index]);

  useEffect(() => {
    if (index === questions.length) {
      const timer = setTimeout(() => {
        dispatch({ type: "quizEnd" });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [index, questions.length, dispatch]);

  return (
    <>
      {questions.length > 0 && index < questions.length ? (
        <div key={index} className={styles.container}>
          {Array.from({ length: 2 }, (_, i) => i).map((_, i) => (
            <button
              key={`${index}-${i}`}
              type="button"
              className={`${styles.AnswerButton} ${styles[`button-${i}`]} ${
                selectedId === i ? styles.isActive : ""
              }`}
              onClick={() =>
                handleClick(
                  questions.at(index).options[i].isCorrect,
                  questions.at(index).options[i].id
                )
              }
            >
              <div>
                <p>{questions.at(index).options[i].text}</p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.magic}></div>
      )}
    </>
  );
}
