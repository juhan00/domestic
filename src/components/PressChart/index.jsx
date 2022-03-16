import { select, max, scaleLinear, scaleBand, axisRight, axisBottom } from "d3";
import React, { useEffect, useRef } from "react";
import useResizeObserver from "@utils/useResizeObserver";
import { PressChartWrapper } from "./style";
import useDebounce from "@utils/useDebounce";

const PressChart = ({
  data,
  barColor = "#CBEBDB",
  barWidth = 20,
  width = 500,
  height = 300,
  barSpace = 50,
  marginTop = 40,
  marginBottom = 40,
  marginLeft = 40,
  marginRight = 40,
  padding = 40,
}) => {
  const pressChartRef = useRef(null);
  const svgRef = useRef(null);
  const dimensions = useResizeObserver(pressChartRef);
  const resize = useDebounce(dimensions, 200);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!resize) return;

    svg.selectAll(".pressg").remove();

    const { width, height } = resize;
    svg.attr("width", width).attr("height", height);

    const entireValue = max(data, (data) => data.value);

    const xScale = scaleBand()
      .domain(data.map((value, idx) => idx))
      .range([marginLeft, width - marginLeft])
      .padding(0.5);

    const xAxis = axisBottom(xScale).tickFormat((node, i) => {
      return data[node].title;
    });

    svg
      .select(".x-axis")
      .style("transform", `translateY(${height - marginBottom}px)`)
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .call((g) =>
        g
          .selectAll(".tick text")
          .style(
            "transform",
            (data, index) => `translateX(${xScale.bandwidth() / 2}px)`,
          ),
      );

    const maxValue = max(data, (data) => data.value);
    const maxValueLength = maxValue.toString().length;
    const maxValueDigits = Math.pow(10, maxValueLength - 1);
    const maxTickValue = Math.floor(maxValue / maxValueDigits) * maxValueDigits;

    const yScale = scaleLinear()
      .domain([0, entireValue])
      .range([height - marginBottom, marginBottom])
      .clamp(true);

    const yAxis = axisRight(yScale).tickValues([
      0,
      maxTickValue / 2,
      maxTickValue,
    ]);

    svg
      .select(".y-axis")
      .call(yAxis)
      .style("transform", `translateX(${marginLeft}px)`)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll("line")
          .attr("x1", marginLeft)
          .attr("x2", width - marginRight - marginLeft)
          .style("stroke", "#ddd"),
      );

    svg
      .selectAll(".pressg")
      .data(data)
      .join((enter) => {
        const pressg = enter.append("g").classed("pressg", true);

        pressg
          .append("rect")
          .classed("pressrect", true)
          .attr(
            "height",
            (node) =>
              (node.value / entireValue) * (height - marginBottom - marginTop),
          )
          .attr("x", (_, index) => xScale(index) + xScale.bandwidth() / 2)
          .attr("y", (node) => yScale(node.value))
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("width", xScale.bandwidth())
          .attr("fill", barColor);

        pressg
          .append("text")
          .classed("presstext", true)
          .attr("text-anchor", "middle")
          .text((data) => data["value"])
          .attr("x", (data, index) => {
            return xScale(index) + xScale.bandwidth();
          })
          .attr("y", (node) => yScale(node.value) - 10);
      });
  }, [data, resize]);

  return (
    <PressChartWrapper ref={pressChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </PressChartWrapper>
  );
};

export default PressChart;
