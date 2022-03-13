export function corrCoeff(xData, yData) {
  const n = xData.length;
  const xSum = xData.reduce((a, b) => a + b, 0);
  const xSquareSum = xData.reduce((a, b) => a + b ** 2, 0);
  const ySum = yData.reduce((a, b) => a + b, 0);
  const ySquareSum = yData.reduce((a, b) => a + b ** 2, 0);
  const xySum = xData.reduce((a, b, i) => a + b * yData[i], 0);

  const coeff =
    (n * xySum - xSum * ySum) /
    ((n * xSquareSum - xSum ** 2) * (n * ySquareSum - ySum ** 2)) ** 0.5;

  return coeff;
}

export function standDev(data) {
  const n = data.length;
  const mean = data.reduce((a, b) => a + b, 0) / n;

  const standDev =
    (data.reduce((a, b) => a + (b - mean) ** 2, 0) / n - 1) ** 0.5;

  return standDev;
}

export default function betaCoeff(xData, yData) {
  const xArray = xData.map((item) => item.price);
  const yArray = yData.map((item) => item.price);

  const betaCoeff =
    (corrCoeff(xArray, yArray) * standDev(yArray)) / standDev(xArray);

  return betaCoeff;
}
