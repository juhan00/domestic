import React from "react";
import axios from "redaxios";
import StatementOptions from "@components/Domestic/Statement/cashflow/StatementOptions";
import StatementTable from "@components/Domestic/Statement/cashflow/StatementTable";

const DoCashFlow = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <StatementOptions />
        <StatementTable />
      </section>
    </>
  );
};

export default DoCashFlow;
