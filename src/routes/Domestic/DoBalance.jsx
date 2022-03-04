import styled from "@emotion/styled";
import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatisticsTable from "@components/Domestic/StatisticsBalanceTable";
import StatisticsBarPathGraph from "@components/Domestic/StatisticsBarPathGraph";
import StatisticsPathGraph from "@components/Domestic/StatisticsPathGraph";

const DoBalance = () => {
  return (
    <>
      <StatisticsGraph />
      <StatisticsTable />
    </>
  );
};

export default DoBalance;
