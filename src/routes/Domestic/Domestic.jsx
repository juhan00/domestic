import React, { useState, useEffect, useCallback } from "react";
import MainStockIndex from "@components/Domestic/Main/MainStockIndex";
import MainHeadeer from "@components/Domestic/Main/MainHeadeer";
import MainTopStock from "@components/Domestic/Main/MainTopStock/index";
import MainExchRate from "@components/Domestic/Main/MainExchRate";
import MainMarketIndi from "@components/Domestic/Main/MainMarketIndi";
import StorageInput from "@components/Domestic/Main/StorageInput";
import { DomesticWrapper } from "./style";

const Domestic = () => {
  return (
    <DomesticWrapper>
      <MainHeadeer />
      <div className="row">
        <MainStockIndex name="코스피 지수" />
        <MainStockIndex name="코스닥 지수" />
        <MainStockIndex name="코스피 200 지수" />
      </div>
      <div className="row">
        <MainTopStock />
        <MainExchRate />
        <MainMarketIndi />
      </div>
      <StorageInput type="recent" />
    </DomesticWrapper>
  );
};

export default Domestic;
