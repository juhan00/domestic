import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatisticsOptions from "@components/Domestic/Income/StatisticsOptions";
import StatisticsTable from "@components/Domestic/Income/StatisticsTable";
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
