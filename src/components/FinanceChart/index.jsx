import { select, max, scaleBand, scaleLinear } from "d3";
import React, { useEffect, useRef } from "react";
import { ChartWrapper } from "@components/CategoryChart/style";
import useResizeObserver from "@utils/useResizeObserver";
import { extent } from "d3";

const data = { date: "2021-12", values: [81200, 30000, 20000] };
const FinanceChart = (
  barWidth = 20,
  width = 500,
  height = 300,
  barSpace = 50,
  marginTop = 40,
  marginBottom = 40,
  marginLeft = 40,
  marginRight = 40,
  padding = 40,
) => {
  const financeChartRef = useRef();
  const svgRef = useRef(null);
  const dimensions = useResizeObserver(financeChartRef);
  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const { width, height } = dimensions;
    svg.attr("width", width).attr("height", height);

    const [minValue, maxValue] = extent(data.values, (value) => value);

    const isUnderZero = minValue < 0 ? true : false;

    const xScale = scaleLinear()
      .domain([0, maxValue])
      .range([marginLeft, width - marginLeft]);

    // const yScale = scaleBand()
    //   .domain(data.values.map((value, idx) => idx))
    //   .range([height - marginBottom, marginTop])
    //   .padding(0.5);
  }, [data, dimensions]);

  return (
    <ChartWrapper ref={financeChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </ChartWrapper>
  );
};

export default FinanceChart;
