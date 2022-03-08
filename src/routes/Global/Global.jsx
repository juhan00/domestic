import React, { useState, useEffect, useCallback } from "react";
import { GlobalWrapper } from "./style";
import MainStockIndex from "@components/Main/MainStockIndex";
import MainHeadeer from "@components/Main/MainHeadeer";
import MainMajorStock from "@components/Main/MainMajorStock";
import MainExchRate from "@components/Main/MainExchRate";
import MainStockSector from "@components/Main/MainStockSector";
import MainStockNews from "@components/Main/MainStockNews";

const Global = () => {
  return (
    <GlobalWrapper>
      <div className="row">
        <MainHeadeer />
      </div>
      <div className="row">
        <MainStockIndex name="코스피 지수" />
        <MainStockIndex name="코스닥 지수" />
        <MainStockIndex name="코스피 200 지수" />
      </div>
      <div className="row">
        <div className="col col2">
          <div className="row">
            <MainMajorStock />
          </div>
          <div className="row">
            <MainStockNews />
          </div>
        </div>
        <div className="col">
          <MainExchRate />
        </div>
        <div className="col">
          <MainStockSector />
        </div>
      </div>
    </GlobalWrapper>
  );
};

export default Global;
