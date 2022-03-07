import React from "react";
import CorrelationTable from "@components/CorrelationTable";
import CorrelationChart from "@components/CorrelationChart"
import {domesticSample} from "@utils/statisticsData"

const DoCorrelation = () => {
  return (
      <>
        <CorrelationTable data={domesticSample} />
        <CorrelationChart />
      </>
  );
};

export default DoCorrelation;
