import { select, sum, scaleLinear, scaleBand, axisRight, axisBottom } from "d3";
import React, { useEffect, useRef } from "react";

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

    const entireValue = sum(data, (data) => data.value);

    const press = svg
      .attr("width", width)
      .attr("height", height)
      .selectAll("rect");

    const xScale = scaleBand()
      .domain(data.map((value, idx) => idx))
      .range([0, width])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, entireValue])
      .range([height, 0])
      .clamp(true);

    const xAxis = axisBottom(xScale).tickFormat((node, i) => {
      return data[node].title;
    });

    svg
      .select(".x-axis")
      .style("transform", `translateY(${height}px)`)
      .call(xAxis);

    const yAxis = axisRight(yScale);

    svg
      .select(".y-axis")
      .style("transform", `translateX(${width}px)`)
      .call(yAxis);

    press
      .data(data)
      .enter()
      .append("rect")
      .attr("height", (node) => (node.value / entireValue) * height)
      .attr("width", barWidth)
      .attr("x", (_, index) => xScale(index))
      .attr("y", (node) => height - (node.value / entireValue) * height)
      .attr("width", xScale.bandwidth())
      .attr("fill", barColor);
  }, [data]);
  return (
    <div ref={pressChartRef}>
      <svg ref={svgRef} style={{ overflow: "visible" }}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default PressChart;
