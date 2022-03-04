import styled from "@emotion/styled";
import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import { GraphWrapper } from "../DoStatistics/style";
import StatisticsTable from "@components/Domestic/StatisticsTable";
import StatisticsBarPathGraph from "@components/Domestic/StatisticsBarPathGraph";
import StatisticsPathGraph from "@components/Domestic/StatisticsPathGraph";

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
    date: new Date("2022-03-31"),
    부채비율: 25,
    유동부채비율: 5,
    비유동부채비율: 15,
  },
  {
    date: new Date("2021.03.31"),
    부채비율: 25,
    유동부채비율: 15,
    비유동부채비율: 10,
  },
  {
    date: new Date("2020.03.31"),
    부채비율: 30,
    유동부채비율: 5,
    비유동부채비율: 25,
  },
  {
    date: new Date("2019.03.31"),
    부채비율: 30,
    유동부채비율: 15,
    비유동부채비율: 15,
  },
  {
    date: new Date("2018.03.31"),
    부채비율: 40,
    유동부채비율: 35,
    비유동부채비율: 5,
  },
];

const DoStatistics = () => {
  return (
    <>
      <GraphWrapper>
        <StatisticsBarPathGraph data={testBarData} />
        <StatisticsPathGraph data={testPathData} />
      </GraphWrapper>
      <StatisticsTable />
    </>
  );
};

export default DoStatistics;
