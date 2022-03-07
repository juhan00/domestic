import React from "react";
import BetaTable from "../../components/BetaTable";
import {domesticSample} from "@utils/statisticsData"

const DoBeta = () => {
  return (
    <>
      <BetaTable data={domesticSample} />
    </>
  );
};

export default DoBeta;
