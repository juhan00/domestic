export default function calculateMovingAverageLine(data, numOfDays) {
  return data.map((target, index, dataArray) => {
    const start = Math.max(0, index - numOfDays);
    const end = index;
    const targetData = dataArray.slice(start, end + 1);
    const sum = targetData.reduce((a, b) => {
      return a + b.end;
    }, 0);
    data[index][`average${numOfDays}`] = sum / targetData.length;
  });
}
