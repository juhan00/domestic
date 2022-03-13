import React, { useEffect } from "react";
import ComInfoTable from "@components/ComInfoTable";
import ComInfoGraph from "@components/ComInfoGraph";
import ComInfoDailyPrice from "@components/DailyPrice";
import { RouteWrapper, PriceWrapper } from "./style";

const DoComInfo = () => {
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

export default DoComInfo;
