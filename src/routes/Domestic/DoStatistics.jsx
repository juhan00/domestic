import styled from "@emotion/styled";
import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatisticsTable from "@components/Domestic/StatisticsTable";
import StatisticsGraph from "@components/Domestic/StatisticsGraph";

const DoStatistics = () => {
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

export default DoStatistics;
