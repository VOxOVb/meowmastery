import styles from "./QuizQuestion.module.css";
import useQuiz from "../../hooks/useQuiz";

export default function QuizQuestion() {
  const { questions, index } = useQuiz();
  return (
    <>
      {questions.length > 0 && index < questions.length ? (
        <div className={styles.QuizQuestion} key={index}>
          <div className={styles.context}>
            <p>{questions.at(index).question}</p>
          </div>
        </div>
      ) : (
        <div className={styles.magic}></div>
      )}
    </>
  );
}
