import React from "react";
import CorrelationTable from "@components/CorrelationTable";
import {domesticSample} from "@utils/statisticsData"

const DoCorrelation = () => {
  return (
    <>
      <CorrelationTable data={domesticSample} />
    </>
  );
};

export default DoCorrelation;
