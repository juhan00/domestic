import React, { useEffect, useRef } from "react";
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
import { axisLeft } from "d3";

const StatisticsGraph = ({
  data,
  width = 700,
  height = 170,
  marginTop = 20,
  marginBottom = 20,
  marginLeft = 80,
  marginRight = 110,
  padding = 40,
}) => {
  const graphRef = useRef();
  const svgRef = useRef(null);

  useEffect(() => {
    const graphWrapper = select(graphRef.current);
    const svg = select(svgRef.current);

    svg.attr("width", 700).attr("height", 170);

    const xScale = scaleTime()
      .domain(extent(data, (data) => data.basDt))
      .range([marginLeft, width - marginRight]);

    const xAxis = axisBottom(xScale).ticks(data.length);
    // .tickSizeOuter(0);

    svg
      .select(".x-axis")
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translate(30px, ${height - marginBottom}px)`);

    const yScale = scaleLinear()
      .domain([0, max(data, (data) => data.부채비율)])
      .nice()
      .range([height - marginBottom, marginTop]);

    const yAxis = axisLeft(yScale);

    svg
      .select(".y-axis")
      .call(yAxis)
      .style("transform", `translateX(${width}px)`)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll("line")
          .attr("x1", 0)
          .attr("x2", width)
          .style("stroke", "#f0f0f6")
          .style("transform", `translateX(${-width}px)`),
      );

    const chartLine1 = line()
      .defined((d) => !isNaN(d.부채비율))
      .x((d) => xScale(d.basDt))
      .y((d) => yScale(d.부채비율));

    const chartLine2 = line()
      .defined((d) => !isNaN(d.유동부채비율))
      .x((d) => xScale(d.basDt))
      .y((d) => yScale(d.유동부채비율));

    const chartLine3 = line()
      .defined((d) => !isNaN(d.비유동부채비율))
      .x((d) => xScale(d.basDt))
      .y((d) => yScale(d.비유동부채비율));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#5fb6ad")
      .attr("stroke-width", 2)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", chartLine1);
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.basDt))
      .attr("cy", (d) => yScale(d.부채비율))
      .attr("r", 4)
      .attr("fill", "#5fb6ad")
      .attr("stroke", "white");

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#5fc8e9")
      .attr("stroke-width", 2)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", chartLine2);
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.basDt))
      .attr("cy", (d) => yScale(d.유동부채비율))
      .attr("r", 4)
      .attr("fill", "#5fc8e9")
      .attr("stroke", "white");

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#366d8c")
      .attr("stroke-width", 2)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", chartLine3);
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.basDt))
      .attr("cy", (d) => yScale(d.비유동부채비율))
      .attr("r", 4)
      .attr("fill", "#366d8c")
      .attr("stroke", "white");
  }, []);
  return (
    <svg ref={svgRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default StatisticsGraph;
