import React, { useRef, useEffect } from "react";
import { select } from "d3";
import cloud from "d3-cloud";
import randomColor from "randomcolor";
import { KeywordChartWrapper } from "./style";
import { useResizeObserver } from "@utils/useResizeObserver";

let words;
const KeywordChart = ({
  data,
  font = "Impact",
  keyWordPadding = 0,
  rotate = 90,
  width = 500,
  height = 300,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  padding = 0.3,
}) => {
  const keywordChartRef = useRef();
  const svgRef = useRef(null);
  const dimensions = useResizeObserver(keywordChartRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const { width, height } = dimensions;
    svg.attr("width", width).attr("height", height);

    if (!data[0].color) {
      data.map((ele) => {
        ele.color = randomColor();
      });
    }

    const wordData = data.map((ele) => ({
      ...ele,
      text: ele.title,
      size: 10 + ele.value / 20,
      test: ele.title,
    }));

    words = cloud()
      .size([width, height])
      .words(wordData)
      .padding(keyWordPadding)
      .font(font)
      .fontSize((d) => d.size)
      .rotate((_, i) => i * rotate)
      .start()
      .words();

    const cloudWrapper = svg
      .select(".cloudWrapper")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    cloudWrapper
      .selectAll(".cloudtext")
      .data(words)
      .join("text")
      .classed("cloudtext", true)
      .style("font-size", (d) => {
        return `${d.size}px`;
      })
      .attr("fill", (d) => d.color)
      .attr("transform", (d) => {
        return `translate(${d.x}, ${d.y}) rotate(${d.rotate})`;
      })
      .text(function (d) {
        return d.text;
      });
  }, [data, dimensions]);
  return (
    <KeywordChartWrapper ref={keywordChartRef}>
      <svg ref={svgRef}>
        <g className="cloudWrapper" />
      </svg>
    </KeywordChartWrapper>
  );
};

export default KeywordChart;
