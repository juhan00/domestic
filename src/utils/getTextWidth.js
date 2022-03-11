export default function getTextWidth(text, fontSize, fontFace) {
  var canvas = document.createElement("canvas");
  var canvasContext = canvas.getContext("2d");
  canvasContext.font = fontSize + "px " + fontFace;
  return canvasContext.measureText(text).width;
}
