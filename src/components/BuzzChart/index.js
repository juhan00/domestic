import {
  axisBottom,
  extent,
  max,
  scaleLinear,
  scaleTime,
  select,
  line,
  axisLeft,
} from "d3";
import React, { useEffect, useRef } from "react";
import { ChartWrapper } from "../../routes/DomesticStock/style";

const width = 500;
const height = 300;
const marginTop = 40;
const marginBottom = 40;
const marginLeft = 40;
const marginRight = 40;
const padding = 30;
const data = [
  { date: new Date("2018-01-01"), value: 10 },
  { date: new Date("2018-01-02"), value: 20 },
  { date: new Date("2018-01-03"), value: 30 },
  { date: new Date("2018-01-04"), value: 25 },
  { date: new Date("2018-01-05"), value: 35 },
  { date: new Date("2018-01-06"), value: 45 },
  { date: new Date("2018-01-07"), value: 60 },
  { date: new Date("2018-01-08"), value: 50 },
];

const BuzzChart = () => {
  const buzzChartRef = useRef();
  const svgRef = useRef(null);
  useEffect(() => {
    const buzzChartWrapper = select(buzzChartRef.current);
    const svg = select(svgRef.current);
    const xScale = scaleTime()
      .domain(extent(data, (data) => data.date))
      .range([marginLeft + padding, width - padding]);

    const xAxis = axisBottom(xScale).ticks(width / 90);
    // .tickSizeOuter(0);

    svg
      .select(".x-axis")
      .call(xAxis)
      .style("transform", `translateY(${height}px)`);

    const yScale = scaleLinear()
      .domain([
        -max(data, (data) => data.value),
        max(data, (data) => data.value),
      ])
      .nice()
      .range([height - marginBottom, marginTop]);

    const yAxis = axisLeft(yScale);

    svg
      .select(".y-axis")
      .call(yAxis)
      .style("transform", `translateX(${marginLeft}px)`)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g.selectAll("line").attr("x2", width).style("stroke", "#ddd"),
      );

    const chartLine = line()
      .defined((d) => !isNaN(d.value))
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#add7a8")
      .attr("stroke-width", 6)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", chartLine);
  }, []);
  return (
    <ChartWrapper ref={buzzChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </ChartWrapper>
  );
};

export default BuzzChart;
