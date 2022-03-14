import React, { useState, useEffect, useCallback } from "react";
import { GlobalWrapper } from "./style";
import StockIndex from "@components/Main/StockIndex";
import MajorStock from "@components/Main/MajorStock";
import ExchangeRate from "@components/Main/ExchangeRate";
import StockSector from "@components/Main/StockSector";
import StockNews from "@components/Main/StockNews";
import FinanceNews from "@components/Main/FinanceNews";
import exchangeRateData from "@utils/MainData/exchangeRateData.json";
import globalStockIndexData from "@utils/MainData/globalStockIndexData.json";
import MajorStockData from "@utils/MainData/MajorStockData.json";
import StockSectorData from "@utils/MainData/StockSectorData.json";
import financeNewsData from "@utils/MainData/financeNewsData.json";

const Global = () => {
  return (
    <GlobalWrapper>
      <div className="row">
        {globalStockIndexData.items.map((item) => (
          <div className="col" key={item.id}>
            <StockIndex type="global" data={item} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col col2">
          <div className="row">
            <MajorStock data={MajorStockData} />
          </div>
          <div className="row">
            <StockNews />
          </div>
        </div>
        <div className="col">
          <ExchangeRate data={exchangeRateData} />
        </div>
        <div className="col">
          <StockSector data={StockSectorData} />
        </div>
      </div>
      <FinanceNews type="global" data={financeNewsData} />
    </GlobalWrapper>
  );
};

export default Global;
