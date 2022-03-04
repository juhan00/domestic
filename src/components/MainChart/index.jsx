import {
  select,
  scaleTime,
  extent,
  axisRight,
  format,
  scaleLinear,
  min,
  max,
  axisBottom,
  timeFormat,
  zoom,
} from "d3";
import React, { useEffect, useRef, useState } from "react";
import { ChartWrapper } from "../CategoryChart/style";

const data = [
  {
    date: new Date("2021-11-29"),
    volume: 50000,
    start: 10000,
    end: 12000,
    high: 13000,
    low: 7000,
  },
  {
    date: new Date("2021-11-30"),
    volume: 50000,
    start: 12000,
    end: 12500,
    high: 12600,
    low: 11000,
  },
  {
    date: new Date("2021-12-01"),
    volume: 50000,
    start: 12500,
    end: 12000,
    high: 12600,
    low: 12000,
  },
  {
    date: new Date("2021-12-02"),
    volume: 50000,
    start: 12000,
    end: 11000,
    high: 12000,
    low: 11000,
  },
  {
    date: new Date("2021-12-03"),
    volume: 50000,
    start: 11000,
    end: 11300,
    high: 11500,
    low: 11000,
  },
  {
    date: new Date("2021-12-04"),
    volume: 50000,
    start: 10000,
    end: 12000,
    high: 13000,
    low: 7000,
  },
  {
    date: new Date("2021-12-05"),
    volume: 50000,
    start: 12000,
    end: 12000,
    high: 12500,
    low: 11500,
  },
];

const MainChart = ({
  font = "Impact",
  rotate = 90,
  width = 500,
  height = 300,
  barColor = "#5FB6AD",
  marginTop = 40,
  marginBottom = 40,
  marginLeft = 40,
  marginRight = 40,
  padding = 30,
}) => {
  const mainChartRef = useRef(null);
  const svgRef = useRef(null);
  const [currentZoomState, setCurrentZoomState] = useState();

  useEffect(() => {
    const mainChartWrapper = select(mainChartRef.current);
    const svg = select(svgRef.current);

    const maxValue = max(data, (data) => data.high);
    const minValue = min(data, (data) => data.low);

    const xScale = scaleTime()
      .domain(extent(data, (data) => data.date))
      .range([marginLeft + padding, width - marginRight]);

    const yScale = scaleLinear()
      .domain([minValue, maxValue])
      .range([height - marginBottom, marginTop]);

    if (currentZoomState) {
      const newXScale = currentZoomState.rescaleX(xScale);
      xScale.domain(newXScale.domain());
      const newYScale = currentZoomState.rescaleY(yScale);
      yScale.domain(newYScale.domain());
    }

    const xAxis = axisBottom(xScale).tickFormat(timeFormat("%m-%d"));

    const yLeftAxis = axisRight(yScale)
      .ticks(data.length)
      .tickFormat(format("d"));

    const yRightAxis = axisRight(yScale)
      .ticks(data.length)
      .tickFormat(format("d"));

    svg
      .select(".x-axis")
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translateY(${height - marginBottom}px)`);

    svg
      .select(".y-left-axis")
      .call(yLeftAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll("line")
          .attr("x1", marginLeft)
          .attr("x2", width - marginRight - marginLeft)
          .style("stroke", "#ddd"),
      )
      .style("transform", `translateX(${marginLeft}px)`);

    svg
      .select(".y-right-axis")
      .call(yRightAxis)
      .style("transform", `translateX(${width - marginLeft}px)`)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove());

    const zoomBehavior = zoom()
      .scaleExtent([1, 3])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", (event) => {
        const zoomState = event.transform;
        setCurrentZoomState(zoomState);
      });
    svg.call(zoomBehavior);

    // svg
    //   .selectAll(".bar")
    //   .data(data)
    //   .join("rect")
    //   .classed("bar", true)
    //   .attr("x", (data, index) => xScale(data.date))
    //   .attr("y", (data) => yScale(data.start))
    //   .attr("height", (data) =>
    //     data.end >= data.start
    //       ? yScale(data.start) - yScale(data.end)
    //       : yScale(data.end) - yScale(data.start),
    //   )
    //   .attr("width", 20)
    //   .attr("fill", "black");
  }, [currentZoomState, data]);

  return (
    <ChartWrapper ref={mainChartRef}>
      <svg ref={svgRef}>
        <g className="y-left-axis" />
        <g className="y-right-axis" />
        <g className="x-axis" />
        <g className="volume" />
      </svg>
    </ChartWrapper>
  );
};

export default MainChart;
