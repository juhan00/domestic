import React, { useState, useEffect, useCallback } from "react";
import { DomesticWrapper } from "./style";
import StockIndex from "@components/Main/StockIndex";
import RecentStock from "@components/Main/RecentStock";
import TopStock from "@components/Main/TopStock/index";
import ExchangeRate from "@components/Main/ExchangeRate";
import MarketIndi from "@components/Main/MarketIndi";
import StorageInput from "@components/Main/StorageInput";
import FinanceNews from "@components/Main/FinanceNews";
import exchangeRateData from "@utils/MainData/exchangeRateData.json";
import stockIndexData from "@utils/MainData/stockIndexData.json";
import topStockData from "@utils/MainData/topStockData.json";
import marketIndiData from "@utils/MainData/marketIndiData.json";
import financeNewsData from "@utils/MainData/financeNewsData.json";

const Domestic = () => {
  return (
    <DomesticWrapper>
      <div className="row">
        <RecentStock />
      </div>
      <div className="row">
        {stockIndexData.items.map((item) => (
          <div className="col" key={item.id}>
            <StockIndex type="domestic" data={item} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col col2">
          <TopStock data={topStockData} />
        </div>
        <div className="col">
          <ExchangeRate data={exchangeRateData} />
        </div>
        <div className="col">
          <MarketIndi data={marketIndiData} />
        </div>
      </div>
      <StorageInput type="recent" />

      <FinanceNews type="domestic" data={financeNewsData} />
    </DomesticWrapper>
  );
};

export default Domestic;
