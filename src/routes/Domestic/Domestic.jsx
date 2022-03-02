import React, { useState, useEffect, useCallback } from "react";
import MainStockIndex from "@components/Domestic/Main/MainStockIndex";
import MainHeadeer from "@components/Domestic/Main/MainHeadeer";
import MainTopStock from "@components/Domestic/Main/MainTopStock/index";
import MainExchRate from "@components/Domestic/Main/MainExchRate";
import MainMarketIndi from "@components/Domestic/Main/MainMarketIndi";
import StorageInput from "@components/Domestic/Main/StorageInput";

const Domestic = () => {
  return (
    <>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <MainHeadeer
          type="recent"
          // stocks={recentStocks}
          // setStocks={setRecentStocks}
        />
        <MainHeadeer
          type="interest"
          // stocks={interestStocks}
          // setStocks={setInterestStocks}
        />
      </div>
      <div style={{ display: "flex" }}>
        <MainStockIndex />
        <MainStockIndex />
        <MainStockIndex />
      </div>
      <div style={{ display: "flex" }}>
        <MainTopStock />
        <MainExchRate />
        <MainMarketIndi />
      </div>
      <StorageInput type="recent" />
    </>
  );
};

export default Domestic;
