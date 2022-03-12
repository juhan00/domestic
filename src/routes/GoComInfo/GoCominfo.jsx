import React, { useEffect } from "react";
import ComInfoTable from "@components/ComInfoTable";
import ComInfoGraph from "@components/ComInfoGraph";
import ComInfoDailyPrice from "@components/DailyPrice";
import axios from "redaxios";
import { RouteWrapper, PriceWrapper } from "../DoComInfo/style";

const GoComInfo = () => {
  return (
    <RouteWrapper>
      <PriceWrapper>
        <ComInfoGraph />
        <ComInfoDailyPrice />
      </PriceWrapper>
      <ComInfoTable />
    </RouteWrapper>
  );
};

export default GoComInfo;
