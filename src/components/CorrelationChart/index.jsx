import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChartWrapper, Header, Row, Cell, YLabel } from "./style";
import Tooltip from "@components/BetaChart/Tooltip";
import Search from "@components/Search";
import * as d3 from "d3";
import useResizeObserver from "@utils/useResizeObserver";

const CorrelationChart = ({ corr, names }) => {
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
    [setMousePosition],
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

    if (!resize || !corr) {
      return;
    }

    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = resize.width;
    const height = 480;

    const minCorr = d3.min(corr.map((d) => d.corr));
    const maxCorr = d3.max(corr.map((d) => d.corr));
    const adjMaxY = maxCorr + 0.05;
    const adjMinY = minCorr - 0.05;

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(corr, (data) => new Date(data["basDt"])))
      .range([margin.left, width - margin.right])
      .nice();
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(
        d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y-%m-%d")).ticks(5),
      )
      .call((g) => g.select(".domain").remove());

    const yScale = d3
      .scaleLinear()
      .domain([adjMinY, adjMaxY])
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
      .data([corr])
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
              .x((d) => xScale(new Date(d["basDt"])))
              .y((d) => yScale(d["corr"])),
          );
      });
  }, [corr, resize]);

  return (
    <ChartWrapper>
      <Header>
        <span className="title">Corrlation</span>
        <Search />
        <YLabel>
          TICKER Y-AXIS<span>{names[0]}</span>
        </YLabel>
      </Header>
      <h5>
        {names[1]} (X) vs {names[0]} (Y)
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
