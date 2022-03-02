import styled from "@emotion/styled";
import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatisticsOptions from "@components/Domestic/StatisticsMain/StatisticsOptions";
import StatisticsTable from "@components/Domestic/StatisticsMain/StatisticsTable";

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
