import React from "react";
import BetaTable from "@components/Table/BetaTable";
import TableHeader from "@components/Table/TableHeader"
import {globalSample} from "@utils/statisticsData"

const GoBeta = () => {
  return (
    <>
      <TableHeader data={globalSample.beta} title={globalSample.title} /> 
      <BetaTable data={globalSample} />
    </>
  );
};

export default GoBeta;
