import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatisticsOptions from "../../components/Domestic/Statistics/income/statisticsOptions";
import StatisticsTable from "../../components/Domestic/Statistics/income/statisticsTable";
import { useParams } from "react-router-dom";

const DoIncome = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <>
      <section style={{ display: "flex" }}>
        <StatisticsOptions />
        <StatisticsTable />
      </section>
    </>
  );
};

export default DoIncome;
