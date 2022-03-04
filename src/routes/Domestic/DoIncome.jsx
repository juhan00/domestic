import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StatisticsTable from "@components/Domestic/StatisticsIncomeTable";
import StatisticsGraph from "@components/Domestic/StatisticsGraph";

const DoIncome = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);

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

export default DoIncome;
