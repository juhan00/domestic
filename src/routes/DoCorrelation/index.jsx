import React from "react";
import TableHeader from "@components/Table/TableHeader";
import CorrelationTable from "@components/Table/CorrelationTable";
import CorrelationChart from "@components/CorrelationChart";
import { domesticSample } from "@utils/statisticsData";
import {
  RouteWrapper,
  TableWrapper,
  ChartWrapper,
  CorrTableWrapper,
} from "../DoBeta/style";

const DoCorrelation = () => {
  return (
    <RouteWrapper>
      <TableWrapper>
        <TableHeader
          data={domesticSample.corr}
          title={domesticSample.title[1]}
        />
        <CorrelationTable data={domesticSample} />
      </TableWrapper>
      <CorrelationChart />
    </RouteWrapper>
  );
};

export default DoCorrelation;
