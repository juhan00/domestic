import React from "react";
import MainStockIndex from "@components/Domestic/Main/MainStockIndex";
import MainHeadeer from "@components/Domestic/Main/MainHeadeer";
import MainTopStock from "@components/Domestic/Main/MainTopStock/index";
import MainExchRate from "@components/Domestic/Main/MainExchRate";
import MainMarketIndi from "@components/Domestic/Main/MainMarketIndi";

const initialRecentStocks = [
  {
    name: "삼성전자",
    stockIndex: "74,300",
  },
  {
    name: "LG전자",
    stockIndex: "124,000",
  },
  {
    name: "현대차",
    stockIndex: "174,000",
  },
];

const initialInterestStocks = [
  {
    name: "현대차",
    stockIndex: "174,000",
  },
  {
    name: "삼성전자",
    stockIndex: "74,300",
  },
  {
    name: "LG전자",
    stockIndex: "124,000",
  },
];

const Domestic = () => {
  return (
    <>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <MainHeadeer type="recent" stocks={initialRecentStocks} />
        <MainHeadeer type="interest" stocks={initialInterestStocks} />
      </div>
      <div style={{ display: "flex" }}>
        <MainStockIndex />
        <MainStockIndex />
        <MainStockIndex />
      </div>
      <div style={{ display: "flex" }}>
        <MainTopStock style={{ flexGrow: "2" }} />
        <MainExchRate style={{ flexGrow: "1" }} />
        <MainMarketIndi style={{ flexGrow: "1" }} />
      </div>
    </>
  );
};

export default Domestic;
