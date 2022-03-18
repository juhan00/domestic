import React, { useEffect, useState } from "react";
import ComInfoTable from "@components/ComInfoTable";
import ComInfoGraph from "@components/ComInfoGraph";
import ComInfoDailyPrice from "@components/DailyPrice";
import { RouteWrapper, PriceWrapper } from "./style";
import { sampleJson } from "@utils/api";
import { useParams, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

const DoComInfo = () => {
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
        .then((data) => setComInfoData(data));
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
          setDailyPrice(data);
        });
    })();

    return () => {
      setDailyPrice({});
    };
  }, [crno]);

  return (
    <RouteWrapper>
      <PriceWrapper>
        <ComInfoGraph />
        {Object.keys(dailyPrice).length ? (
          <ComInfoDailyPrice
            data={dailyPrice}
            offset={offset}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        ) : (
          <HashLoader color={"#48a185"} size={50} />
        )}
      </PriceWrapper>
      {Object.keys(comInfoData).length ? (
        <ComInfoTable
          yearly={comInfoData.yearly}
          quarters={comInfoData.quarters}
          unit={unit}
        />
      ) : (
        <HashLoader color={"#48a185"} size={50} />
      )}
    </RouteWrapper>
  );
};

export default DoComInfo;
