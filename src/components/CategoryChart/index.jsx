import React, { useRef, useEffect } from "react";
import { select, sum, treemap, hierarchy } from "d3";
import randomColor from "randomcolor";
import isBright from "@utils/isBright";
import { ChartWrapper } from "./style";
import useResizeObserver from "@utils/useResizeObserver";

const CategoryChart = ({
  data,
  darkTextColor = "black",
  width = 500,
  height = 300,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  padding = 0,
  brightTextColor = "white",
}) => {
  const svgRef = useRef(null);
  const categoryChartRef = useRef();
  const dimensions = useResizeObserver(categoryChartRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const { width, height } = dimensions;
    svg.attr("width", width).attr("height", height);

    const entireValue = sum(data, (data) => data.value);
    if (!data[0].color) {
      data.map((ele) => {
        ele.percentage = ((ele.value * 100) / entireValue).toFixed(2);
        ele.color = randomColor();
      });
    }

    const createTree = treemap().size([
      width - marginLeft - marginRight,
      height - marginTop - marginBottom,
    ]);

    const mapData = hierarchy(data, (node) => node).sum((node) => node.value);

    const tree = createTree(mapData);

    const block = svg
      .selectAll(".block")
      .data(tree.leaves())
      .join("g")
      .classed("block", true)
      .attr("transform", (node) => `translate(${node["x0"]},${node["y0"]})`);

    block
      .append("rect")
      .attr("width", (node) => {
        return node["x1"] - node["x0"];
      })
      .attr("height", (node) => {
        return node["y1"] - node["y0"];
      })
      .attr("fill", (node) => node["data"]["color"]);

    block
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", (node) => {
        return isBright(node["data"]["color"]) ? "black" : "white";
      })
      .text((node) => node["data"]["percentage"] + "%")
      .attr("x", function () {
        const parentData = select(this.parentNode).datum();
        return (parentData.x1 - parentData.x0) / 2;
      })
      .attr("y", function () {
        const parentData = select(this.parentNode).datum();
        return (parentData.y1 - parentData.y0) / 2;
      });

    block
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", (node) => {
        return isBright(node["data"]["color"])
          ? darkTextColor
          : brightTextColor;
      })
      .text((node) => node["data"]["title"])
      .attr("x", function () {
        const parentData = select(this.parentNode).datum();
        return (parentData.x1 - parentData.x0) / 2;
      })
      .attr("y", function () {
        const parentData = select(this.parentNode).datum();
        return (parentData.y1 - parentData.y0) / 2 - 20;
      });
  }, [data, dimensions]);
  return (
    <ChartWrapper ref={categoryChartRef}>
      <svg ref={svgRef} />
    </ChartWrapper>
  );
};

export default CategoryChart;
