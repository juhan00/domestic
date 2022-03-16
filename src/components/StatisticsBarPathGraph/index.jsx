import React, { useEffect, useRef } from "react";
import { GraphWrapper } from "./style";
import {
  axisBottom,
  extent,
  max,
  min,
  scaleLinear,
  scaleBand,
  scaleTime,
  select,
  line,
  axisRight,
  axisLeft,
  timeFormat,
} from "d3";
import useResizeObserver from "@utils/useResizeObserver";

const StatisticsGraph = ({ data, barData, pathData, newData }) => {
  const graphRef = useRef();
  const svgRef = useRef(null);
  const resizeWidth = useResizeObserver(graphRef);

  const barColor = ["#FECF5B", "#35A67D"];
  const pathColor = ["#065398", "#F5746B", "#35A67D"];

  function topRounded(x, y, w, h, r, f) {
    if (f == undefined) f = 1;
    let x0 = x + r;
    let x1 = x + w - r;
    let y0 = y - h + r;
    let parts = [
      "M",
      x,
      y,
      "L",
      x,
      y0,
      "A",
      r,
      r,
      0,
      0,
      f,
      x0,
      y - h,
      "L",
      x1,
      y - h,
      "A",
      r,
      r,
      0,
      0,
      f,
      x + w,
      y0,
      "L",
      x + w,
      y,
      "Z",
    ];
    return parts.join(" ");
  }

  useEffect(() => {
    const graphWrapper = select(graphRef.current);
    const svg = select(svgRef.current);

    const barKeys = ["netInc", "opInc"];
    const pathKeys = ["roe", "roa"];

    const yearly = data.yearly;

    const entireValue = max(data, (data) => data.당기순이익);

    svg.selectAll(".dots").remove();
    svg.selectAll(".lines").remove();
    svg.selectAll(".bars").remove();

    if (!resizeWidth || !data) {
      return;
    }

    const width = resizeWidth.width;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const innerPadding = 60;

    svg.attr("width", resizeWidth).attr("height", 300);

    const xBandScale = scaleBand()
      .domain(barData.map((value, idx) => idx))
      .range([margin.left + innerPadding, width - margin.right - innerPadding])
      .paddingInner(0.5);

    const xScale = scaleTime()
      .domain(extent(barData, (data) => data.date))
      .range([
        margin.left + innerPadding + xBandScale.bandwidth() / 2,
        width - margin.right - innerPadding - xBandScale.bandwidth() / 2,
      ]);
    const xAxis = axisBottom(xScale)
      .ticks(barData.length)
      .tickFormat(timeFormat("%Y.%m"));
    const xBandAxis = axisBottom(xScale).tickFormat((node, i) => barData[node]);

    svg
      .select(".x-axis")
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style(
        "transform",
        `translate(${margin.left}px, ${height - margin.bottom}px)`,
      );
    svg
      .append("g")
      .call(xBandAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translate(30px, ${height - margin.bottom}px)`);

    const yRightScale = scaleLinear()
      .domain([0, max(pathData, (data) => data.ROE) * 1.2])
      .range([height - margin.bottom, margin.top]);

    const yLeftScale = scaleLinear()
      .domain([0, max(barData, (data) => data.당기순이익) * 1.2])
      .range([height - margin.bottom, margin.top])
      .nice();

    svg
      .select(".y-axis")
      .call(axisRight(yRightScale).ticks(5))
      .style("transform", `translateX(${width - margin.right}px)`)
      .call((g) => g.selectAll(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove());

    svg
      .append("g")
      .call(axisRight(yLeftScale).ticks(5))
      .call((g) => g.selectAll(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("x1", 30)
          .attr("x2", width - 30)
          .style("stroke", "#f0f0f6")
          .style("transform", `translateX(-${margin.right}px)`),
      );

    svg
      .selectAll(".bar")
      .data(barData)
      .join((enter) => {
        const bars = enter.append("g").classed("bars", true);

        Object.keys(barData[0]).map((keys, idx) => {
          keys === "date"
            ? null
            : bars
                .append("path")
                .attr("fill", "none")
                .attr("d", (node, index) =>
                  topRounded(
                    xBandScale(index),
                    yLeftScale(0),
                    xBandScale.bandwidth(),
                    yLeftScale(0) - yLeftScale(node.당기순이익),
                    2,
                  ),
                )
                .attr("fill", barColor[idx - 1]);
        });
      });

    svg
      .selectAll(".line")
      .data([pathData])
      .join((enter) => {
        const lines = enter.append("g").classed("lines", true);

        Object.keys(pathData[0]).map((keys, idx) => {
          keys === "date"
            ? null
            : lines
                .append("path")
                .attr("fill", "none")
                .attr("stroke", pathColor[idx - 1])
                .attr("stroke-width", 2)
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr(
                  "d",
                  line()
                    .x((d) => xScale(d["date"]))
                    .y((d) => yRightScale(d[keys])),
                );
        });
      });

    svg
      .selectAll(".dots")
      .data(pathData)
      .join((enter) => {
        const dots = enter.append("g").classed("dots", true);

        Object.keys(pathData[0]).map((keys, idx) => {
          keys === "date"
            ? null
            : dots
                .append("circle")
                .attr("cx", (d) => xScale(d["date"]))
                .attr("cy", (d) => yRightScale(d[keys]))
                .attr("r", 3)
                .attr("fill", "#ffffff")
                .attr("stroke", pathColor[idx - 1])
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
