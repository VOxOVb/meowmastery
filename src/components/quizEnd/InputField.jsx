import useQuiz from "../../hooks/useQuiz";
import styles from "./InputField.module.css";
export default function InputField() {
  const { nickname, dispatch } = useQuiz();

  function handleInput(e) {
    const inputValue = e.target.value;
    dispatch({ type: "nickname", payload: inputValue });
  }
  return (
    <div className={styles.InputField}>
      <input
        className={styles.text}
        placeholder="至多5個字的暱稱_"
        onChange={handleInput}
        maxLength={5}
        value={nickname}
      />
    </div>
  );
}
