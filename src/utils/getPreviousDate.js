export const getPreviousDate = (date, numOfDays) => {
  const previousDate = date.getTime() - numOfDays * 24 * 60 * 60 * 1000;
  return new Date(previousDate);
};
