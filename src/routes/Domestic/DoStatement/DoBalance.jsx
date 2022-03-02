import styled from "@emotion/styled";
import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatementOptions from "@components/Domestic/Statement/balance/StatementOptions";
import StatementTable from "@components/Domestic/Statement/balance/StatementTable";

const DoBalance = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <StatementOptions />
        <StatementTable />
      </section>
    </>
  );
};

export default DoBalance;
