import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChartWrapper, Header, Row, Cell, YLabel } from "./style";
import Tooltip from "@components/BetaChart/Tooltip";
import Search from "@components/Search"
import * as d3 from "d3";
import useResizeObserver from "@utils/useResizeObserver";

const CorrelationChart = ({ data, names, beta }) => {
  const [hoveredValue, setHoveredValue] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const corrChartRef = useRef(null);
  const svgRef = useRef(null);
  const resize = useResizeObserver(corrChartRef);

  
  const handleMouseMove = useCallback(
    (event) => {
      const { offsetX, offsetY } = event;
      setMousePosition({ x: offsetX, y: offsetY });
    },
    [setMousePosition]
  );

  //초기 셋팅
  useEffect(() => {
    const corrChartWrapper = d3.select(corrChartRef.current);
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(svgRef.current);

    svg.selectAll(".dots").remove();
    svg.selectAll(".line").remove();
    svg.selectAll(".rect").remove();
    svg.selectAll(".tick line").remove();
    svg.selectAll(".tick").remove();

    if (!resize || !data) {
      return;
    }

    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = resize.width;
    const height = 480;

    const minCorr = d3.min(data.map((d) => d.x)) - 1;
    const maxCorr = d3.max(data.map((d) => d.x)) + 1;

    const maxValueX = d3.max(data, (data) => data.xPrice);
    const adjMaxX = maxValueX + Math.abs(maxValueX) * 0.05;
    const minValueX = d3.min(data, (data) => data.xPrice);
    const adjMinX = minValueX - Math.abs(minValueX) * 0.05;
    const maxValueY = d3.max(data, (data) => data.yPrice);
    const adjMaxY = maxValueY + Math.abs(maxValueY) * 0.05;
    const minValueY = d3.min(data, (data) => data.yPrice);
    const adjMinY = minValueY - Math.abs(minValueY) * 0.05;

    const tempArray = Array.from(
      { length: 100 },
      (_, i) => adjMinX + ((adjMaxX - adjMinX) / 100) * i,
    );
    const betaArray = tempArray.reduce(
      (a, b) => [
        ...a,
        {
          x: b,
          y: b * beta,
          //d3.mean(data, (data) => data.yPrice),
        },
      ],
      [],
    );

    const xScale = d3
      .scaleLinear()
      .domain([minValueX, maxValueX])
      .range([margin.left, width - margin.right])
      .nice();
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .call((g) => g.select(".domain").remove());

    const yScale = d3
      .scaleLinear()
      .domain([minValueY, maxValueY])
      .range([height, margin.bottom])
      .nice();
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("x2", width - margin.right - margin.left)
          .style("stroke-opacity", 1),
      );

    // 선
    svg
    .selectAll(".line")
    .data([betaArray])
    .join((enter) => {
      const line = enter.append("g").classed("line", true);

      line
        .append("path")
        .style("fill", "none")
        .style("stroke-width", 4)
        .attr("stroke", "#5FB6AD")
        .attr(
          "d",
          d3
            .line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y)),
        );
    });

    svg
    .selectAll(".rect")
    .data(betaArray)
    .join((enter) => {
      const rect = enter.append("g").classed("rect", true);

      rect
        .append("rect")
        .attr("width", 2)
        .attr("height", 2)
        .style("fill", "#FDC055")
        .style("fill-opacity", 0)
        .style("stroke", "#5FB6AD")
        .style("stroke-opacity", 0)
        .style("stroke-width", 5)
        .attr(
          "transform",
          (d, i) => `translate(${xScale(d.x)}, ${yScale(d.y)}) rotate(-45)`,
        )
        .on("mouseover", (e, d) => {
          setHoveredValue(d);
          d3.select(e.target)
            .attr("width", 10)
            .attr("height", 10)
            .style("stroke", "#FDC055")
            .style("fill-opacity", 1)
            .style("stroke-opacity", 0.5)
            .style("stroke-width", 10)
            .transition('corners')
            .duration(0)
            .attr("rx", 5)
            .attr("ry", 5)
            .attr(
              "transform",
              (d, i) => `translate(${xScale(d.x) - 4}, ${yScale(d.y) - 5})`,
            )
        })
        .on("mousemove", handleMouseMove)
        .on("mouseleave", (e) => {
          setHoveredValue(null);
          d3.select(e.target)
            .attr("width", 2)
            .attr("height", 2)
            .style("fill-opacity", 0)
            .style("stroke-opacity", 0)
            .style("stroke-width", 5)
        });
    });
  }, [data, resize]);

  return (
    <ChartWrapper>
      <Header>
        <span className="title">Corrlation</span>
        <Search />
        <YLabel>
          TICKER Y-AXIS<span>{names[1]}</span>
        </YLabel>
      </Header>
      <h5>
        {names[0]} (X) vs {names[1]} (Y)
      </h5>
      <div className="corrChartRef" ref={corrChartRef}>
        <Tooltip
          hoveredValue={hoveredValue}
          mousePosition={mousePosition}
          names={names}
        />
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>

    </ChartWrapper>
  );
};

export default CorrelationChart;