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
  timeFormat,
} from "d3";
import useResizeObserver from "@utils/useResizeObserver";

const StatisticsGraph = ({ data, type }) => {
  const graphRef = useRef();
  const svgRef = useRef(null);
  const resizeWidth = useResizeObserver(graphRef);

  const pathKeys = {
    statistics: ["opMargin", "netMargin", "deptEquity"],
    balance: ["reveInc", "marInc", "netInc"],
    income: [],
  };

  const yearly = data.yearly;

  const myColor = ["#065398", "#F5746B", "#FDC055", "#35A67D"];

  useEffect(() => {
    const graphWrapper = select(graphRef.current);
    const svg = select(svgRef.current);

    const yMax = Math.max(
      ...pathKeys[type].map((key) => max(yearly, (year) => year[key])),
    );

    svg.selectAll(".lines").remove();
    svg.selectAll(".dots").remove();

    if (!resizeWidth || !yearly) {
      return;
    }

    const width = resizeWidth.width;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const innerPadding = 60;

    svg.attr("width", resizeWidth).attr("height", 300);

    const xScale = scaleTime()
      .domain(extent(yearly, (year) => new Date(year.basDt)))
      .range([margin.left + innerPadding, width - margin.right - innerPadding])
      .nice();

    svg
      .select(".x-axis")
      .call(
        axisBottom(xScale).ticks(yearly.length).tickFormat(timeFormat("%Y.%m")),
      )
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style(
        "transform",
        `translate(${margin.right}px, ${height - margin.bottom}px)`,
      );

    const yScale = scaleLinear()
      .domain([0, yMax * 1.2])
      .range([height - margin.bottom, margin.top])
      .nice();

    svg
      .select(".y-axis")
      .call(axisLeft(yScale).ticks(5))
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
      .data([yearly])
      .join((enter) => {
        const lines = enter.append("g").classed("lines", true);

        Object.keys(yearly[0]).map((keys, idx) => {
          pathKeys[type].includes(keys)
            ? lines
                .append("path")
                .attr("fill", "none")
                .attr("stroke", myColor[idx % 4])
                .attr("stroke-width", 2)
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr(
                  "d",
                  line()
                    .x((d) => xScale(new Date(d["basDt"])))
                    .y((d) => yScale(d[keys])),
                )
            : null;
        });
      });

    svg
      .selectAll(".dots")
      .data(yearly)
      .join((enter) => {
        const dots = enter.append("g").classed("dots", true);

        Object.keys(yearly[0]).map((keys, idx) => {
          pathKeys[type].includes(keys)
            ? dots
                .append("circle")
                .attr("cx", (d) => xScale(new Date(d["basDt"])))
                .attr("cy", (d) => yScale(d[keys]))
                .attr("r", 3)
                .attr("fill", "#ffffff")
                .attr("stroke", myColor[idx % 4])
                .attr("stroke-width", 2)
            : null;
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
