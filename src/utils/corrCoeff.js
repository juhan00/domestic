export function corrCoeff(xData, yData) {
  const n = xData.length;
  const xArray = xData.map((item) => item.close).slice(0, 200);
  const yArray = yData.map((item) => item.close).slice(0, 200);
  const xSum = xArray.reduce((a, b) => a + b, 0);
  const xSquareSum = xArray.reduce((a, b) => a + b ** 2, 0);
  const ySum = yArray.reduce((a, b) => a + b, 0);
  const ySquareSum = yArray.reduce((a, b) => a + b ** 2, 0);
  const xySum = xArray.reduce((a, b, i) => a + b * yArray[i], 0);

  const coeff =
    (n * xySum - xSum * ySum) /
    ((n * xSquareSum - xSum ** 2) * (n * ySquareSum - ySum ** 2)) ** 0.5;
  return coeff;
}

export function standDev(data) {
  const n = data.length;
  const dataArray = data.map((item) => item.close);
  const mean = dataArray.reduce((a, b) => a + b, 0) / n;

  const standDev =
    (dataArray.reduce((a, b) => a + (b - mean) ** 2, 0) / n - 1) ** 0.5;

  return standDev;
}

export default function betaCoeff(xData, yData) {
  const betaCoeff =
    (corrCoeff(xData, yData) * standDev(yData)) / standDev(xData);

  return betaCoeff;
}
