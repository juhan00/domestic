import React, { useEffect, useRef } from "react";
import { GraphWrapper } from "../StatisticsBarPathGraph/style";
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
import useResizeObserver from "@utils/useResizeObserver";

const StatisticsGraph = ({ data }) => {
  const graphRef = useRef();
  const svgRef = useRef(null);
  const resizeWidth = useResizeObserver(graphRef);

  const myColor = ["#065398", "#F5746B", "#FDC055", "#35A67D"];

  useEffect(() => {
    const graphWrapper = select(graphRef.current);
    const svg = select(svgRef.current);

    svg.selectAll(".lines").remove();
    svg.selectAll(".dots").remove();

    if (!resizeWidth || !data) {
      return;
    }

    const width = resizeWidth.width;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const innerPadding = 60;

    svg.attr("width", resizeWidth).attr("height", 300);

    const xScale = scaleTime()
      .domain(extent(data, (data) => data.basDt))
      .range([margin.left + innerPadding, width - margin.right - innerPadding]);
    const xAxis = axisBottom(xScale).ticks(data.length);

    svg
      .select(".x-axis")
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style(
        "transform",
        `translate(${margin.right}px, ${height - margin.bottom}px)`,
      );

    const yScale = scaleLinear()
      .domain([0, max(data, (data) => data.부채비율) * 1.2])
      .nice()
      .range([height - margin.bottom, margin.top]);
    const yAxis = axisLeft(yScale);

    svg
      .select(".y-axis")
      .call(yAxis.ticks(5))
      .style("transform", `translateX(${margin.left}px)`)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll("line")
          .attr("x1", 0)
          .attr("x2", width)
          .style("stroke", "#f0f0f6")
          .style("transform", `translateX(0px)`),
      );

    svg
      .selectAll(".line")
      .data([data])
      .join((enter) => {
        const lines = enter.append("g").classed("lines", true);

        Object.keys(data[0]).map((keys, idx) => {
          keys === "basDt"
            ? null
            : lines
                .append("path")
                .attr("fill", "none")
                .attr("stroke", myColor[idx - 1])
                .attr("stroke-width", 2)
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr(
                  "d",
                  line()
                    .x((d) => xScale(d["basDt"]))
                    .y((d) => yScale(d[keys])),
                );
        });
      });

    svg
      .selectAll(".dots")
      .data(data)
      .join((enter) => {
        const dots = enter.append("g").classed("dots", true);

        Object.keys(data[0]).map((keys, idx) => {
          keys === "basDt"
            ? null
            : dots
                .append("circle")
                .attr("cx", (d) => xScale(d["basDt"]))
                .attr("cy", (d) => yScale(d[keys]))
                .attr("r", 3)
                .attr("fill", "#ffffff")
                .attr("stroke", myColor[idx - 1])
                .attr("stroke-width", 2);
        });
      });
  }, [data, resizeWidth]);

  return (
    <GraphWrapper ref={graphRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </GraphWrapper>
  );
};

export default StatisticsGraph;
