import useQuiz from "../../hooks/useQuiz";

export default function Comment() {
  const { score, modal } = useQuiz();
  return (
    <>
      <small>你拿到了{score}分!</small>
      {modal === "copper" && (
        <>
          <small>差強人意...多多補充相關知識</small>
          <small>和喵星人的相處能更融洽喔~</small>
          <small>加油好嗎(=^-ω-^=)</small>
        </>
      )}
      {modal === "silver" && (
        <>
          <small>還不錯的成績</small>
          <small>獲取更多貓知識與喵星人</small>
          <small>提高好感度吧!(=^ΦωΦ^=)</small>
        </>
      )}
      {modal === "gold" &&
        (score === 100 ? (
          <>
            <small>太厲害了!滿分!!</small>
            <small>喵星人能和你在一起</small>
            <small>太幸福啦!└(=^･ω･^=)┐</small>
          </>
        ) : (
          <>
            <small>獲得高分!</small>
            <small>想必是個和喵星人相處融洽的優秀貓奴</small>
            <small>要好好愛他們喔!ヽ(=^･ω･^=)丿</small>
          </>
        ))}
    </>
  );
}
