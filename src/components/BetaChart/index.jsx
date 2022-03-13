import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChartWrapper, InputWrapper, Header, YLabel } from "./style";
import Tooltip from "./Tooltip";
import Search from "@components/Search";
import * as d3 from "d3";
import useResizeObserver from "@utils/useResizeObserver";

const BetaChart = ({ data, names, beta }) => {
  const betaChartRef = useRef(null);
  const svgRef = useRef(null);
  const resizeWidth = useResizeObserver(betaChartRef);

  const [hoveredValue, setHoveredValue] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event) => {
      const { offsetX, offsetY } = event;
      setMousePosition({ x: offsetX, y: offsetY });
    },
    [setMousePosition],
  );

  // initial setting
  useEffect(() => {
    const betaChartWrapper = d3.select(betaChartRef.current);
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(svgRef.current);

    svg.selectAll(".dots").remove();

    if (!resizeWidth || !data) {
      return;
    }
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = resizeWidth.width - (margin.left + margin.right);
    const height = 450;
    const xTickCount = 12;
    const yTickCount = 7;
    const xTickBlankCount = 0;
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
        },
      ],
      [],
    );

    const xScale = d3
      .scaleLinear()
      .domain([adjMinX, adjMaxX])
      .range([margin.left, width - margin.right])
      .nice();
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .call((g) => g.selectAll(".tick line").remove());

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
      .call((g) => g.selectAll(".tick line").remove());

    // tooltip
    tooltip
      .append("div")
      .style("visibility", "hidden")
      .attr("class", "tooltip")
      .style("background-color", "#facdcd")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "10px");

    const mousemove = (e, d) => {
      tooltip
        .html(
          `${d.basDt}<br/>${names[0]} : ${d.xPrice}<br/>${names[1]} : ${d.yPrice}`,
        )
        .style(
          "transform",
          `translate(${e.offsetX - 30}px, ${e.offsetY - 20}px)`,
        );
    };

    // line
    svg
      .selectAll(".line")
      .data(betaArray)
      .join((enter) => {
        const line = enter.append("g").classed("line", true);

        line
          .append("path")
          .style("fill", "none")
          .style("stroke-width", 4)
          .attr("stroke", "#286F6C")
          .attr("d", (d) =>
            d3
              .line()
              .x((d) => xScale(d.x))
              .y((d) => yScale(d.y)),
          );
      });
    // svg
    //   .append("path")
    //   .datum(betaArray)
    //   .attr("fill", "none")
    //   .attr("stroke", "#69b3a2")
    //   .attr("stroke-width", 1.5)
    //   .attr(
    //     "d",
    //     d3
    //       .line()
    //       .x(function (d) {
    //         return xScale(d.x);
    //       })
    //       .y(function (d) {
    //         return yScale(d.y);
    //       }),
    //   );

    // dots
    svg
      .selectAll(".dot")
      .data(data)
      .join((enter) => {
        const dots = enter.append("g").classed("dots", true);

        dots
          .append("circle")
          .attr("cx", (d) => xScale(d.xPrice))
          .attr("cy", (d) => yScale(d.yPrice))
          .attr("r", 5)
          .style("fill", "#FDC055")
          .on("mouseover", (e, d) => {
            setHoveredValue(d);
            d3.select(e.target)
              .style("stroke", "#FDC055")
              .style("stroke-opacity", 0.5)
              .style("stroke-width", 10);
          })
          .on("mousemove", handleMouseMove)
          .on("mouseleave", (e) => {
            setHoveredValue(null);
            d3.select(e.target).style("stroke", null);
          });
      });
  }, [data, resizeWidth]);

  return (
    <ChartWrapper>
      <Header>
        <InputWrapper>
          <input type="date" name="date" />
          ~
          <input type="date" name="date" />
        </InputWrapper>
        <Search />
        <YLabel>
          TICKER Y-AXIS<span>{names[1]}</span>
        </YLabel>
      </Header>

      <h5>
        {names[0]} (X) vs {names[1]} (Y)
      </h5>
      <div className="betaChartRef" ref={betaChartRef}>
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

export default BetaChart;
