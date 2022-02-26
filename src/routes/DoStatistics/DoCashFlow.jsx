import React from "react";
import axios from "redaxios";
import StatisticsOptions from "../../components/Domestic/Statistics/cashflow/statisticsOptions";
import StatisticsTable from "../../components/Domestic/Statistics/cashflow/statisticsTable";

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
