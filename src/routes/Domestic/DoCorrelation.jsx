import React from "react";
import TableHeader from "@components/Table/TableHeader"
import CorrelationTable from "@components/Table/CorrelationTable";
import CorrelationChart from "@components/CorrelationChart"
import {domesticSample} from "@utils/statisticsData"
import {CorrTableWrapper} from "./style"

const DoCorrelation = () => {
  return (<>
    <CorrTableWrapper>
      <TableHeader 
        data={domesticSample.corr} 
        title={domesticSample.title[1]} 
      />
      <CorrelationTable data={domesticSample} />
    </CorrTableWrapper>
    <CorrelationChart />
  </>);
};

export default DoCorrelation;
