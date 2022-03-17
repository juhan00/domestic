import React, { useState, useEffect } from "react";
import axios from "redaxios";
import { RouteWrapper, TopWrapper, GraphWrapper } from "./style";
import StatisticsTable from "@components/StatisticsTable";
import StatisticsBarPathGraph from "@components/StatisticsBarPathGraph";
import StatisticsPathGraph from "@components/StatisticsPathGraph";
import { useParams } from "react-router-dom";
import { sampleJson } from "@utils/api";

const pathData = [
  {
    date: new Date("2022-03-31"),
    ROE: 5,
    ROA: 15,
    ROIC: 2,
  },
  {
    date: new Date("2021.03.31"),
    ROE: 15,
    ROA: 10,
    ROIC: 21,
  },
  {
    date: new Date("2020.03.31"),
    ROE: 5,
    ROA: 25,
    ROIC: 20,
  },
  {
    date: new Date("2019.03.31"),
    ROE: 15,
    ROA: 15,
    ROIC: 10,
  },
  {
    date: new Date("2018.03.31"),
    ROE: 35,
    ROA: 5,
    ROIC: 15,
  },
];
const barData = [
  {
    date: new Date("2022-03-31"),
    당기순이익: 2500,
  },
  {
    date: new Date("2021.03.31"),
    당기순이익: 2500,
  },
  {
    date: new Date("2020.03.31"),
    당기순이익: 3000,
  },
  {
    date: new Date("2019.03.31"),
    당기순이익: 3000,
  },
  {
    date: new Date("2018.03.31"),
    당기순이익: 4000,
  },
];
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

const DoStatistics = () => {
  const [data, setData] = useState();
  const [statisticsData, setStatisticsDate] = useState([]);
  const crno = useParams();

  useEffect(() => {
    (async () => {
      sampleJson(crno.stockId, "balance")
        .then((res) => res.data)
        .then((data) => setStatisticsDate(data))
        .then((x) => console.log(x));
    })();
  }, []);

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
          <StatisticsBarPathGraph
            data={testBarData}
            barData={barData}
            pathData={pathData}
            newData={statisticsData}
          />
          <div className="divide" />
          {Object.keys(statisticsData).length ? (
            <StatisticsPathGraph data={statisticsData} />
          ) : null}
        </GraphWrapper>
      </TopWrapper>
      {Object.keys(statisticsData).length ? (
        <StatisticsTable
          data={data}
          newData={statisticsData}
          type={"statistics"}
        />
      ) : null}
    </RouteWrapper>
  );
};

export default DoStatistics;
