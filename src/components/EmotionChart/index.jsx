import {
  axisBottom,
  extent,
  max,
  scaleLinear,
  timeFormat,
  scaleTime,
  select,
  min,
  line,
  axisRight,
  format,
} from "d3";
import React, { useEffect, useRef } from "react";
import useResizeObserver from "@utils/useResizeObserver";
import { EmotionWrapper } from "./style";
import useDebounce from "@utils/useDebounce";

const data = [
  { date: new Date("2018-01-01"), value: 1 },
  { date: new Date("2018-01-02"), value: 2 },
  { date: new Date("2018-01-03"), value: 3 },
  { date: new Date("2018-01-04"), value: 2 },
  { date: new Date("2018-01-05"), value: 3 },
  { date: new Date("2018-01-06"), value: 4 },
  { date: new Date("2018-01-07"), value: 3 },
  { date: new Date("2018-01-08"), value: 5 },
];

const EmotionChart = ({
  width = 500,
  height = 300,
  marginTop = 40,
  marginBottom = 40,
  marginLeft = 40,
  marginRight = 40,
  padding = 0,
}) => {
  const emotionRef = useRef();
  const svgRef = useRef();
  const dimensions = useResizeObserver(emotionRef);
  const resize = useDebounce(dimensions, 200);
  useEffect(() => {
    const svg = select(svgRef.current);
    svg.selectAll(".emotionpath").remove();

    if (!resize) return;

    const { width, height } = resize;
    svg.attr("width", width).attr("height", height);

    const xScale = scaleTime()
      .domain(extent(data, (data) => data.date))
      .range([marginLeft, width - marginLeft]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(timeFormat("%m-%d"));
    // .tickSizeOuter(0);

    svg
      .select(".title")
      .attr("x", marginLeft)
      .attr("y", marginBottom - 10);

    svg
      .select(".x-axis")
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translateY(${height - marginBottom}px)`);

    const yMin = min(data, (data) => data.value);
    const yMax = max(data, (data) => data.value);

    const maxValue =
      Math.abs(yMin) > Math.abs(yMax) ? Math.abs(yMin) : Math.abs(yMax);

    const yScale = scaleLinear()
      .domain([-maxValue, maxValue])
      .nice()
      .range([height - marginBottom, marginTop]);

    const yAxis = axisRight(yScale)
      .tickValues([-maxValue, 0, maxValue])
      .tickFormat(format("d"));

    svg
      .select(".y-axis")
      .call(yAxis)
      .style("transform", `translateX(${marginLeft}px)`)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll("line")
          .attr("x1", 0)
          .attr("x2", width - marginRight - marginLeft)
          .style("stroke", "#ddd"),
      )
      .call((g) => {
        g.selectAll(".tick text").style(
          "transform",
          `translateX(${width - marginLeft - marginRight}px)`,
        );
      });

    const chartLine = line()
      .defined((d) => !isNaN(d.value))
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value));

    svg
      .selectAll(".emotionpath")
      .data([data])
      .join("path")
      .classed("emotionpath", true)

      .attr("d", (data) => chartLine(data));
  }, [data, resize]);
  return (
    <EmotionWrapper ref={emotionRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
        <text className="title">감성지수 분석</text>
      </svg>
    </EmotionWrapper>
  );
};

export default EmotionChart;
