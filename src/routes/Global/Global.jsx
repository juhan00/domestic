import React, { useState, useEffect, useCallback } from "react";
import { GlobalWrapper } from "./style";
import StockIndex from "@components/Main/StockIndex";
import RecentStock from "@components/Main/RecentStock";
import MajorStock from "@components/Main/MajorStock";
import ExchangeRate from "@components/Main/ExchangeRate";
import StockSector from "@components/Main/StockSector";
import StockNews from "@components/Main/StockNews";

const Global = () => {
  return (
    <GlobalWrapper>
      <div className="row">
        <RecentStock />
      </div>
      <div className="row">
        <StockIndex name="코스피 지수" />
        <StockIndex name="코스닥 지수" />
        <StockIndex name="코스피 200 지수" />
      </div>
      <div className="row">
        <div className="col col2">
          <div className="row">
            <MajorStock />
          </div>
          <div className="row">
            <StockNews />
          </div>
        </div>
        <div className="col">
          <ExchangeRate />
        </div>
        <div className="col">
          <StockSector />
        </div>
      </div>
    </GlobalWrapper>
  );
};

export default Global;
