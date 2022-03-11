import {
  select,
  scaleTime,
  axisRight,
  pointer,
  scaleBand,
  line,
  bisector,
  scaleLinear,
  min,
  curveBasis,
  max,
  axisBottom,
  timeFormat,
  zoom,
} from "d3";
import React, { useEffect, useRef, useState } from "react";
import calculateMovingAverageLine from "@utils/calculateMovingAverageLine";
import useResizeObserver from "@utils/useResizeObserver";
import { MainChartWrapper } from "./style";
import useDebounce from "@utils/useDebounce";

function dataGenerator() {
  let start = Math.random() * 500 + 9000;
  let end = Math.random() > 0.5 ? start - 200 : start + 200;
  let volume = Math.random() * 50000;

  return {
    start,
    end,
    volume,
    high: start > end ? start + Math.random() * 200 : end + Math.random() * 200,
    low: start < end ? start - Math.random() * 200 : end - Math.random() * 200,
  };
}

let date = new Date("2021-11-29");
let data = [];
for (let i = 0; i < 90; i++) {
  data[i] = dataGenerator();
  data[i].date = date;
  date = new Date(date.setDate(date.getDate() + 1));
}

const MainChart = ({
  marginTop = 40,
  marginBottom = 40,
  marginLeft = 40,
  marginRight = 40,
  focusCircleColor = "black",
  focusLineColor = "#696969",
  focusLineWidth = 1.5,
  overlayColor = "#fff",
  bandPadding = 0.3,
  movingAverageLines = [
    { value: 5, color: "green" },
    { value: 20, color: "#F5746B" },
    { value: 60, color: "yellow" },
    { value: 120, color: "#bdb1e1" },
  ],
}) => {
  const svgRef = useRef(null);
  const mainChartRef = useRef(null);
  const dimensions = useResizeObserver(mainChartRef);
  const [zoomState, setZoomState] = useState();
  const resize = useDebounce(dimensions, 200);
  useEffect(() => {
    const svg = select(svgRef.current);
    svg.selectAll(".candlestick").remove();
    svg.selectAll("#clip").remove();

    // 이전 데이터와 비교하여 달라질 경우에만 계산하기
    // data를 어떻게 관리할지 고민이됨
    //const dataDiff= JSON.stringify(data)!==JSON.stringify(prevData)

    if (!resize) return;

    const { width, height } = resize;
    svg.attr("width", width).attr("height", height);

    movingAverageLines.forEach((ele) => {
      svg.selectAll(`.moving-average-${ele.value}`).remove();
    });

    const xMin = min(data, (data) => data.date);
    const xMax = max(data, (data) => data.date);
    const yMin = min(data, (data) => data.low);
    const yMax = max(data, (data) => data.high);

    const xScale = scaleTime()
      .domain([xMin, xMax])
      .range([marginRight, width - marginLeft]);

    const xBandScale = scaleBand()
      .domain(data.map((data, idx) => idx))
      .range([marginRight, width - marginLeft])
      .padding(bandPadding);

    const yScale = scaleLinear()
      .domain([yMin - 5, yMax + 5])
      .range([height - marginBottom, marginTop]);

    if (zoomState) {
      const newXScale = zoomState.rescaleX(xScale);
      let [newStart, newEnd] = newXScale.domain();
      newStart = newStart < xMin ? xMin : newStart;
      newEnd = newEnd > xMax ? xMax : newEnd;
      xScale.domain([newStart, newEnd]);
      xBandScale.range(
        [marginLeft, width - marginRight].map((data) => zoomState.applyX(data)),
      );
    }

    movingAverageLines.forEach((ele) => {
      calculateMovingAverageLine(data, ele.value);
    });

    movingAverageLines.forEach((ele) => {
      const movingAverageLineGenerator = line()
        .x((data) => xScale(data.date))
        .y((data) => yScale(data[`average${ele.value}`]))
        .curve(curveBasis);

      const movingAverageLine = svg
        .selectAll(`.moving-average-${ele.value}`)
        .data([data]);

      movingAverageLine.join((enter) =>
        enter
          .append("path")
          .attr("clip-path", "url(#clip)")
          .style("fill", "none")
          .classed(`moving-average-${ele.value}`, true)
          .attr("stroke", ele.color)
          .attr("stroke-width", 1.5)
          .attr("d", movingAverageLineGenerator),
      );
    });

    svg.style("display", "block");

    const xAxis = axisBottom(xScale).tickFormat(timeFormat("%Y-%m-%d"));
    const yAxis = axisRight(yScale);

    svg
      .append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width - marginLeft)
      .attr("height", height);

    svg
      .select(".x-axis")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis);

    svg
      .select(".y-axis")
      .attr("transform", `translate(${width - marginLeft},0)`)
      .call(yAxis);

    const overlay = svg
      .selectAll(".overlay")
      .attr("width", width - marginLeft)
      .attr("height", height - marginBottom)
      .attr("fill", overlayColor)
      .style("pointer-events", "all");

    const focus = svg.selectAll(".focus").style("display", "none");

    focus
      .selectAll(".focus-circle")
      .attr("r", 5)
      .attr("fill", focusCircleColor);

    focus
      .selectAll("line")
      .style("fill", "none")
      .style("stroke", focusLineColor)
      .style("stroke-width", `${focusLineWidth}px`)
      .style("stroke-dasharray", "3 3");

    overlay.exit().remove();
    overlay.enter().append("g").classed("focus", true).style("display", "none");

    function generateCrosshair(e) {
      const focus = select(".focus");
      const bisectDate = bisector((data) => data.date).left;
      // 마우스 위치(width 기반)으로 날짜를 얻음
      const curPositionDate = xScale.invert(pointer(e, e.target)[0]);
      // 현재 마우스로 데이터를 나눔
      const i = bisectDate(data, curPositionDate, 1);
      const startDate = data[i - 1];
      const endDate = data[i];
      // 더 가까운 값을 기준으로 하게 함
      const currentPoint =
        curPositionDate - startDate.date > endDate.date - curPositionDate
          ? endDate
          : startDate;
      focus.attr(
        "transform",
        `translate(${
          xScale(currentPoint.date) - xBandScale.bandwidth() / 2
        }, ${yScale(currentPoint.end)})`,
      );

      focus
        .select("line.x-line")
        .attr("x1", 0)
        .attr("x2", width - marginLeft - xScale(currentPoint.date))
        .attr("y1", 0)
        .attr("y2", 0);

      focus
        .select("line.y-line")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", 0)
        .attr("y2", height - marginBottom - yScale(currentPoint.end));
    }

    overlay
      .on("mouseover", () => focus.style("display", null))
      .on("mouseout", () => focus.style("display", "none"))
      .on("mousemove", function (e) {
        generateCrosshair(e);
      });

    //Zoom

    const zoomBehavior = zoom()
      .scaleExtent([1, 3])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", function (e) {
        const newZoomState = e.transform;
        setZoomState(newZoomState);
      });

    svg.call(zoomBehavior);

    // price
    const priceLineGenerator = line()
      .x((data) => xScale(data.date))
      .y((data) => yScale(data.end));

    const priceLine = svg.selectAll(".price").data([data]);

    priceLine
      .join("path")
      .attr("clip-path", "url(#clip)")
      .style("fill", "none")
      .classed("price", true)
      .attr("stroke", "steelblue")
      .attr("stroke-width", "1.5")
      .attr("d", priceLineGenerator);

    const candleStickLineGenerator = line()
      .x((data) => data.x)
      .y((data) => data.y);

    const candleStick = svg
      .select("#candlesticks")
      .attr("clip-path", "url(#clip)")
      .selectAll(".candlestick")
      .data(data);

    candleStick.join((enter) => {
      const candleSticksEnter = enter
        .append("g")
        .classed("candlestick", true)
        .append("g")
        .classed("bars", true);

      candleSticksEnter
        .append("rect")
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("x", (data) => xScale(data.date) - xBandScale.bandwidth())
        .attr("y", (data) => {
          // 시가 위치에 오도록
          if (data.end > data.start) return yScale(data.end);
          else if (data.end === data.start) return yScale(data.end) - 1;
          else return yScale(data.start);
        })
        .attr("width", (data) => xBandScale.bandwidth())
        .attr("height", (data) => {
          if (data.end > data.start)
            return yScale(data.start) - yScale(data.end);
          else if (data.end === data.start) return 3;
          else return yScale(data.end) - yScale(data.start);
        })
        .attr("fill", (d) => {
          if (d.end >= d.start) {
            return "#F5746B";
          } else {
            return "blue";
          }
        });

      candleSticksEnter
        .append("path")
        .attr("clip-path", "url(#clip)")
        .classed("high-row", true)
        .attr("d", (data) => {
          return candleStickLineGenerator([
            {
              x: xScale(data.date) - xBandScale.bandwidth() / 2,
              y: yScale(data.high),
            },
            {
              x: xScale(data.date) - xBandScale.bandwidth() / 2,
              y: yScale(data.low),
            },
          ]);
        })
        .attr("stroke", (d) => {
          if (d.end >= d.start) {
            return "#F5746B";
          } else {
            return "#065398";
          }
        });
    });
  }, [data, zoomState, resize]);

  return (
    <MainChartWrapper ref={mainChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
        <rect className="overlay" />
        <g id="volume" />
        <g id="candlesticks" />
        <g className="focus">
          <circle className="focus-circle" />
          <line className="x-line" />
          <line className="y-line" />
        </g>
      </svg>
    </MainChartWrapper>
  );
};

export default MainChart;
