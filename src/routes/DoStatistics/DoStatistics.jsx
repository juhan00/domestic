import styled from "@emotion/styled";
import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatisticsOptions from "../../components/Domestic/Statistics/Main/statisticsOptions";
import StatisticsTable from "../../components/Domestic/Statistics/Main/statisticsTable";
import Header from "../../components/Domestic/Statistics/Header";

const DoStatistics = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <StatisticsOptions />
        <StatisticsTable />
      </section>
    </>
  );
};

export default DoStatistics;
