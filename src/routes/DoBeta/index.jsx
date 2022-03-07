import React from "react";
import BetaTable from "@components/BetaTable";
import BetaChart from "@components/BetaChart";
import { domesticSample } from "@utils/statisticsData";
import { RouteWrapper, ChartWrapper } from "./style";

const DoBeta = () => {
  return (
    <RouteWrapper>
      <BetaTable data={domesticSample} />
      <ChartWrapper>
        <BetaChart data={domesticSample} />
      </ChartWrapper>
    </RouteWrapper>
  );
};

export default DoBeta;
