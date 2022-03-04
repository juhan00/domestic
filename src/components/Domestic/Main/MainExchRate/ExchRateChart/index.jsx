import React, { useCallback, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ExchRateChartWrapper } from "./style";

const ExchRateChart = () => {
  const data = [
    { stock: 2900, date: "10:00" },
    { stock: 2520, date: "10:10" },
    { stock: 2530, date: "10:20" },
    { stock: 2400, date: "10:30" },
    { stock: 2500, date: "10:40" },
    { stock: 2650, date: "10:50" },
    { stock: 2700, date: "11:00" },
    { stock: 2500, date: "11:10" },
    { stock: 2403, date: "11:20" },
    { stock: 2300, date: "11:30" },
    { stock: 2230, date: "11:40" },
    { stock: 2330, date: "11:50" },
    { stock: 2400, date: "12:00" },
    { stock: 2100, date: "12:10" },
    { stock: 2540, date: "12:20" },
    { stock: 2400, date: "12:30" },
    { stock: 2600, date: "12:40" },
    { stock: 2400, date: "12:50" },
    { stock: 2300, date: "10:00" },
    { stock: 2405, date: "10:10" },
    { stock: 2500, date: "10:20" },
    { stock: 2400, date: "10:30" },
    { stock: 2500, date: "10:40" },
    { stock: 2650, date: "10:50" },
    { stock: 2700, date: "11:00" },
    { stock: 2500, date: "11:10" },
    { stock: 2400, date: "11:20" },
    { stock: 2300, date: "11:30" },
    { stock: 2200, date: "11:40" },
    { stock: 2340, date: "11:50" },
    { stock: 2400, date: "12:00" },
    { stock: 2340, date: "12:10" },
    { stock: 2500, date: "12:20" },
    { stock: 2480, date: "12:30" },
    { stock: 2600, date: "12:40" },
    { stock: 2900, date: "12:50" },
  ];

  const svgRef = useRef(null);

  //tick 분할 함수
  const setTickCount = useCallback((min, max, count, type) => {
    const interval = (max - min) / count;
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
    //초기 셋팅
    const width = 300;
    const height = 150;
    const margin = { top: 30, right: 50, bottom: 30, left: 0 };
    const xTickCount = 6;
    const yTickCount = 5;
    const xTickBlankCount = 0;
    const minStock = d3.min(data.map((d) => d.stock)) - 300;
    const maxStock = d3.max(data.map((d) => d.stock)) + 300;
    const xLabel = "(회차)";
    const yLabel = "(원)";

    //svg 셋팅
    const svg = d3.select(svgRef.current);
    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    //x축
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length + xTickBlankCount])
      .range([0, width]);
    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(setTickCount(0, data.length, xTickCount, "center"))
      .tickFormat((index) => data[index]["date"])
      .tickSize(10);

    svg
      .select(".x-axis")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call(xAxis)
      .append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "start")
      .attr("fill", "black")
      .attr("transform", `translate(${width + 13}, 20)`)
      .text(xLabel);

    //x축 line
    const xScaleLine = d3
      .scaleLinear()
      .domain([0, data.length + xTickBlankCount])
      .range([0, width]);
    const xAxisLine = d3
      .axisBottom(xScaleLine)
      .tickValues(setTickCount(0, data.length, xTickCount * 2, "center"))
      .tickSize(0)
      .tickFormat("");
    svg
      .select(".x-axis-line")
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
      .tickValues(setTickCount(minStock, maxStock, yTickCount))
      .tickSize(10);
    svg
      .select(".y-axis")
      .call(yAxis)
      .style(
        "transform",
        `translate(${width + margin.left}px, ${margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .style("transform", "translateX(0px)")
          .attr("x2", -width)
          .style("stroke-opacity", 1),
      )
      .append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "start")
      .attr("fill", "black")
      .attr("transform", `translate(13, -15)`)
      .text(yLabel);

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
  }, [data]);

  return (
    <ExchRateChartWrapper>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
        <g className="x-axis-line" />
      </svg>
    </ExchRateChartWrapper>
  );
};

export default ExchRateChart;
