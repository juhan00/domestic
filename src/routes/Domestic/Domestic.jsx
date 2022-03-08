import React, { useState, useEffect, useCallback } from "react";
import { DomesticWrapper } from "./style";
import MainStockIndex from "@components/Main/MainStockIndex";
import MainHeadeer from "@components/Main/MainHeadeer";
import MainTopStock from "@components/Main/MainTopStock/index";
import MainExchRate from "@components/Main/MainExchRate";
import MainMarketIndi from "@components/Main/MainMarketIndi";
import StorageInput from "@components/Main/StorageInput";

const Domestic = () => {
  return (
    <DomesticWrapper>
      <div className="row">
        <MainHeadeer />
      </div>
      <div className="row">
        <div className="col">
          <MainStockIndex name="코스피 지수" />
        </div>
        <div className="col">
          <MainStockIndex name="코스닥 지수" />
        </div>
        <div className="col">
          <MainStockIndex name="코스피 200 지수" />
        </div>
      </div>
      <div className="row">
        <div className="col col2">
          <MainTopStock />
        </div>
        <div className="col">
          <MainExchRate />
        </div>
        <div className="col">
          <MainMarketIndi />
        </div>
      </div>
      <StorageInput type="recent" />
    </DomesticWrapper>
  );
};

export default Domestic;
