import React from "react";
import axios from "redaxios";
import StatisticsTable from "@components/Domestic/StatisticsCashFlowTable";
import StatisticsBarPathGraph from "@components/Domestic/StatisticsBarPathGraph";
import StatisticsPathGraph from "@components/Domestic/StatisticsPathGraph";

const DoCashFlow = () => {
  return (
    <>
      <StatisticsGraph />
      <StatisticsTable />
    </>
  );
};

export default DoCashFlow;
