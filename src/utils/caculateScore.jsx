export const caculateScore = (answer) => {
  const numsWrong = answer.filter((i) => i === false).length;
  if (numsWrong === 0) return 100;
  const score = (10 - numsWrong) * 10 + Math.floor(Math.random() * 10);
  return score;
};
