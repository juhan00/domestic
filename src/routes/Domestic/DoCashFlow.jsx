import React from "react";
import axios from "redaxios";
import StatisticsOptions from "@components/Domestic/cashflow/StatisticsOptions";
import StatisticsTable from "@components/Domestic/cashflow/StatisticsTable";

const DoCashFlow = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <StatisticsOptions />
        <StatisticsTable />
      </section>
    </>
  );
};

export default DoCashFlow;
