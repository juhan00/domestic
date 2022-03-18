import React, { useCallback, useEffect, useRef, useState } from "react";
import { StockIndexWrapper } from "./style";
import * as d3 from "d3";
import useResizeObserver from "@utils/useResizeObserver";
import useDebounce from "@utils/useDebounce";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";
import { ticks } from "d3";
import numberWithCommas from "@utils/numberWithComma";
import HashLoader from "react-spinners/HashLoader";

export const StockIndexLoader = () => {
  return (
    <StockIndexWrapper>
      <div className="hash_loader_wrapper">
        <HashLoader color={"#48a185"} size={50} />
      </div>
    </StockIndexWrapper>
  );
};

const StockIndex = ({ type, data, date }) => {
  const chartData = data.chart;
  const svgRef = useRef(null);
  const stockIndexRef = useRef(null);
  const size = useResizeObserver(stockIndexRef);
  const resize = useDebounce(size, 200);

  useEffect(() => {
    if (!resize || !chartData) {
      return;
    }

    //초기 셋팅
    const margin = { top: 40, right: 45, bottom: 50, left: 0 };
    const width = resize.width - (margin.left + margin.right);
    const height = 80;
    const stockGap = d3.max(chartData.map((d) => d.stock)) * 0.12;
    const minStock = d3.min(chartData.map((d) => d.stock)) - stockGap;
    const maxStock = d3.max(chartData.map((d) => d.stock)) + stockGap;

    //svg 셋팅
    const svg = d3.select(svgRef.current);

    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    //x축
    const xScale = d3
      .scaleLinear()
      .domain([0, chartData.length - 1])
      .range([0, width]);
    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(ticks(2, chartData.length, 3))
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
      .domain([0, chartData.length - 1])
      .range([0, width]);
    const xAxisLine = d3
      .axisBottom(xScaleLine)
      .tickValues(ticks(2, chartData.length, 3))
      .tickFormat("")
      .tickSize(1);
    svg
      .selectAll(".x-axis-line")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 1)
      .style("color", "#111")
      .call(xAxisLine)
      .call((g) =>
        g
          .selectAll(".tick line")
          .style("transform", `translateY(-${height}px)`)
          .attr("y2", height)
          .style("stroke-opacity", 1),
      );

    //y축 right
    const yScale = d3
      .scaleLinear()
      .domain([minStock, maxStock])
      .range([height, 0]);

    const yAxisRight = d3
      .axisRight(yScale)
      .tickValues(ticks(minStock, maxStock, 3));
    svg
      .selectAll(".y-axis-right")
      .call(yAxisRight)
      .style(
        "transform",
        `translate(${width + margin.left}px, ${margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call((g) =>
        g
          .selectAll(".tick line")
          .style("transform", `translateX(${-width}px)`)
          .attr("x2", width)
          .style("stroke-opacity", 1),
      );

    //data line
    const dataLine = d3
      .line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(d3.curveCardinal);
    const dataArea = d3
      .area()
      .x((value, index) => xScale(index))
      .y0(height)
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
    svg
      .selectAll(".dataArea")
      .data([chartData.map((vlaue) => vlaue["stock"])])
      .join("path")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("class", "dataArea")
      .attr("d", dataArea)
      .attr("fill");
  }, [chartData, resize]);

  return (
    <StockIndexWrapper>
      <div className="topInfo">
        <div className="title">
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
          <div className="date">{date} 기준</div>
        </div>
        {Math.sign(data.rate) === 1 ? (
          <div className="info up">
            <div className="index">
              {numberWithCommas(data.index)}
              <span className="vs">
                <img src={stock_up} alt="stock up" />
                {data.vs.toFixed(2)}
              </span>
              <span className="rate">+{data.rate.toFixed(2)}%</span>
            </div>
          </div>
        ) : Math.sign(data.rate) === -1 ? (
          <div className="info down">
            <div className="index">
              {numberWithCommas(data.index)}
              <span className="vs">
                <img src={stock_down} alt="stock down" />
                {Math.abs(data.vs.toFixed(2))}
              </span>
              <span className="rate">{data.rate.toFixed(2)}%</span>
            </div>
          </div>
        ) : (
          <div className="info">
            <div className="index">
              {numberWithCommas(data.index)}
              <span className="vs">
                <img src={stock_none} alt="stock none" />
                {data.vs.toFixed(2)}
              </span>
              <span className="rate">{data.rate.toFixed(2)}%</span>
            </div>
          </div>
        )}
      </div>
      <div className="stockIndexRef" ref={stockIndexRef}>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
          <g className="y-axis-right" />
          <g className="x-axis-line" />
          <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="100%">
            <stop
              id="stop1"
              offset="0%"
              stopColor="#45A675"
              stopOpacity="0.63"
            />
            <stop
              id="stop2"
              offset="100%"
              stopColor="#5FB6AD"
              stopOpacity="0.1"
            />
          </linearGradient>
        </svg>
      </div>
    </StockIndexWrapper>
  );
};

export default StockIndex;
