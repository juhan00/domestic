import React, { useState, useEffect, useCallback } from "react";
import { DomesticWrapper } from "./style";
import StockIndex from "@components/Main/StockIndex";
import RecentStock from "@components/Main/RecentStock";
import TopStock from "@components/Main/TopStock/index";
import ExchangeRate from "@components/Main/ExchangeRate";
import MarketIndi from "@components/Main/MarketIndi";
import StorageInput from "@components/Main/StorageInput";
import FinanceNews from "@components/Main/FinanceNews";

const Domestic = () => {
  return (
    <DomesticWrapper>
      <div className="row">
        <RecentStock />
      </div>
      <div className="row">
        <div className="col">
          <StockIndex name="코스피 지수" />
        </div>
        <div className="col">
          <StockIndex name="코스닥 지수" />
        </div>
        <div className="col">
          <StockIndex name="코스피 200 지수" />
        </div>
      </div>
      <div className="row">
        <div className="col col2">
          <TopStock />
        </div>
        <div className="col">
          <ExchangeRate />
        </div>
        <div className="col">
          <MarketIndi />
        </div>
      </div>
      <StorageInput type="recent" />

      <FinanceNews type="kr" />
    </DomesticWrapper>
  );
};

export default Domestic;
