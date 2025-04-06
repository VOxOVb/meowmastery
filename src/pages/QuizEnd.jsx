import styles from "./QuizEnd.module.css";
import PageTitle from "../components/quizEnd/PageTitle";
import PhotoPicker from "../components/quizEnd/PhotoPicker";
import IntroText from "../components/quizEnd/IntroText";
import InputField from "../components/quizEnd/InputField";
import SubmitButton from "../components/quizEnd/SubmitButton";

export default function QuizEnd() {
  return (
    <div className={styles.QuizEnd}>
      <PageTitle />
      <PhotoPicker />
      <IntroText />
      <InputField />
      <SubmitButton />
    </div>
  );
}
