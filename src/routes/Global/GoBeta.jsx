import React from "react";
import BetaTable from "@components/BetaTable";
import {globalSample} from "@utils/statisticsData"

const GoBeta = () => {
  return (
    <>
      <BetaTable data={globalSample} />
    </>
  );
};

export default GoBeta;
