import React, { useCallback, useEffect, useRef, useState } from "react";
import { StockIndexWrapper } from "./style";
import * as d3 from "d3";
import useResizeObserver from "@utils/useResizeObserver";
import useDebounce from "@utils/useDebounce";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";
import { BarChart } from "@components/ContentLoader";

export const StockIndexLoader = () => {
  return (
    <StockIndexWrapper>
      <BarChart />
    </StockIndexWrapper>
  );
};

const StockIndex = ({ type, data }) => {
  const chartData = data.chart;
  const svgRef = useRef(null);
  const stockIndexRef = useRef(null);
  const size = useResizeObserver(stockIndexRef);
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
    if (!resize || !chartData) {
      return;
    }

    //초기 셋팅
    const margin = { top: 40, right: 40, bottom: 50, left: 40 };
    const width = resize.width - (margin.left + margin.right);
    const height = 80;
    const xTickCount = 4;
    const yTickCount = 4;
    const xTickBlankCount = 2;
    const eveStock = 2700;
    const minStock = d3.min(chartData.map((d) => d.stock)) - 300;
    const maxStock = d3.max(chartData.map((d) => d.stock)) + 300;

    //svg 셋팅
    const svg = d3.select(svgRef.current);

    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    //x축
    const xScale = d3
      .scaleLinear()
      .domain([0, chartData.length + xTickBlankCount])
      .range([0, width]);
    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(setTickCount(0, chartData.length, xTickCount, "center"))
      .tickFormat((index) => chartData[index]["date"]);
    svg
      .selectAll(".x-axis")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call(xAxis);

    //x축 line
    const xScaleLine = d3
      .scaleLinear()
      .domain([0, chartData.length + xTickBlankCount])
      .range([0, width]);
    const xAxisLine = d3
      .axisBottom(xScaleLine)
      .tickValues(setTickCount(0, chartData.length, xTickCount * 2, "center"))
      .tickFormat("");
    svg
      .selectAll(".x-axis-line")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call(xAxisLine)
      .call((g) =>
        g
          .selectAll(".tick line")
          .style("transform", `translateY(-${height}px)`)
          .attr("y2", height)
          .style("stroke-opacity", 1),
      );

    //y축 left + line
    const yScale = d3
      .scaleLinear()
      .domain([minStock, maxStock])
      .range([height, 0]);
    const yAxis = d3
      .axisLeft(yScale)
      .tickValues(setTickCount(minStock, maxStock, yTickCount));
    svg
      .selectAll(".y-axis")
      .call(yAxis)
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .style("stroke-opacity", 0)
      .call((g) =>
        g
          .selectAll(".tick line")
          .style("transform", "translateX(0px)")
          .attr("x2", width)
          .style("stroke-opacity", 1),
      );

    //y축 right
    const yAxisRight = d3
      .axisRight(yScale)
      .tickValues(setTickCount(minStock, maxStock, yTickCount));
    svg
      .selectAll(".y-axis-right")
      .call(yAxisRight)
      .style(
        "transform",
        `translate(${width + margin.left}px, ${margin.top}px)`,
      )
      .style("stroke-opacity", 0);

    //x축 today line
    const xScaleToday = d3
      .scaleLinear()
      .domain([0, chartData.length - 1])
      .range([0, width]);
    const todayLine = d3
      .line()
      .x((value, index) => xScaleToday(index))
      .y((value) => yScale(value));
    svg
      .selectAll(".todayLine")
      .data([chartData.map((value) => eveStock)])
      .join("path")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("class", "todayLine")
      .attr("d", todayLine)
      .style("stroke-opacity", 1);

    //data line
    const dataLine = d3
      .line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(d3.curveCardinal);
    const dataArea = d3
      .area()
      .x((value, index) => xScale(index))
      .y0(() => yScale(0))
      .y1((value) => yScale(value))
      .curve(d3.curveCardinal);

    svg
      .selectAll(".dataLine")
      .data([chartData.map((value) => value["stock"])])
      .join("path")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("class", "dataLine")
      .attr("d", dataLine)
      .attr("fill", "none");
    // svg
    //   .selectAll(".dataArea")
    //   .data([chartData.map((vlaue) => vlaue["stock"])])
    //   .join("path")
    //   .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
    //   .attr("class", "dataArea")
    //   .attr("d", dataArea)
    //   .attr("fill");
    svg
      .selectAll(".dataArea")
      .data([chartData.map((vlaue) => vlaue["stock"])])
      .join((enter) => {
        enter
          .append("g")
          // .classed("dataArea", true)
          // .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
          // .attr("class", "dataArea")
          .attr("d", dataArea)
          .attr("fill");
      });
  }, [chartData, resize]);

  // console.log(data);
  return (
    <StockIndexWrapper>
      <div className="topInfo">
        <h2>
          {type === "domestic"
            ? data.id === "kospi"
              ? "코스피 지수"
              : data.id === "kosdaq"
              ? "코스닥 지수"
              : data.id === "kospi200" && "코스피200"
            : type === "global" && data.id === "dow"
            ? "다우산업 지수"
            : data.id === "nasdaq"
            ? "나스닥 지수"
            : data.id === "s&p500" && "S&P500"}
        </h2>
        <div className="info">
          <div className="index">
            2,718.74
            <span className="vs">
              <img src={stock_up} alt="stock up" />
              11.95
            </span>
            <span className="rate">+0.44%</span>
          </div>
          <div className="date">2022.02.23 14:15 장중</div>
        </div>
      </div>
      <div className="stockIndexRef" ref={stockIndexRef}>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
          <g className="y-axis-right" />
          <g className="x-axis-line" />
          {/* <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="100%">
            <stop id="stop1" offset="0%" stopColor="#F5746B" stopOpacity="1" />
            <stop
              id="stop2"
              offset="100%"
              stopColor="#F5746B"
              stopOpacity="0.2"
            />
          </linearGradient> */}
        </svg>
      </div>
    </StockIndexWrapper>
  );
};

export default StockIndex;
