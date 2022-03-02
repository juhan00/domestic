import {
  axisBottom,
  extent,
  max,
  scaleLinear,
  scaleTime,
  select,
  line,
  axisRight,
} from "d3";
import React, { useEffect, useRef } from "react";
import { ChartWrapper } from "../CategoryChart/style";

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

const BuzzChart = ({
  width = 500,
  height = 300,
  marginTop = 40,
  marginBottom = 40,
  marginLeft = 40,
  marginRight = 40,
  padding = 30,
}) => {
  const buzzChartRef = useRef();
  const svgRef = useRef(null);
  useEffect(() => {
    const buzzChartWrapper = select(buzzChartRef.current);
    const svg = select(svgRef.current);

    const xScale = scaleTime()
      .domain(extent(data, (data) => data.date))
      .range([marginLeft + padding, width]);

    const xAxis = axisBottom(xScale).ticks(data.length);
    // .tickSizeOuter(0);

    svg
      .select(".x-axis")
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translateY(${height - marginBottom}px)`);

    const yScale = scaleLinear()
      .domain([
        -max(data, (data) => data.value),
        max(data, (data) => data.value),
      ])
      .nice()
      .range([height - marginBottom, marginTop]);

    const yAxis = axisRight(yScale);

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

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#ee9696")
      .attr("stroke-width", 3)
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
