import React, { useRef, useEffect } from "react";
import { select } from "d3";
import cloud from "d3-cloud";
import randomColor from "randomcolor";
import { ChartWrapper } from "../../routes/DomesticStock/style";

const KeywordChart = ({
  data,
  font = "Impact",
  padding = 1,
  rotate = 90,
  width = 500,
  height = 300,
}) => {
  const keywordChartRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const wrapper = select(keywordChartRef.current);
    const svg = select(svgRef.current);

    const wordData = data.map((ele) => {
      return { text: ele.title, size: 10 + ele.value / 20, test: ele.title };
    });

    cloud()
      .size([width, height])
      .words(wordData)
      .padding(padding)
      .font(font)
      .fontSize((d) => d.size)
      .rotate((_, i) => i * rotate)
      .on("end", end)
      // wordData에 x,y를 만들어줌 그리고 전달
      .start();

    function end(words) {
      svg
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
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
    }
  }, [data]);
  return (
    <ChartWrapper ref={keywordChartRef}>
      <svg ref={svgRef} />
    </ChartWrapper>
  );
};

export default KeywordChart;
