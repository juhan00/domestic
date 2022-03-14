import React, { useState, useEffect } from "react";
import axios from "redaxios";
import { RouteWrapper, TopWrapper, GraphWrapper } from "../DoStatistics/style";
import StatisticsTable from "@components/StatisticsTable";
import StatisticsBarPathGraph from "@components/StatisticsBarPathGraph";
import StatisticsPathGraph from "@components/StatisticsPathGraph";

const testBarData = [
  {
    date: new Date("2022-03-31"),
    당기순이익: 2500,
    ROE: 5,
    ROA: 15,
    ROIC: 2,
  },
  {
    date: new Date("2021.03.31"),
    당기순이익: 2500,
    ROE: 15,
    ROA: 10,
    ROIC: 21,
  },
  {
    date: new Date("2020.03.31"),
    당기순이익: 3000,
    ROE: 5,
    ROA: 25,
    ROIC: 20,
  },
  {
    date: new Date("2019.03.31"),
    당기순이익: 3000,
    ROE: 15,
    ROA: 15,
    ROIC: 10,
  },
  {
    date: new Date("2018.03.31"),
    당기순이익: 4000,
    ROE: 35,
    ROA: 5,
    ROIC: 15,
  },
];
const testPathData = [
  {
    basDt: new Date("2022-03-31"),
    부채비율: 25,
    유동부채비율: 5,
    비유동부채비율: 15,
  },
  {
    basDt: new Date("2021.03.31"),
    부채비율: 25,
    유동부채비율: 15,
    비유동부채비율: 10,
  },
  {
    basDt: new Date("2020.03.31"),
    부채비율: 30,
    유동부채비율: 5,
    비유동부채비율: 25,
  },
  {
    basDt: new Date("2019.03.31"),
    부채비율: 30,
    유동부채비율: 15,
    비유동부채비율: 15,
  },
  {
    basDt: new Date("2018.03.31"),
    부채비율: 40,
    유동부채비율: 35,
    비유동부채비율: 5,
  },
];

const DoStatistics = () => {
  const [data, setData] = useState();

  const fetch = async () => {
    const res = await axios.get(
      "https://gyoheonlee.github.io/mobile-bank/data/api/statistics.json",
    );
    setData(res.data);
  };

  useEffect(() => {
    fetch();
    console.log(data);
  }, []);

  return (
    <RouteWrapper>
      <TopWrapper>
        <h1>재무비율 요약</h1>
        <GraphWrapper>
          <StatisticsBarPathGraph data={testBarData} />
          <div className="divide" />
          <StatisticsPathGraph data={testPathData} />
        </GraphWrapper>
      </TopWrapper>
      <StatisticsTable data={data} type={"statistics"} />
    </RouteWrapper>
  );
};

export default DoStatistics;
