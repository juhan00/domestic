import React, { useRef, useEffect, useState } from "react";
import { ChartWrapper } from "./style";
import {
  axisBottom,
  axisLeft,
  extent,
  max,
  scaleLinear,
  scaleTime,
  select,
  line,
} from "d3";
import { reduce } from "d3";

const BetaChart = ({
  data,
  width = 1000,
  height = 480,
  marginTop = 20,
  marginBottom = 20,
  marginLeft = 80,
  marginRight = 110,
  padding = 40,
}) => {
  const [dataArray, setDataArray] = useState([]);
  const betaChartRef = useRef();
  const svgRef = useRef(null);

  useEffect(() => {
    const [xData, yData] = Object.entries(data);
    const newA = xData[1].reduce(
      (a, b, i) =>
        a.concat({
          basDt: xData[1][i]["basDt"],
          xPrice: xData[1][i]["price"],
          yPrice: yData[1][i]["price"],
        }),
      [],
    );
    setDataArray(newA);
  }, []);

  useEffect(() => {
    const betaChartWrapper = select(betaChartRef.current);
    const svg = select(svgRef.current);

    // const maxValueX = max(data.KOSPI, (data) => data.price);

    const xScale = scaleLinear().domain([0, 8000]).range([0, 1000]).nice();

    svg
      .append("g")
      .attr("transform", `translate(100,${height})`)
      .call(axisBottom(xScale));

    // const maxValueY = max(data.삼성전자, (data) => data.price);

    const yScale = scaleLinear().domain([0, 150]).range([400, 0]).nice();

    svg
      .append("g")
      .attr("transform", `translate(100, 80)`)
      .call(axisLeft(yScale));

    svg
      .append("g")
      .selectAll("dot")
      .data(dataArray)
      .join("circle")
      .attr("cx", (d) => xScale(d.xPrice))
      .attr("cy", (d) => yScale(d.yPrice))
      .attr("r", 5)
      .style("fill", "#f6a64b");
  }, [dataArray]);

  return (
    <ChartWrapper ref={betaChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </ChartWrapper>
  );
};

export default BetaChart;
