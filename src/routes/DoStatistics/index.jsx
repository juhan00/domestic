import React, { useState, useEffect } from "react";
import { RouteWrapper, TopWrapper, GraphWrapper } from "./style";
import StatisticsTable from "@components/StatisticsTable";
import StatisticsBarPathGraph from "@components/StatisticsBarPathGraph";
import StatisticsPathGraph from "@components/StatisticsPathGraph";
import { useParams } from "react-router-dom";
import { sampleJson } from "@utils/api";
import HashLoader from "react-spinners/HashLoader";

const DoStatistics = () => {
  const [statisticsData, setStatisticsData] = useState({});
  const [type, setType] = useState("statistics");
  const crno = useParams();

  useEffect(() => {
    (async () => {
      sampleJson(crno.stockId, "balance")
        .then((res) => res.data)
        .then((data) => setStatisticsData(data));
    })();
  }, [crno, type]);

  return (
    <RouteWrapper>
      <TopWrapper>
        <h1>재무비율 요약</h1>
        <GraphWrapper>
          {Object.keys(statisticsData).length ? (
            <StatisticsBarPathGraph data={statisticsData} type={"statistics"} />
          ) : (
            <HashLoader color={"#48a185"} size={50} />
          )}
          <div className="divide" />
          {Object.keys(statisticsData).length ? (
            <StatisticsPathGraph data={statisticsData} type={"statistics"} />
          ) : (
            <HashLoader color={"#48a185"} size={50} />
          )}
        </GraphWrapper>
      </TopWrapper>
      {Object.keys(statisticsData).length ? (
        <StatisticsTable data={statisticsData} type={"statistics"} />
      ) : (
        <HashLoader color={"#48a185"} size={50} />
      )}
    </RouteWrapper>
  );
};

export default DoStatistics;
