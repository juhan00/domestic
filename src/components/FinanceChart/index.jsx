import {
  select,
  extent,
  axisBottom,
  scaleBand,
  scaleLinear,
  format,
  timeFormat,
} from "d3";
import React, { useEffect, useRef } from "react";
import useResizeObserver from "@utils/useResizeObserver";
import { FinanceChartWrapper } from "./style";
import { axisLeft } from "d3";
import getTextWidth from "@utils/getTextWidth";

const FinanceChart = ({
  barWidth = 20,
  width = 500,
  height = 300,
  data,
  barSpace = 50,
  marginTop = 40,
  marginBottom = 40,
  marginLeft = 40,
  marginRight = 40,
  padding = 40,
  bandPadding = 0.3,
}) => {
  const financeChartRef = useRef();
  const svgRef = useRef(null);
  const dimensions = useResizeObserver(financeChartRef);
  useEffect(() => {
    const svg = select(svgRef.current);
    svg.selectAll(".financeg").remove();

    if (!dimensions) return;

    const { width, height } = dimensions;
    svg.attr("width", width).attr("height", height);

    const [minX, maxX] = extent(data.values, (value) => value.value);
    const isBothSide = minX * maxX < 0 ? true : false;
    const isUnderZero = minX < 0;

    const xAbsMax =
      Math.abs(minX) > Math.abs(maxX) ? Math.abs(minX) : Math.abs(maxX);

    const xScale = scaleLinear()
      .domain([0, xAbsMax * 2])
      .range([marginLeft, width]);

    if (isUnderZero) {
      xScale.range([marginLeft, width / 2 - marginLeft]);
    }

    const yScale = scaleBand()
      .domain(data.values.map((value, idx) => idx))
      .range([height - marginBottom, marginTop])
      .padding(bandPadding);

    const xAxis = axisBottom(xScale).tickFormat(format("d"));
    const yAxis = axisLeft(yScale);

    svg
      .select(".y-axis")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis)
      .call((g) => g.selectAll(".tick line").remove())
      .call((g) => g.selectAll(".domain").remove())
      .call((g) => {
        const nodes = g.selectAll(".tick").nodes();
        nodes.map((node, idx) => {
          idx === 1
            ? select(node)
                .select("text")
                .text(() => data.date)
                .attr("transform", `translate(${marginLeft},0)`)
                .classed("yAxisLabel", true)
            : select(node).select("text").remove();
        });
      });

    svg
      .selectAll(".financeg")
      .data(data.values)
      .join((enter) => {
        const financeg = enter.append("g").classed("financeg", true);

        financeg
          .append("rect")
          .attr("class", (value) => `financerect ${value.type}`)
          .attr("x", (value) => {
            if (isUnderZero) {
              if (value.value < 0) {
                return width / 2 + xScale(value.value) - marginLeft * 2;
              }
              return width / 2;
            }
            return marginLeft;
          })
          .attr("y", (value, index, nodes) => {
            const length = nodes.length - 1;
            return yScale(length - index);
          })
          .attr("width", (value) => {
            return value.value < 0
              ? xScale(Math.abs(value.value))
              : xScale(value.value);
          })
          .attr("height", () => yScale.bandwidth());

        financeg
          .append("text")
          .classed("financetext", true)
          .text((value) => value.value)
          .attr("x", (value) => {
            const textWidth = getTextWidth(value.value);
            if (isUnderZero) {
              if (value.value < 0) {
                return (
                  width / 2 + xScale(value.value) - marginLeft * 2 - textWidth
                );
              }
              return width / 2 + xScale(value.value) + textWidth;
            }
            return marginLeft;
          })
          .attr("y", (value, index, nodes) => {
            const length = nodes.length - 1;
            return yScale(length - index) + yScale.bandwidth() / 2;
          });
      });
  }, [data, dimensions]);

  return (
    <FinanceChartWrapper ref={financeChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </FinanceChartWrapper>
  );
};

export default FinanceChart;
