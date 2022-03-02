import styled from "@emotion/styled";
import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatementOptions from "@components/Domestic/Statement/Main/StatementOptions";
import StatementTable from "@components/Domestic/Statement/Main/StatementTable";

const DoStatement = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <StatementOptions />
        <StatementTable />
      </section>
    </>
  );
};

export default DoStatement;
