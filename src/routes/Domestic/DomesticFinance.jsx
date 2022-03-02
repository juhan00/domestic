import React, { useEffect, useRef } from "react";
import randomColor from "randomcolor";
import axios from "redaxios";
import * as d3 from "d3";
import cloud from "d3-cloud";
import isBright from "@utils/isBright";
import KeywordChart from "@components/KeywordChart";
import CategoryChart from "@components/CategoryChart";
import PressChart from "@components/pressChart";
import BuzzChart from "@components/BuzzChart";

const DomesticStock = () => {
  const mainChartRef = useRef(null);

  const keywordData = useRef([
    { title: "제품", value: 500 },
    { title: "삼성", value: 700 },
    { title: "기업", value: 400 },
    { title: "lg", value: 300 },
    { title: "수수료", value: 340 },
    { title: "시장", value: 150 },
    { title: "가격", value: 130 },
    { title: "반도체", value: 360 },
    { title: "갤럭시", value: 800 },
    { title: "lg전자", value: 200 },
  ]);

  const categoryData = useRef([
    { title: "경제", value: 519 },
    { title: "세계", value: 123 },
    { title: "IT/인터넷/통신", value: 101 },
    { title: "생활", value: 91 },
    { title: "금융", value: 86 },
  ]);

  const pressData = useRef([
    {
      title: "팍스넷",
      value: 838,
    },
    {
      title: "아이뉴스24",
      value: 261,
    },
    {
      title: "이투데이",
      value: 256,
    },
    {
      title: "파이낸셜뉴스",
      value: 225,
    },
    {
      title: "매일경제",
      value: 170,
    },
  ]);

  // useEffect(async () => {
  //   async function requestData() {
  //     const endpoint =
  //       "http://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService";
  //     const method = "getStockPriceInfo";
  //     const itmsNm = "삼성전자";
  //     const serviceKey =
  //       "hQKKME4akBE9OmUjXJlrlUxwrGWTJopFgxOATt99kJMyESaNVkwYUsXHQaPRW5PmypTgQ5MmPL4p6of0bT9E%2Bw%3D%3D";
  //     const resultType = "json";
  //     const beginBasDt = "20220210";
  //     const endBasDt = "20220224";
  //     const data = await axios
  //       .get(
  //         `${endpoint}/${method}?itmsNm=${itmsNm}&serviceKey=${serviceKey}&resultType=${resultType}&beginBasDt=${beginBasDt}&endBasDt=${endBasDt}`,
  //       )
  //       .then((res) => res.data.response.body.items.item);
  //     return data;
  //   }

  //   const WIDTH = 500;
  //   const HEIGHT = 300;
  //   const PADDING = 1;
  //   const interval = 1;

  //   const data = await requestData();
  //   const mainChartWrapper = d3.select(mainChartRef.current);
  //   mainChartWrapper
  //     .append("svg")
  //     .style("overflow", "visible")
  //     .attr("width", WIDTH - 100)
  //     .attr("height", HEIGHT);

  //   const startDate = data[data.length - 1].basDt;
  //   const startYear = Number(startDate.substr(0, 4));
  //   const startMonth = Number(startDate.substr(4, 2));
  //   const startDay = Number(startDate.substr(6, 2));
  //   const endDate = data[0].basDt;
  //   const endYear = Number(endDate.substr(0, 4));
  //   const endMonth = Number(endDate.substr(4, 2));
  //   const endDay = Number(endDate.substr(6, 2));

  //   // month는 0(1월)부터 11(12월) 사이의 숫자여야 합니다.
  //   const xScale = d3
  //     .scaleTime()
  //     .domain([
  //       new Date(`${startYear}-${startMonth}-${startDay}`),
  //       new Date(`${endYear}-${endMonth}-${endDay}`),
  //     ])
  //     .range([0, WIDTH - 100]);

  //   const xAxis = d3
  //     .axisBottom(xScale)
  //     .ticks(d3.timeDay.every(interval))
  //     .tickFormat((d) => {
  //       return d3.timeFormat("%Y %m %d")(new Date(d));
  //     });

  //   let maxValue = data.reduce((a, b) => {
  //     return Math.max(a, Number(b.hipr));
  //   }, Number.MIN_SAFE_INTEGER);

  //   let minValue = data.reduce((a, b) => {
  //     return Math.min(a, Number(b.lopr));
  //   }, Number.MAX_SAFE_INTEGER);

  //   const yScale = d3
  //     .scaleLinear()
  //     .domain([minValue, maxValue])
  //     .range([HEIGHT - 100, 0])
  //     .nice();

  //   const yRightAxis = d3.axisRight(yScale).ticks(data.length);
  //   const yLeftAxis = d3.axisLeft(yScale).ticks(data.length);

  //   mainChartWrapper
  //     .select("svg")
  //     .append("g")
  //     .style("transform", `translateY(${HEIGHT - 100}px)`)
  //     .call(xAxis)
  //     .selectAll("text")
  //     .style("text-anchor", "end")
  //     .attr("dx", "-.8em")
  //     .attr("dy", ".15em")
  //     .attr("transform", function (d) {
  //       return "rotate(-90)";
  //     });

  //   mainChartWrapper
  //     .select("svg")
  //     .append("g")
  //     .style("transform", `translateX(${WIDTH - 100}px)`)
  //     .call(yRightAxis);

  //   mainChartWrapper.select("svg").append("g").call(yLeftAxis);

  //   mainChartWrapper
  //     .select("svg")
  //     .selectAll(".bar")
  //     .data(data)
  //     .join("rect")
  //     .attr("class", "bar")
  //     .style("transform", "scale(1,-1)")
  //     .attr("x", (value, index) => xScale(index))
  //     .attr("y", -150)
  //     .attr("width", "40px");
  // }, []);

  return (
    <div>
      <header>
        <h1>삼성전자</h1>
      </header>
      <main>
        <KeywordChart data={keywordData.current} />
        <div ref={mainChartRef} />
        <CategoryChart data={categoryData.current} />
        <PressChart data={pressData.current} />
        <BuzzChart />
      </main>
      <footer></footer>
    </div>
  );
};

export default DomesticStock;

// basDt	string
// YYYYMMDD
// 기준일자

// srtnCd	string
// 종목 코드보다 짧으면서 유일성이 보장되는 코드(6자리)

// isinCd	string
// 현선물 통합상품의 종목 코드(12자리)

// itmsNm	string
// 종목의 명칭

// mrktCtg	string
// 주식의 시장 구분 (KOSPI/KOSDAQ/KONEX 중 1)

// clpr	number
// 정규시장의 매매시간종료시까지 형성되는 최종가격

// vs	number
// 전일 대비 등락

// fltRt	number
// 전일 대비 등락에 따른 비율

// mkp	number
// 정규시장의 매매시간개시후 형성되는 최초가격

// hipr	number
// 하루 중 가격의 최고치

// lopr	number
// 하루 중 가격의 최저치

// trqu	number
// 체결수량의 누적 합계

// trPrc	number
// 거래건 별 체결가격 * 체결수량의 누적 합계

// lstgStCnt	number
// 종목의 상장주식수

// mrktTotAmt	number
// 종가 * 상장주식수

// https://stackoverflow.com/questions/22972669/nvd3-d3-js-date-format-returns-incorrect-month
