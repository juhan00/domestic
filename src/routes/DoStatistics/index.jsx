import React, { useState, useEffect } from "react";
import { RouteWrapper, TopWrapper, GraphWrapper } from "./style";
import StatisticsTable, {
  StatisticsTableLoader,
} from "@components/StatisticsTable";
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

  //box loader animation state
  const [isBoxLoader, setIsBoxLoader] = useState(false);

  //box loader aninmation useEffect
  useEffect(() => {
    setIsBoxLoader(true);
    return () => setIsBoxLoader(false);
  }, []);

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
            .then((data) =>
              setTimeout(() => {
                setStatisticsData(data);
              }, 1000),
            );
        })();
  }, [crno, type]);

  return (
    <RouteWrapper>
      <StatisticsHeader />
      <TopWrapper className={`col box_ani turn1 ${isBoxLoader && "ani_on"}`}>
        {Object.keys(statisticsData).length ? (
          <h1>재무비율 요약</h1>
        ) : (
          <h1></h1>
        )}
        <GraphWrapper>
          {Object.keys(statisticsData).length ? (
            <StatisticsBarPathGraph
              data={statisticsData}
              unit={unit}
              type={type}
            />
          ) : (
            <div className="hash_loader_wrapper" style={{ height: "250px" }}>
              <HashLoader color={"#48a185"} size={50} />
            </div>
          )}
          <div className="divide" />
          {Object.keys(statisticsData).length ? (
            <StatisticsPathGraph data={statisticsData} type={type} />
          ) : (
            <div className="hash_loader_wrapper" style={{ height: "250px" }}>
              <HashLoader color={"#48a185"} size={50} />
            </div>
          )}
        </GraphWrapper>
      </TopWrapper>
      {Object.keys(statisticsData).length ? (
        <StatisticsTable data={statisticsData} type={type} unit={unit} />
      ) : (
        <div className={`box_ani delay1 turn1 ${isBoxLoader && "ani_on"}`}>
          <StatisticsTableLoader />
        </div>
      )}
    </RouteWrapper>
  );
};

export default DoStatistics;
