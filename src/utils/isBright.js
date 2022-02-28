export default function isBright(rgbCode) {
  let c = rgbCode.substring(1); //  # 제거
  let rgb = parseInt(c, 16); // 10진수로 변경
  let r = (rgb >> 16) & 0xff; // r추출
  let g = (rgb >> 8) & 0xff; // g추출
  let b = (rgb >> 0) & 0xff; // b추출

  let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return luma > 127 ? true : false;
  // true일경우 밝음, 아닐 경우 어두움
}
