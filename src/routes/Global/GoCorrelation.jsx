import React from "react";
import TableHeader from "@components/Table/TableHeader"
import CorrelationTable from "@components/Table/CorrelationTable";
import CorrelationChart from "@components/CorrelationChart"
import {globalSample} from "@utils/statisticsData"
import {CorrTableWrapper} from "../Domestic/style"

const GoCorrelation = () => {
  return (
    <>
      <CorrTableWrapper>
        <TableHeader 
          data={globalSample.corr} 
          title={globalSample.title[1]} 
        />
        <CorrelationTable data={globalSample} />
      </CorrTableWrapper>
      <CorrelationChart />
    </>
  );};

export default GoCorrelation;
