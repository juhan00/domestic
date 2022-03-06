import React, { useCallback, useEffect, useRef, useState } from "react";
import { StockIndex } from "./style";
import * as d3 from "d3";
import useResizeObserver from "@utils/useResizeObserver";

// function useSvgResize(ref, padding) {
//   const [state, setState] = useState();
//   useEffect(() => {
//     const getSize = debounce(() => {
//       if (!ref || !ref.current) {
//         return;
//       }

//       const width = ref.current.offsetWidth - padding;
//       const height = ref.current.offsetHeight;
//       setState({
//         width,
//         height,
//       });
//     }, 0);

//     window.addEventListener("resize", getSize);
//     getSize();
//     return () => window.removeEventListener("resize", getSize);
//   }, [ref]);

//   return state;
// }

// export const useResizeObserver = (ref) => {
//   const [dimensions, setDimensions] = useState(null);
//   useEffect(() => {
//     const observeTarget = ref.current;
//     const resizeObserver = new ResizeObserver((entries) => {
//       entries.forEach((entry) => {
//         setDimensions(entry.contentRect);
//       });
//     });
//     resizeObserver.observe(observeTarget);
//     return () => {
//       resizeObserver.unobserve(observeTarget);
//     };
//   }, [ref]);
//   return dimensions;
// };

const data = [
  { stock: 2900, date: "10:00" },
  { stock: 2520, date: "10:10" },
  { stock: 2530, date: "10:20" },
  { stock: 2400, date: "10:30" },
  { stock: 2500, date: "10:40" },
  { stock: 2650, date: "10:50" },
  { stock: 2700, date: "11:00" },
  { stock: 2500, date: "11:10" },
  { stock: 2403, date: "11:20" },
  { stock: 2300, date: "11:30" },
  { stock: 2230, date: "11:40" },
  { stock: 2330, date: "11:50" },
  { stock: 2400, date: "12:00" },
  { stock: 2100, date: "12:10" },
  { stock: 2540, date: "12:20" },
  { stock: 2400, date: "12:30" },
  { stock: 2600, date: "12:40" },
  { stock: 2400, date: "12:50" },
  { stock: 2300, date: "10:00" },
  { stock: 2405, date: "10:10" },
  { stock: 2500, date: "10:20" },
  { stock: 2400, date: "10:30" },
  { stock: 2500, date: "10:40" },
  { stock: 2650, date: "10:50" },
  { stock: 2700, date: "11:00" },
  { stock: 2500, date: "11:10" },
  { stock: 2400, date: "11:20" },
  { stock: 2300, date: "11:30" },
  { stock: 2200, date: "11:40" },
  { stock: 2340, date: "11:50" },
  { stock: 2400, date: "12:00" },
  { stock: 2340, date: "12:10" },
  { stock: 2500, date: "12:20" },
  { stock: 2480, date: "12:30" },
  { stock: 2600, date: "12:40" },
  { stock: 2900, date: "12:50" },
];

const MainStockIndex = ({ name }) => {
  const svgRef = useRef(null);
  const stockIndexRef = useRef(null);

  //tick 분할 함수
  const setTickCount = useCallback((min, max, count, type) => {
    const interval = (max - min) / count;
    if (type === "center") {
      const tick = [interval];
      let tickValue = interval;

      for (let i = 2; i < count; i++) {
        tick.push(tickValue + interval);
        tickValue += interval;
      }
      return tick;
    } else {
      const tick = [min];
      let tickValue = min;

      for (let i = 0; i < count; i++) {
        tick.push(tickValue + interval);
        tickValue += interval;
      }

      return tick;
    }
  }, []);

  // const resize = useSvgResize(stockIndexRef, 156);
  const resize = useResizeObserver(stockIndexRef);

  useEffect(() => {
    if (!resize || !data) {
      return;
    }

    //초기 셋팅
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = resize.width - (margin.left + margin.right);
    const height = 100;
    const xTickCount = 4;
    const yTickCount = 4;
    const xTickBlankCount = 2;
    const eveStock = 2700;
    const minStock = d3.min(data.map((d) => d.stock)) - 300;
    const maxStock = d3.max(data.map((d) => d.stock)) + 300;

    //svg 셋팅
    const svg = d3.select(svgRef.current);

    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    //x축
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length + xTickBlankCount])
      .range([0, width]);
    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(setTickCount(0, data.length, xTickCount, "center"))
      .tickFormat((index) => data[index]["date"]);
    svg
      .selectAll(".x-axis")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call(xAxis);

    //x축 line
    const xScaleLine = d3
      .scaleLinear()
      .domain([0, data.length + xTickBlankCount])
      .range([0, width]);
    const xAxisLine = d3
      .axisBottom(xScaleLine)
      .tickValues(setTickCount(0, data.length, xTickCount * 2, "center"))
      .tickFormat("");
    svg
      .selectAll(".x-axis-line")
      .style(
        "transform",
        `translate(${margin.left}px, ${height + margin.top}px)`,
      )
      .style("stroke-opacity", 0)
      .call(xAxisLine)
      .call((g) =>
        g
          .selectAll(".tick line")
          .style("transform", `translateY(-${height}px)`)
          .attr("y2", height)
          .style("stroke-opacity", 1),
      );

    //y축 left + line
    const yScale = d3
      .scaleLinear()
      .domain([minStock, maxStock])
      .range([height, 0]);
    const yAxis = d3
      .axisLeft(yScale)
      .tickValues(setTickCount(minStock, maxStock, yTickCount));
    svg
      .selectAll(".y-axis")
      .call(yAxis)
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .style("stroke-opacity", 0)
      .call((g) =>
        g
          .selectAll(".tick line")
          .style("transform", "translateX(0px)")
          .attr("x2", width)
          .style("stroke-opacity", 1),
      );

    //y축 right
    const yAxisRight = d3
      .axisRight(yScale)
      .tickValues(setTickCount(minStock, maxStock, yTickCount));
    svg
      .selectAll(".y-axis-right")
      .call(yAxisRight)
      .style(
        "transform",
        `translate(${width + margin.left}px, ${margin.top}px)`,
      )
      .style("stroke-opacity", 0);

    //x축 today line
    const xScaleToday = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const todayLine = d3
      .line()
      .x((value, index) => xScaleToday(index))
      .y((value) => yScale(value));
    svg
      .selectAll(".todayLine")
      .data([data.map((data) => eveStock)])
      .join("path")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("class", "todayLine")
      .attr("d", todayLine)
      .style("stroke-opacity", 1);

    //data line
    const dataLine = d3
      .line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(d3.curveCardinal);
    svg
      .selectAll(".dataLine")
      .data([data.map((data) => data["stock"])])
      .join("path")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("class", "dataLine")
      .attr("d", dataLine)
      .attr("fill", "none");
    svg
      .selectAll(".dataLineBlur")
      .data([data.map((data) => data["stock"])])
      .join("path")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("class", "dataLineBlur")
      .attr("d", dataLine)
      .attr("fill", "none");
  }, [data, resize]);

  console.log(resize && resize.width);

  return (
    <StockIndex>
      <div className="topInfo">
        <h2>{name}</h2>
        <div className="info">
          <div className="index">
            2,718.74 <span className="vs">▲11.95</span>
            <span className="rate">+0.44%</span>
          </div>
          <div className="date">2022.02.23 14:15 장중</div>
        </div>
      </div>
      <div className="stockIndexRef" ref={stockIndexRef}>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
          <g className="y-axis-right" />
          <g className="x-axis-line" />
        </svg>
      </div>
    </StockIndex>
  );
};

export default MainStockIndex;
