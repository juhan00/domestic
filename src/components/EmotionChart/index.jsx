import {
  axisBottom,
  extent,
  max,
  scaleLinear,
  scaleTime,
  timeFormat,
  select,
  line,
  axisRight,
  area,
  format,
} from "d3";
import React, { useEffect, useRef } from "react";
import { ChartWrapper } from "../CategoryChart/style";
import useResizeObserver from "@utils/useResizeObserver";

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
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  padding = 0,
}) => {
  const emotionChartRef = useRef();
  const svgRef = useRef(null);
  const dimensions = useResizeObserver(emotionChartRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const { width, height } = dimensions;
    svg.attr("width", width).attr("height", height);

    const xScale = scaleTime()
      .domain(extent(data, (data) => data.date))
      .range([marginLeft + padding, width]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(timeFormat("%m-%d"));
    // .tickSizeOuter(0);

    svg
      .select(".x-axis")
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translateY(${height - marginBottom}px)`);

    const maxValue = max(data, (data) => data.value);

    const yScale = scaleLinear()
      .domain([0, maxValue])
      .nice()
      .range([height - marginBottom, marginTop]);

    const yAxis = axisRight(yScale)
      .tickValues([0, maxValue / 2, maxValue])
      .tickFormat(format("d"));

    svg
      .select(".y-axis")
      .call(yAxis)
      .style("transform", `translateX(${marginLeft}px)`)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll("line")
          .attr("x1", marginLeft)
          .attr("x2", width - marginRight)
          .style("stroke", "#ddd"),
      );

    const chartLine = line()
      .defined((d) => !isNaN(d.value))
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value));

    const chartArea = area()
      .x((d) => xScale(d.date))
      .y0(() => yScale(0))
      .y1((d) => yScale(d.value));

    const gradient = svg
      .append("linearGradient")
      .attr("id", "chartGradient")
      .attr("x1", "100%")
      .attr("x2", "100%")
      .attr("y1", "100%")
      .attr("y2", "0%");

    gradient
      .append("stop")
      .attr("class", "start")
      .attr("offset", "0%")
      .attr("stop-color", "#5fb6ad")
      .attr("stop-opacity", 0.3);

    gradient
      .append("stop")
      .attr("class", "end")
      .attr("offset", "100%")
      .attr("stop-color", "#5fb6ad")
      .attr("stop-opacity", 0.7);

    svg
      .selectAll(".emotionarea")
      .data([data])
      .join("path")
      .classed("emotionarea", true)
      .attr("fill", "url(#chartGradient)")
      .attr("d", (data) => chartLine(data))
      .attr("d", (data) => chartArea(data));

    svg
      .selectAll(".emotionpath")
      .data([data])
      .join("path")
      .classed("emotionpath", true)
      .attr("fill", "none")
      .attr("stroke", "#5fb6ad")
      .attr("stroke-width", 3)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", (data) => chartLine(data));
  }, [data, dimensions]);
  return (
    <ChartWrapper ref={emotionChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </ChartWrapper>
  );
};

export default EmotionChart;
