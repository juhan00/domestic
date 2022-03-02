import {
  select,
  max,
  scaleLinear,
  scaleBand,
  axisRight,
  axisBottom,
  reduce,
} from "d3";
import React, { useEffect, useRef } from "react";
import { ChartWrapper } from "../CategoryChart/style";

const PressChart = ({
  data,
  barColor = "#5FB6AD",
  barWidth = 20,
  width = 500,
  height = 300,
  barSpace = 50,
}) => {
  const pressChartRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const pressWrapper = select(pressChartRef.current);
    const svg = select(svgRef.current);

    const entireValue = max(data, (data) => data.value);

    svg.attr("width", width).attr("height", height);

    const xScale = scaleBand()
      .domain(data.map((value, idx) => idx))
      .range([0, width])
      .padding(0.5);

    const xAxis = axisBottom(xScale).tickFormat((node, i) => {
      return data[node].title;
    });

    svg
      .select(".x-axis")
      .style("transform", `translateY(${height}px)`)
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove());

    const yScale = scaleLinear()
      .domain([0, entireValue])
      .range([height, 0])
      .clamp(true);

    const yAxis = axisRight(yScale);

    svg
      .select(".y-axis")
      .call(yAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g.selectAll("line").attr("x2", width).style("stroke", "#ddd"),
      );

    const press = svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("g")
      .classed("bar", true);

    press
      .append("rect")
      .attr("height", (node) => (node.value / entireValue) * height)
      .attr("width", barWidth)
      .attr("x", (_, index) => xScale(index))
      .attr("y", (node) => height - (node.value / entireValue) * height)
      .attr("width", xScale.bandwidth())
      .attr("fill", barColor);

    press
      .append("text")
      .text((data) => data["value"])
      .attr("x", (_, index) => xScale(index) + xScale.bandwidth() / 4)
      .attr("y", (node) => height - (node.value / entireValue) * height - 10);
  }, [data]);

  return (
    <ChartWrapper ref={pressChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </ChartWrapper>
  );
};

export default PressChart;
