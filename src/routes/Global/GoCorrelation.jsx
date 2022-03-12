import React from "react";
import TableHeader from "@components/Table/TableHeader";
import CorrelationTable from "@components/Table/CorrelationTable";
import CorrelationChart from "@components/CorrelationChart";
import { globalSample } from "@utils/statisticsData";
import {
  RouteWrapper,
  TableWrapper,
  ChartWrapper,
  CorrTableWrapper,
} from "../DoBeta/style";

const GoCorrelation = () => {
  return (
    <RouteWrapper>
      <TableWrapper>
        <TableHeader data={globalSample.corr} title={globalSample.title[1]} />
        <CorrelationTable data={globalSample} />
      </TableWrapper>
      <CorrelationChart />
    </RouteWrapper>
  );
};

export default GoCorrelation;
