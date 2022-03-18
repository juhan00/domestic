import React, { useState, useEffect } from "react";
import { RouteWrapper, TopWrapper, GraphWrapper } from "./style";
import StatisticsTable from "@components/StatisticsTable";
import StatisticsBarPathGraph from "@components/StatisticsBarPathGraph";
import StatisticsPathGraph from "@components/StatisticsPathGraph";
import StatisticsHeader from "@components/StatisticsHeader";
import { useLocation, useParams } from "react-router-dom";
import { sampleJson } from "@utils/api";
import HashLoader from "react-spinners/HashLoader";

const DoStatistics = () => {
  const [statisticsData, setStatisticsData] = useState({});
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(true);
  const crno = useParams();
  const path = useLocation().pathname;
  const types = ["statistics", "balance", "income"];
  const isGlobal = useLocation().pathname.includes("global");
  const unit = isGlobal ? "B" : "억원";

  useEffect(() => {
    types.map((item) => (path.includes(item) ? setType(item) : null));
    setLoading(false);
  }, [crno]);

  useEffect(() => {
    loading
      ? null
      : (async () => {
          sampleJson(crno.stockId.toLowerCase(), type)
            .then((res) => res.data)
            .then((data) => setStatisticsData(data));
        })();
  }, [crno, type]);

  return (
    <RouteWrapper>
      <StatisticsHeader />
      <TopWrapper>
        <h1>재무비율 요약</h1>
        <GraphWrapper>
          {Object.keys(statisticsData).length ? (
            <StatisticsBarPathGraph data={statisticsData} type={type} />
          ) : (
            <HashLoader color={"#48a185"} size={50} />
          )}
          <div className="divide" />
          {Object.keys(statisticsData).length ? (
            <StatisticsPathGraph data={statisticsData} type={type} />
          ) : (
            <HashLoader color={"#48a185"} size={50} />
          )}
        </GraphWrapper>
      </TopWrapper>
      {Object.keys(statisticsData).length ? (
        <StatisticsTable data={statisticsData} type={type} unit={unit} />
      ) : (
        <HashLoader color={"#48a185"} size={50} />
      )}
    </RouteWrapper>
  );
};

export default DoStatistics;
