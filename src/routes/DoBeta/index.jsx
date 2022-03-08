import React from "react";
import TableHeader from "@components/Table/TableHeader"
import BetaTable from "@components/Table/BetaTable";
import BetaChart from "@components/BetaChart";
import { domesticSample } from "@utils/statisticsData";
import { RouteWrapper, ChartWrapper } from "./style";

const data = {
  KOSPI: [
    { basDt: new Date(2022, 2, 15), price: 500 },
    { basDt: new Date(2022, 2, 14), price: 1000 },
    { basDt: new Date(2022, 2, 13), price: 1500 },
    { basDt: new Date(2022, 2, 12), price: 2000 },
    { basDt: new Date(2022, 2, 11), price: 2500 },
    { basDt: new Date(2022, 2, 10), price: 3000 },
    { basDt: new Date(2022, 2, 9), price: 3500 },
    { basDt: new Date(2022, 2, 8), price: 4000 },
    { basDt: new Date(2022, 2, 7), price: 4500 },
    { basDt: new Date(2022, 2, 6), price: 5000 },
    { basDt: new Date(2022, 2, 5), price: 5500 },
    { basDt: new Date(2022, 2, 4), price: 6000 },
    { basDt: new Date(2022, 2, 3), price: 6500 },
    { basDt: new Date(2022, 2, 2), price: 7000 },
    { basDt: new Date(2022, 2, 1), price: 7500 },
  ],
  삼성전자: [
    { basDt: new Date(2022, 2, 15), price: 12 },
    { basDt: new Date(2022, 2, 14), price: 9 },
    { basDt: new Date(2022, 2, 13), price: 39 },
    { basDt: new Date(2022, 2, 12), price: 123 },
    { basDt: new Date(2022, 2, 11), price: 65 },
    { basDt: new Date(2022, 2, 10), price: 90 },
    { basDt: new Date(2022, 2, 9), price: 3 },
    { basDt: new Date(2022, 2, 8), price: 88 },
    { basDt: new Date(2022, 2, 7), price: 77 },
    { basDt: new Date(2022, 2, 6), price: 100 },
    { basDt: new Date(2022, 2, 5), price: 66 },
    { basDt: new Date(2022, 2, 4), price: 55 },
    { basDt: new Date(2022, 2, 3), price: 11 },
    { basDt: new Date(2022, 2, 2), price: 33 },
    { basDt: new Date(2022, 2, 1), price: 120 },
  ],
};

const DoBeta = () => {
  return (
    <RouteWrapper>
      <div>
        <TableHeader data={domesticSample.beta} title={domesticSample.title} /> 
        <BetaTable data={domesticSample} />
      </div>
      <ChartWrapper>
        <BetaChart data={data} />
      </ChartWrapper>
    </RouteWrapper>
  );
};

export default DoBeta;
