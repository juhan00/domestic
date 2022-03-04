import React, { useRef, useEffect } from "react";
import { select } from "d3";
import cloud from "d3-cloud";
import randomColor from "randomcolor";
import { ChartWrapper } from "../CategoryChart/style";

const KeywordChart = ({
  data,
  font = "Impact",
  keyWordPadding = 1,
  rotate = 90,
  width = 500,
  height = 300,
  marginTop = 40,
  marginBottom = 40,
  marginLeft = 40,
  marginRight = 40,
  padding = 30,
}) => {
  const keywordChartRef = useRef(null);
  const svgRef = useRef(null);
  useEffect(() => {
    const wrapper = select(keywordChartRef.current);
    const svg = select(svgRef.current);

    const wordData = data.map((ele) => {
      return { text: ele.title, size: 10 + ele.value / 20, test: ele.title };
    });

    const words = cloud()
      .size([width, height])
      .words(wordData)
      .padding(keyWordPadding)
      .font(font)
      .fontSize((d) => d.size)
      .rotate((_, i) => i * rotate)
      .start()
      .words();

    console.log(words);
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
      .attr("fill", () => randomColor())
      .attr("text-anchor", "middle")
      .attr("transform", (d) => {
        return `translate(${d.x}, ${d.y}) rotate(${d.rotate})`;
      })
      .text(function (d) {
        return d.text;
      });
  }, [data]);
  return (
    <ChartWrapper ref={keywordChartRef}>
      <svg ref={svgRef}>
        <g className="cloudWrapper" />
      </svg>
    </ChartWrapper>
  );
};

export default KeywordChart;
