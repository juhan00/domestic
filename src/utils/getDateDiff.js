export const getDateDiff = (d1, d2) => {
  const diffDate = d1.getTime() - d2.getTime();

  return Math.floor(Math.abs(diffDate / (1000 * 3600 * 24)));
};
