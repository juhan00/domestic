import React from "react";

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
    <div ref={mainChartRef}>
      <svg ref={svgRef} />
    </div>
  );
};
