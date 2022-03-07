import React from "react";
import CorrelationTable from "@components/CorrelationTable";
import {globalSample} from "@utils/statisticsData"

const GoCorrelation = () => {
  return (
    <>
      <CorrelationTable data={globalSample} />
    </>
  );};

export default GoCorrelation;
