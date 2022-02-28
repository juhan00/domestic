import React, { useRef, useEffect } from "react";
import { select, sum, treemap, hierarchy } from "d3";
import randomColor from "randomcolor";
import isBright from "@utils/isBright";

const CategoryChart = ({
  data,
  font = "Impact",
  width = 500,
  height = 300,
  rotate = 1,
  interval = 3,
  darkTextColor = "black",
  brightTextColor = "white",
}) => {
  const categoryChartRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const wrapper = select(categoryChartRef.current);
    const svg = select(svgRef.current);

    const entireValue = sum(data, (data) => data.value);

    data.map((ele) => {
      ele.percentage = ((ele.value * 100) / entireValue).toFixed(2);
      ele.color = randomColor();
    });

    const createTree = treemap().size([width, height]);

    const mapData = hierarchy(data, (node) => node).sum((node) => node.value);

    const tree = createTree(mapData);

    const chart = svg.attr("width", width).attr("height", height);

    const block = chart
      .selectAll("g")
      .data(tree.leaves())
      .enter()
      .append("g")
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
  }, []);
  return (
    <div ref={categoryChartRef}>
      <svg ref={svgRef} />
    </div>
  );
};

export default CategoryChart;
