import React, { useRef, useEffect, useState } from "react";
import { ChartWrapper } from "./style";
import {
  axisBottom,
  axisLeft,
  extent,
  max,
  min,
  scaleLinear,
  scaleTime,
  select,
  line,
} from "d3";
import { reduce } from "d3";

const BetaChart = ({
  data,
  names,
  width = 1000,
  height = 501,
  marginTop = 187,
  marginBottom = 95,
  marginLeft = 77.5,
  marginRight = 32.5,
  padding = 32,
}) => {
  const betaChartRef = useRef();
  const svgRef = useRef(null);

  useEffect(() => {
    const betaChartWrapper = select(betaChartRef.current);
    const svg = select(svgRef.current);

    const maxValueX = max(data, (data) => data.xPrice);
    const minValueX = min(data, (data) => data.xPrice);

    const xScale = scaleLinear()
      .domain([
        minValueX - Math.abs(minValueX) * 0.05,
        maxValueX + Math.abs(maxValueX) * 0.05,
      ])
      .range([marginLeft, width - marginRight])
      .nice();

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(axisBottom(xScale))
      .call((g) => g.selectAll(".tick line").remove());

    const maxValueY = max(data, (data) => data.yPrice);
    const minValueY = min(data, (data) => data.yPrice);

    const yScale = scaleLinear()
      .domain([
        minValueY - Math.abs(minValueY) * 0.05,
        maxValueY + Math.abs(maxValueY) * 0.05,
      ])
      .range([height, marginBottom])
      .nice();

    svg
      .append("g")
      .attr("transform", `translate(${marginLeft}, 0)`)
      .call(axisLeft(yScale))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove());

    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.xPrice))
      .attr("cy", (d) => yScale(d.yPrice))
      .attr("r", 5)
      .style("fill", "#f6a64b");
  }, [data]);

  return (
    <ChartWrapper ref={betaChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </ChartWrapper>
  );
};

export default BetaChart;
