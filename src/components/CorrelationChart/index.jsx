import React, { useCallback, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { CorrChartWrapper, TableHeader, Row, Cell } from "./style";
import useResizeObserver from "@utils/useResizeObserver";
import Search from "@components/Search"

const CorrelationChart = () => {
  const data = [
    { corr: 2.900, date: "10:00" },
    { corr: 2.520, date: "10:10" },
    { corr: 2.530, date: "10:20" },
    { corr: 2.400, date: "10:30" },
    { corr: 2.500, date: "10:40" },
    { corr: 2.650, date: "10:50" },
    { corr: 2.700, date: "11:00" },
    { corr: 2.500, date: "11:10" },
    { corr: 2.403, date: "11:20" },
    { corr: 2.300, date: "11:30" },
    { corr: 2.230, date: "11:40" },
    { corr: 2.330, date: "11:50" },
    { corr: 2.400, date: "12:00" },
    { corr: 2.100, date: "12:10" },
    { corr: 2.540, date: "12:20" },
    { corr: 2.400, date: "12:30" },
    { corr: 2.600, date: "12:40" },
    { corr: 2.400, date: "12:50" },
    { corr: 2.300, date: "10:00" },
    { corr: 2.405, date: "10:10" },
    { corr: 2.500, date: "10:20" },
    { corr: 2.400, date: "10:30" },
    { corr: 2.500, date: "10:40" },
    { corr: 2.650, date: "10:50" },
    { corr: 2.700, date: "11:00" },
    { corr: 2.500, date: "11:10" },
    { corr: 2.400, date: "11:20" },
    { corr: 2.300, date: "11:30" },
    { corr: 2.200, date: "11:40" },
    { corr: 2.340, date: "11:50" },
    { corr: 2.400, date: "12:00" },
    { corr: 2.340, date: "12:10" },
    { corr: 2.500, date: "12:20" },
    { corr: 2.480, date: "12:30" },
    { corr: 2.600, date: "12:40" },
    { corr: 2.900, date: "12:50" },
  ];

  const corrChartRef = useRef(null);
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

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

  const resize = useResizeObserver(corrChartRef);

  useEffect(() => {
    if (!resize || !data) {
      return;
    }
    //초기 셋팅
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = resize.width - (margin.left + margin.right);
    const height = 545 - (margin.top + margin.bottom);
    const xTickCount = 12;
    const yTickCount = 7;
    const xTickBlankCount = 0;
    const minCorr = d3.min(data.map((d) => d.corr)) - 1;
    const maxCorr = d3.max(data.map((d) => d.corr)) + 1;
    const tooltip = d3.select(tooltipRef.current);
    const names = ["Correlation"]

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
      .selectAll(".x-axis")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call(xAxis)

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
      .selectAll(".x-axis-line")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 1)
      .call(xAxisLine)

    //y축 right + line
    const yScale = d3
      .scaleLinear()
      .domain([minCorr, maxCorr])
      .range([height, 0]);
    const yAxis = d3
      .axisLeft(yScale)
      .tickValues(setTickCount(minCorr, maxCorr, yTickCount))
      .tickSize(10);
    svg
      .selectAll(".y-axis")
      .call(yAxis)
      .style(
        "transform",
        `translate(${margin.left}px, ${margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call((g) =>
        g
          .selectAll(".tick line")
          .style("transform", "translateX(0px)")
          .attr("x2", width)
          .style("stroke-opacity", 1),
      )
    //data line
    const dataLine = d3
      .line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
    svg
      .selectAll(".dataLine")
      .data([data.map((data) => data["corr"])])
      .join("path")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("class", "dataLine")
      .attr("d", dataLine)
      .attr("fill", "none")
      .attr("stroke-width", "4px"); // 선 두께 설정

    const mouseover = (e, d) => {
      tooltip.transition().duration(200).style("visibility", "visible");
      // circle.style("background-color", "black");
      d3.select(e.target).transition()
        .duration('100')
        .attr("r", 7)
        .attr("fill", "#f6a64b")
        .style("opacity", 1);
      tooltip
        .html(`${names[0]} : ${d.corr}`,)
        .style(
          "transform",
          `translate(${e.offsetX + 15}px, ${e.offsetY - 20}px)`,
        );
    };
    const mouseleave = (e, d) => {
      tooltip.transition().duration(200).style("visibility", "hidden");
      d3.select(e.target).transition()
        .duration('100')
        .attr("r", 4)
        .style("opacity", 0)
    };  

    svg
      .selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", (d, i) => xScale(i))
      .attr("cy", (d) => yScale(d.corr))
      .attr("r", 5)
      .attr("fill", "#f6a64b")
      .style(
        "transform",
        `translate(${margin.left}px, ${margin.top}px)`,
      )
      .style("opacity", 0)
      .on("mouseover", mouseover)
      .on("mouseleave", mouseleave);


  }, [data, resize]);

  return (
    <CorrChartWrapper ref={corrChartRef}>
      <TableHeader>
        <thead>
          <Row className="table__header">
            <Cell colSpan={3}>OPTIONS</Cell>
          </Row>
        </thead>
        <tbody>
          <Row className="table__header__sub">
            <Cell>
              <input type="date" name="date" />~
              <input type="date" name="date" />
            </Cell>
            <Cell><Search /></Cell>
            <Cell><Search /></Cell>
          </Row>
          <Row className="table__body">
            <Cell colSpan={3}>
              <h5>{"SPY"} (X) vs {"AAPL"} (Y)</h5>
                <div ref={tooltipRef} className="tooltip" />
                <svg ref={svgRef}>
                  <g className="x-axis" />
                  <g className="y-axis" />
                  <g className="x-axis-line" />
                </svg>
            </Cell>
          </Row>
        </tbody>
      </TableHeader>
    </CorrChartWrapper>
  );
};

export default CorrelationChart;