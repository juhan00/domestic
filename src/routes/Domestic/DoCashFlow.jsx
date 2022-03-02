import React from "react";
import axios from "redaxios";
import StatisticsTable from "@components/Domestic/StatisticsCashFlowTable";
import StatisticsGraph from "@components/Domestic/StatisticsGraph";

const DoCashFlow = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <StatisticsGraph />
        <StatisticsGraph />
      </section>
      <StatisticsTable />
    </>
  );
};

export default DoCashFlow;
