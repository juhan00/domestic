import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RouteWrapper, TopWrapper, GraphWrapper } from "../DoStatistics/style";
import { sampleJson } from "@utils/api";
import HashLoader from "react-spinners/HashLoader";
import StatisticsTable from "@components/StatisticsTable";
import StatisticsBarPathGraph from "@components/StatisticsBarPathGraph";
import StatisticsPathGraph from "@components/StatisticsPathGraph";

const DoBalance = () => {
  const [balanceData, setBalanceData] = useState({});
  const crno = useParams();

  useEffect(() => {
    (async () => {
      sampleJson(crno.stockId, "statistics")
        .then((res) => res.data)
        .then((data) => setBalanceData(data));
    })();
  }, [crno]);

  return (
    <RouteWrapper>
      <TopWrapper>
        <h1>재무비율 요약</h1>
        <GraphWrapper>
          {Object.keys(balanceData).length ? (
            <StatisticsBarPathGraph data={balanceData} type={"balance"} />
          ) : (
            <HashLoader color={"#48a185"} size={50} />
          )}
          <div className="divide" />
          {Object.keys(balanceData).length ? (
            <StatisticsPathGraph data={balanceData} type={"balance"} />
          ) : (
            <HashLoader color={"#48a185"} size={50} />
          )}
        </GraphWrapper>
      </TopWrapper>
      {Object.keys(balanceData).length ? (
        <StatisticsTable data={balanceData} type={"balance"} />
      ) : (
        <HashLoader color={"#48a185"} size={50} />
      )}
    </RouteWrapper>
  );
};

export default DoBalance;
