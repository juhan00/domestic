import React from "react";
import { ChartWrapper } from "../CategoryChart/style";

const EmotionChart = () => {
  return (
    <ChartWrapper ref={buzzChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </ChartWrapper>
  );
};

export default EmotionChart;
