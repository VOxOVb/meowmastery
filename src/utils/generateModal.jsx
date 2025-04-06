export const generateModal = (score) => {
  if (score < 70) return "copper";
  if (score >= 70 && score < 80) return "silver";
  if (score >= 80) return "gold";
};
