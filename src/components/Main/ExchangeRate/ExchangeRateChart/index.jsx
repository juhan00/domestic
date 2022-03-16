import React, { useCallback, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ExchangeRateChartWrapper } from "./style";
import useResizeObserver from "@utils/useResizeObserver";
import useDebounce from "@utils/useDebounce";
import { ticks } from "d3";

const ExchangeRateChart = ({ data }) => {
  const exchangeRateChartRef = useRef(null);
  const svgRef = useRef(null);
  const size = useResizeObserver(exchangeRateChartRef);
  const resize = useDebounce(size, 200);

  //tick 분할 함수
  const setTickCount = useCallback((min, max, count, type) => {
    const interval = Math.round((max - min) / count);

    if (type === "center") {
      const tick = [interval];
      let tickValue = interval;

      for (let i = 2; i < count; i++) {
        tick.push(tickValue + interval);
        tickValue += interval;
      }
      return tick;
    } else {
      const tick = [min];
      let tickValue = min;

      for (let i = 0; i < count; i++) {
        tick.push(tickValue + interval);
        tickValue += interval;
      }

      return tick;
    }
  }, []);

  useEffect(() => {
    if (!resize || !data) {
      return;
    }

    //초기 셋팅
    const margin = { top: 30, right: 50, bottom: 30, left: 0 };
    const width = resize.width - (margin.left + margin.right);
    const height = 100;
    const xTickCount = 6;
    const yTickCount = 5;
    // const xTickBlankCount = 2;
    const stockGap = Math.floor(
      (d3.max(data.map((d) => d.stock)) - d3.min(data.map((d) => d.stock))) *
        1.5,
    );
    const minStock = d3.min(data.map((d) => d.stock)) - stockGap;
    const maxStock = d3.max(data.map((d) => d.stock)) + stockGap;
    const xLabel = "(회차)";
    const yLabel = "(원)";

    //svg 셋팅
    const svg = d3.select(svgRef.current);
    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    svg.selectAll(".x-label").remove();
    svg.selectAll(".y-label").remove();

    //x축
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(ticks(2, data.length, 6))
      // .tickValues(setTickCount(0, data.length, xTickCount, "center"))
      // .tickValues([0, 33])
      .tickFormat((index) => data[index]["date"])
      .tickSize(5);

    svg
      .selectAll(".x-axis")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 1)
      .call(xAxis);

    svg
      .selectAll(".x-axis")
      .selectAll(".x-label")
      .data([xLabel])
      .join((enter) =>
        enter
          .append("text")
          .attr("class", "x-label")
          .attr("text-anchor", "start")
          .attr("fill", "black")
          .attr("transform", `translate(${width + 13}, 20)`)
          .text((data) => data),
      );

    //x축 line
    const xScaleLine = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const xAxisLine = d3
      .axisBottom(xScaleLine)
      .tickValues(ticks(2, data.length, 6))
      // .tickValues(setTickCount(0, data.length, xTickCount * 2, "center"))
      .tickSize(5)
      .tickFormat("");
    svg
      .selectAll(".x-axis-line")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 1)
      .call(xAxisLine)
      .call((g) =>
        g
          .selectAll(".tick line")
          .style("transform", `translateY(-${height}px)`)
          .attr("y2", height)
          .style("stroke-opacity", 1),
      );

    //y축 right + line
    const yScale = d3
      .scaleLinear()
      .domain([minStock, maxStock])
      .range([height, 0]);
    const yAxis = d3
      .axisRight(yScale)
      .tickValues(ticks(minStock, maxStock, 4))
      .tickSize(10);

    svg
      .selectAll(".y-axis")
      .call(yAxis)
      .style(
        "transform",
        `translate(${width + margin.left}px, ${margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call((g) =>
        g
          .selectAll(".tick line")
          .style("transform", "translateX(0px)")
          .attr("x2", -width)
          .style("stroke-opacity", 1),
      );

    svg
      .selectAll(".y-axis")
      .selectAll(".y-label")
      .data([yLabel])
      .join((enter) =>
        enter
          .append("text")
          .attr("class", "y-label")
          .attr("text-anchor", "start")
          .attr("fill", "black")
          .attr("transform", `translate(13, -15)`)
          .text((data) => data),
      );

    //data line
    const dataLine = d3
      .line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(d3.curveCardinal);
    svg
      .selectAll(".dataLine")
      .data([data.map((data) => data["stock"])])
      .join("path")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("class", "dataLine")
      .attr("d", dataLine)
      .attr("fill", "none");
  }, [data, resize]);

  return (
    <ExchangeRateChartWrapper ref={exchangeRateChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis">
          <g className="x-label" />
        </g>
        <g className="y-axis">
          <g className="y-label" />
        </g>
        <g className="x-axis-line" />
      </svg>
    </ExchangeRateChartWrapper>
  );
};

export default ExchangeRateChart;
