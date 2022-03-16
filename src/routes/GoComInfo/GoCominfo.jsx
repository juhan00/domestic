import React, { useEffect, useState } from "react";
import ComInfoTable from "@components/ComInfoTable";
import ComInfoGraph from "@components/ComInfoGraph";
import ComInfoDailyPrice from "@components/DailyPrice";
import { RouteWrapper, PriceWrapper } from "./style";
import { sampleJson } from "@utils/api";
import { useParams } from "react-router-dom";

const GoComInfo = () => {
  const [comInfoData, setComInfoData] = useState({});
  const crno = useParams();

  useEffect(() => {
    (async () => {
      sampleJson(crno.stockId.toLowerCase(), "balance")
        .then((res) => res.data)
        .then((data) => setComInfoData(data))
        .then((x) => console.log(x));
    })();
  }, []);

  return (
    <RouteWrapper>
      <PriceWrapper>
        <ComInfoGraph />
        <ComInfoDailyPrice />
      </PriceWrapper>
      {Object.keys(comInfoData).length
        ? // <ComInfoTable
          //   yearly={comInfoData.yearly}
          //   quarters={comInfoData.quarters}
          // />
          null
        : null}
    </RouteWrapper>
  );
};

export default GoComInfo;
