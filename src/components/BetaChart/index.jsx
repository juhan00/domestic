import React, { useRef, useEffect, useState, useCallback } from "react";
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
  width = 1200,
  height = 501,
  margin = { top: 187, bottom: 95, left: 77.5, right: 32.5 },
  padding = 32,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const betaChartRef = useRef();
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition],
  );

  useEffect(() => {
    const betaChartWrapper = select(betaChartRef.current);
    const svg = select(svgRef.current);
    const tooltip = select(tooltipRef.current);

    // xAxis
    const maxValueX = max(data, (data) => data.xPrice);
    const minValueX = min(data, (data) => data.xPrice);

    const xScale = scaleLinear()
      .domain([
        minValueX - Math.abs(minValueX) * 0.05,
        maxValueX + Math.abs(maxValueX) * 0.05,
      ])
      .range([margin.left, width - margin.right])
      .nice();

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(axisBottom(xScale))
      .call((g) => g.selectAll(".tick line").remove());

    // yAxis
    const maxValueY = max(data, (data) => data.yPrice);
    const minValueY = min(data, (data) => data.yPrice);

    const yScale = scaleLinear()
      .domain([
        minValueY - Math.abs(minValueY) * 0.05,
        maxValueY + Math.abs(maxValueY) * 0.05,
      ])
      .range([height, margin.bottom])
      .nice();

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(axisLeft(yScale))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove());

    // tooltip
    tooltip
      .append("div")
      .style("visibility", "hidden")
      .attr("class", "tooltip")
      .style("background-color", "#facdcd")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "10px");

    const mouseover = (e, d) => {
      tooltip.transition().duration(200).style("visibility", "visible");
      // circle.style("background-color", "black");
      console.log(e);
    };
    const mousemove = (e, d) => {
      tooltip
        .html(
          `${d.basDt}<br/>${names[0]} : ${d.xPrice}<br/>${names[1]} : ${d.yPrice}`,
        )
        .style(
          "transform",
          `translate(${e.offsetX - 30}px, ${e.offsetY - 20}px)`,
        );
    };
    const mouseleave = (e, d) => {
      tooltip.transition().duration(200).style("visibility", "hidden");
      svg.style("background-color", "white");
    };

    // dots
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.xPrice))
      .attr("cy", (d) => yScale(d.yPrice))
      .attr("r", 5)
      .style("fill", "#f6a64b")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  }, [data]);

  return (
    <ChartWrapper ref={betaChartRef}>
      <div ref={tooltipRef} />
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </ChartWrapper>
  );
};

export default BetaChart;
