import styled from "@emotion/styled";
import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatisticsOptions from "@components/Domestic/Statistics/balance/statisticsOptions";
import StatisticsTable from "@components/Domestic/Statistics/balance/statisticsTable";

const DoBalance = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <StatisticsOptions />
        <StatisticsTable />
      </section>
    </>
  );
};

export default DoBalance;
