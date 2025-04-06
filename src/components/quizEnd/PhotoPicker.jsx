import styles from "./PhotoPicker.module.css";
import useQuiz from "../../hooks/useQuiz";
export default function PhotoPicker() {
  const { selectedPhoto, uploaded, dispatch } = useQuiz();
  const showUpload = selectedPhoto === 5 && uploaded;

  function handlePrev() {
    if (selectedPhoto === 0) return;
    dispatch({ type: "select", payload: -1 });
  }
  function handleNext() {
    if (selectedPhoto === 5) return;
    dispatch({ type: "select", payload: +1 });
  }
  function handleUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        dispatch({ type: "upload", payload: dataUrl });
      };
      reader.readAsDataURL(file);
    }

    e.target.value = "";
  }

  return (
    <div className={styles.PhotoPicker}>
      <button
        type="button"
        className={styles.btnPrev}
        style={{ opacity: selectedPhoto === 0 ? 0 : 1 }}
        onClick={handlePrev}
      ></button>
      <div className={styles.photoBorder}>
        {showUpload ? (
          <div className={styles.photo}>
            <img
              style={{
                backgroundImage: `url(${uploaded})`,
              }}
            />
          </div>
        ) : (
          <div
            className={styles.photoList}
            style={{ backgroundPositionX: `${selectedPhoto * 20}%` }}
          ></div>
        )}
        <input
          type="file"
          accept="image/png, image/jpeg"
          className={styles.upload}
          onChange={handleUpload}
          style={{ display: selectedPhoto === 5 ? "block" : "none" }}
        />
      </div>
      <button
        type="button"
        className={styles.btnNext}
        style={{ opacity: selectedPhoto === 5 ? 0 : 1 }}
        onClick={handleNext}
      ></button>
    </div>
  );
}
