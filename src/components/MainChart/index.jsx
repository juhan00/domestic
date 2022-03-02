import React from "react";
import { ChartWrapper } from "../CategoryChart/style";

const MainChart = ({
  data,
  font = "Impact",
  padding = 1,
  rotate = 90,
  width = 500,
  height = 300,
}) => {
  const mainChartRef = useRef(null);
  const svgRef = useRef(null);
  return (
    <ChartWrapper ref={mainChartRef}>
      <svg ref={svgRef} />
    </ChartWrapper>
  );
};
