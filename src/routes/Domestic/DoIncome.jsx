import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StatisticsTable from "@components/Domestic/StatisticsIncomeTable";
import StatisticsBarPathGraph from "@components/Domestic/StatisticsBarPathGraph";
import StatisticsPathGraph from "@components/Domestic/StatisticsPathGraph";

const DoIncome = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <>
      <StatisticsGraph />
      <StatisticsTable />
    </>
  );
};

export default DoIncome;
