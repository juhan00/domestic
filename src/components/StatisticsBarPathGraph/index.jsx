import React, { useEffect, useRef } from "react";
import {
  axisBottom,
  extent,
  max,
  scaleLinear,
  scaleBand,
  scaleTime,
  select,
  line,
  axisRight,
  axisLeft,
} from "d3";
import useResizeObserver from "@utils/useResizeObserver";

const StatisticsGraph = ({ data }) => {
  const graphRef = useRef();
  const svgRef = useRef(null);
  const resizeWidth = useResizeObserver(graphRef);

  useEffect(() => {
    const graphWrapper = select(graphRef.current);
    const svg = select(svgRef.current);

    const entireValue = max(data, (data) => data.당기순이익);

    svg.selectAll(".dots").remove();
    svg.selectAll(".line").remove();

    if (!resizeWidth || !data) {
      return;
    }

    const width = resizeWidth.width;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 30, left: 50 };

    svg.attr("width", 750).attr("height", 300);

    const xScale = scaleTime()
      .domain(extent(data, (data) => data.date))
      .range([margin.left, width - margin.right]);
    const xAxis = axisBottom(xScale).ticks(data.length);
    // .tickSizeOuter(0);

    const xBandScale = scaleBand()
      .domain(data.map((value, idx) => idx))
      .range([0, width])
      .padding(0.5);
    const xBandAxis = axisBottom(xScale).tickFormat((node, i) => {
      return data[node];
    });

    svg
      .select(".x-axis")
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translate(30px, ${height - margin.bottom}px)`);
    svg
      .append("g")
      .call(xBandAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translate(30px, ${height - margin.bottom}px)`);

    const yRightScale = scaleLinear()
      .domain([0, max(data, (data) => data.ROE)])
      .nice()
      .range([height - margin.bottom, margin.top]);
    const yRightAxis = axisLeft(yRightScale);

    const yLeftScale = scaleLinear()
      .domain([0, max(data, (data) => data.당기순이익)])
      .nice()
      .range([height - margin.bottom, margin.top]);
    const yLeftAxis = axisRight(yLeftScale);

    svg
      .select(".y-axis")
      .call(yRightAxis)
      .style("transform", `translateX(${width}px)`)
      .call((g) => g.selectAll(".domain").remove())
      .call((g) =>
        g
          .selectAll("line")
          .attr("x1", 0)
          .attr("x2", width)
          .style("stroke", "#f0f0f6")
          .style("transform", `translateX(${-width}px)`),
      );
    svg
      .append("g")
      .call(yLeftAxis)
      .call((g) => g.selectAll(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove());

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

    const press = svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("path")
      .attr("d", (node, index) =>
        topRounded(
          xBandScale(index),
          yLeftScale(0),
          xBandScale.bandwidth(),
          yLeftScale(0) - yLeftScale(node.당기순이익),
          2,
        ),
      )
      .attr("fill", "#FECF5B");

    const chartLine1 = line()
      .defined((d) => !isNaN(d.ROE))
      .x((d) => xScale(d.date))
      .y((d) => yRightScale(d.ROE));

    const chartLine2 = line()
      .defined((d) => !isNaN(d.ROA))
      .x((d) => xScale(d.date))
      .y((d) => yRightScale(d.ROA));

    const chartLine3 = line()
      .defined((d) => !isNaN(d.ROIC))
      .x((d) => xScale(d.date))
      .y((d) => yRightScale(d.ROIC));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#EE9696")
      .attr("stroke-width", 2)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", chartLine1);
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yRightScale(d.ROE))
      .attr("r", 4)
      .attr("fill", "#EE9696")
      .attr("stroke", "white");

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#FACDCD")
      .attr("stroke-width", 2)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", chartLine2);
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yRightScale(d.ROA))
      .attr("r", 4)
      .attr("fill", "#FACDCD")
      .attr("stroke", "white");

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#A61515")
      .attr("stroke-width", 2)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", chartLine3);
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yRightScale(d.ROIC))
      .attr("r", 4)
      .attr("fill", "#A61515")
      .attr("stroke", "white");
  }, [data, resizeWidth]);
  return (
    <div ref={graphRef} style={{ backgroundColor: "blue" }}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default StatisticsGraph;
