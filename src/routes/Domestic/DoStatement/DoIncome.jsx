import React from "react";
import axios from "redaxios";
import { useEffect } from "react";
import StatementOptions from "@components/Domestic/Statement/income/StatementOptions";
import StatementTable from "@components/Domestic/Statement/income/StatementTable";
import { useParams } from "react-router-dom";

const DoIncome = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <>
      <section style={{ display: "flex" }}>
        <StatementOptions />
        <StatementTable />
      </section>
    </>
  );
};

export default DoIncome;
