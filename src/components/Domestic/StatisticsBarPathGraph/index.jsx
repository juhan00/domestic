import React, { useEffect, useRef } from "react";
import { GraphWrapper } from "./style";
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

const StatisticsGraph = ({
  data,
  barColor = "#5FB6AD",
  barWidth = 50,
  width = 750,
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

    const entireValue = max(data, (data) => data.당기순이익);

    svg.attr("width", 750).attr("height", 170);

    const xScale = scaleTime()
      .domain(extent(data, (data) => data.date))
      .range([marginLeft, width - marginRight]);
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
      .style("transform", `translate(30px, ${height - marginBottom}px)`);
    svg
      .append("g")
      .call(xBandAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translate(30px, ${height - marginBottom}px)`);

    const yRightScale = scaleLinear()
      .domain([0, max(data, (data) => data.ROE)])
      .nice()
      .range([height - marginBottom, marginTop]);
    const yRightAxis = axisLeft(yRightScale);

    const yLeftScale = scaleLinear()
      .domain([0, max(data, (data) => data.당기순이익)])
      .nice()
      .range([height - marginBottom, marginTop]);
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
      // Flag for sweep:
      if (f == undefined) f = 1;
      // x coordinates of top of arcs
      let x0 = x + r;
      let x1 = x + w - r;
      // y coordinates of bottom of arcs
      let y0 = y - h + r;

      // assemble path:
      let parts = [
        "M",
        x,
        y, // step 1
        "L",
        x,
        y0, // step 2
        "A",
        r,
        r,
        0,
        0,
        f,
        x0,
        y - h, // step 3
        "L",
        x1,
        y - h, // step 4
        "A",
        r,
        r,
        0,
        0,
        f,
        x + w,
        y0, // step 5
        "L",
        x + w,
        y, // step 6
        "Z", // step 7
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
          4,
        ),
      )
      .attr("fill", "#5fb6ad");

    // press
    //   .append("rect")
    //   .attr(
    //     "height",
    //     (node) => (node.당기순이익 / entireValue) * (height - marginBottom),
    //   )
    //   .attr("width", barWidth)
    //   .attr("x", (_, index) => xBandScale(index))
    //   .attr(
    //     "y",
    //     (node) =>
    //       height -
    //       marginBottom -
    //       (node.당기순이익 / entireValue) * (height - marginBottom),
    //   )
    //   .attr("fill", barColor);

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
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yRightScale(d.ROE))
      .attr("r", 4)
      .attr("fill", "#5fb6ad");

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
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yRightScale(d.ROA))
      .attr("r", 4)
      .attr("fill", "#5fc8e9");

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
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yRightScale(d.ROIC))
      .attr("r", 4)
      .attr("fill", "#366d8c");
  }, []);
  return (
    <svg ref={svgRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default StatisticsGraph;
