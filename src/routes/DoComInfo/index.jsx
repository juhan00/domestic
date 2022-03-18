import React, { useEffect, useState } from "react";
import ComInfoTable, { ComInfoTableLoader } from "@components/ComInfoTable";
import ComInfoGraph, { DoFinancialGraphLoader } from "@components/ComInfoGraph";
import ComInfoDailyPrice, {
  DoComInfoDailyPriceLoader,
} from "@components/DailyPrice";
import { RouteWrapper, PriceWrapper } from "./style";
import { sampleJson } from "@utils/api";
import { useParams, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const DoComInfo = () => {
  //box loader animation state
  const [isBoxLoader, setIsBoxLoader] = useState(false);

  //box loader aninmation useEffect
  useEffect(() => {
    setIsBoxLoader(true);
    return () => setIsBoxLoader(false);
  }, []);

  const [comInfoData, setComInfoData] = useState({});
  const [dailyPrice, setDailyPrice] = useState({});

  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);

  const offset = (page - 1) * limit;

  const isGlobal = useLocation().pathname.includes("global");
  const crno = useParams();
  const unit = isGlobal ? "B" : "억원";

  useEffect(() => {
    (async () => {
      sampleJson(crno.stockId.toLowerCase(), "statistics")
        .then((res) => res.data)
        .then((data) =>
          setTimeout(() => {
            setComInfoData(data);
          }, 1000),
        );
    })();

    return () => {
      setComInfoData({});
    };
  }, [crno]);

  useEffect(() => {
    (async () => {
      sampleJson(crno.stockId.toLowerCase(), "price")
        .then((res) => res.data)
        .then((data) => {
          setTimeout(() => {
            setDailyPrice(data);
          }, 1000);
        });
    })();

    return () => {
      setDailyPrice({});
    };
  }, [crno]);

  return (
    <RouteWrapper>
      <PriceWrapper>
        {Object.keys(dailyPrice).length ? (
          <ComInfoGraph />
        ) : (
          <div
            className={`box_ani turn1 ${isBoxLoader && "ani_on"}`}
            style={{ flex: "1 1 0" }}>
            <DoFinancialGraphLoader />
          </div>
        )}

        {Object.keys(dailyPrice).length ? (
          <ComInfoDailyPrice
            data={dailyPrice}
            offset={offset}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        ) : (
          <div
            className={`box_ani turn2 ${isBoxLoader && "ani_on"}`}
            style={{ flex: "1 1 0", marginLeft: "20px" }}>
            <DoFinancialGraphLoader />
          </div>
        )}
      </PriceWrapper>
      {Object.keys(comInfoData).length ? (
        <ComInfoTable
          yearly={comInfoData.yearly}
          quarters={comInfoData.quarters}
          unit={unit}
        />
      ) : (
        <div className={`box_ani delay1 turn1 ${isBoxLoader && "ani_on"}`}>
          <ComInfoTableLoader />
        </div>
      )}
    </RouteWrapper>
  );
};

export default DoComInfo;
