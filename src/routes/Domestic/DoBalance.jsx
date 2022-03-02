import styled from "@emotion/styled";
import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatisticsTable from "@components/Domestic/StatisticsBalanceTable";
import StatisticsGraph from "@components/Domestic/StatisticsGraph";

const DoBalance = () => {
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

export default DoBalance;
