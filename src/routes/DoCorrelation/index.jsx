import React from "react";
import TableHeader from "@components/Table/TableHeader";
import CorrelationTable from "@components/Table/CorrelationTable";
import CorrelationChart from "@components/CorrelationChart";
import { domesticSample } from "@utils/statisticsData";
import {
  RouteWrapper,
  SemiHeader,
  ContentWrapper,
  InputWrapper,
  TableWrapper,
  ChartWrapper,
} from "../DoBeta/style";

const DoCorrelation = () => {
  return (
    <RouteWrapper>
      <SemiHeader>
        <h1>상관 그래프(Correlation Graph)</h1>
        <InputWrapper>
          <input type="date" name="date" />
          ~
          <input type="date" name="date" />
        </InputWrapper>
      </SemiHeader>
      <ContentWrapper>
        <ChartWrapper>
          <CorrelationChart />
        </ChartWrapper>
        <TableWrapper>
          <TableHeader
            data={domesticSample.corr}
            title={domesticSample.title[1]}
          />
          <CorrelationTable data={domesticSample} />
        </TableWrapper>
      </ContentWrapper>
    </RouteWrapper>
  );
};

export default DoCorrelation;
