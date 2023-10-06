import React, { useState, useEffect, useCallback } from "react";
import { GlobalWrapper } from "./style";
import RecentStock, { RecentStockLoader } from "@components/Main/RecentStock";
import StockIndex, { StockIndexLoader } from "@components/Main/StockIndex";
import MajorStock, { MajorStockLoader } from "@components/Main/MajorStock";
import ExchangeRate, {
  ExchangeRateLoader,
} from "@components/Main/ExchangeRate";
import StockSector, { StockSectorLoader } from "@components/Main/StockSector";
import StockNews, { StockNewsLoader } from "@components/Main/StockNews";
// import financeNewsData from "@utils/MainData/financeNewsData.json";
import axios from "redaxios";

const Global = () => {
  //box loader animation state
  const [isBoxLoader, setIsBoxLoader] = useState(false);
  const [recentStockData, setRecentStockData] = useState(null);
  const [stockIndexData, setStockIndexData] = useState(null);
  const [majorStockData, setMajorStockData] = useState(null);
  const [stockNewsData, setStockNewsData] = useState(null);
  const [exchangeRateData, setExchangeRateData] = useState(null);
  const [stockSectorData, setStockSectorData] = useState(null);

  //box loader aninmation useEffect
  useEffect(() => {
    setIsBoxLoader(true);
    return () => setIsBoxLoader(false);
  }, []);

  //recent stock data
  useEffect(() => {
    setTimeout(() => {
      setRecentStockData(true);
    }, 1000);
    return () => setRecentStockData(false);
  }, []);

  //stock index data
  useEffect(() => {
    let isApiSubscribed = true;
    const stockIndexFetch = async () => {
      const res = await axios.get(
        "https://juhan00.github.io/domestic_api/globalStockIndexData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setStockIndexData(res.data);
        }, 1000);
      }
    };

    stockIndexFetch();
    return () => (isApiSubscribed = false);
  }, []);

  //major stock data
  useEffect(() => {
    let isApiSubscribed = true;
    const majorStockFetch = async () => {
      const res = await axios.get(
        "https://juhan00.github.io/domestic_api/MajorStockData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setMajorStockData(res.data);
        }, 1000);
      }
    };
    majorStockFetch();
    return () => (isApiSubscribed = false);
  }, []);

  //stock news data
  useEffect(() => {
    let isApiSubscribed = true;
    const stockNewsFetch = async () => {
      const res = await axios.get(
        "https://juhan00.github.io/domestic_api/MajorStockNewsData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setStockNewsData(res.data);
        }, 1000);
      }
    };
    stockNewsFetch();
    return () => (isApiSubscribed = false);
  }, []);

  //exchange rate data
  useEffect(() => {
    let isApiSubscribed = true;
    const exchangeRateFetch = async () => {
      const res = await axios.get(
        "https://juhan00.github.io/domestic_api/exchangeRateData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setExchangeRateData(res.data);
        }, 1000);
      }
    };
    exchangeRateFetch();
    return () => (isApiSubscribed = false);
  }, []);

  //stock sector data
  useEffect(() => {
    let isApiSubscribed = true;
    const stockSectorFetch = async () => {
      const res = await axios.get(
        "https://juhan00.github.io/domestic_api/StockSectorData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setStockSectorData(res.data);
        }, 1000);
      }
    };
    stockSectorFetch();
    return () => (isApiSubscribed = false);
  }, []);

  return (
    <GlobalWrapper>
      <div className="row">
        <div className={`col box_ani turn1 ${isBoxLoader && "ani_on"}`}>
          {!recentStockData ? <RecentStockLoader /> : <RecentStock />}
        </div>
      </div>
      <div className="row">
        {!stockIndexData ? (
          <>
            <div
              className={`col box_ani delay1 turn1 ${isBoxLoader && "ani_on"}`}>
              <StockIndexLoader />
            </div>
            <div
              className={`col box_ani delay1 turn2 ${isBoxLoader && "ani_on"}`}>
              <StockIndexLoader />
            </div>
            <div
              className={`col box_ani delay1 turn3 ${isBoxLoader && "ani_on"}`}>
              <StockIndexLoader />
            </div>
          </>
        ) : (
          stockIndexData.items.map((item) => (
            <div className="col" key={item.id}>
              <StockIndex
                type="global"
                data={item}
                date={stockIndexData.date}
              />
            </div>
          ))
        )}
      </div>
      <div className="row">
        <div
          className={`col col2 box_ani delay2 turn1 ${
            isBoxLoader && "ani_on"
          }`}>
          {!majorStockData ? (
            <MajorStockLoader />
          ) : (
            <MajorStock data={majorStockData} />
          )}
        </div>
        <div className={`col box_ani delay2 turn2 ${isBoxLoader && "ani_on"}`}>
          {!stockNewsData ? (
            <StockNewsLoader />
          ) : (
            <StockNews type="global" data={stockNewsData} />
          )}
        </div>
      </div>
      <div className="row">
        <div className={`col box_ani delay3 turn1 ${isBoxLoader && "ani_on"}`}>
          {!exchangeRateData ? (
            <ExchangeRateLoader type="global" />
          ) : (
            <ExchangeRate type="global" data={exchangeRateData} />
          )}
        </div>
        <div className={`col box_ani delay3 turn2 ${isBoxLoader && "ani_on"}`}>
          {!stockSectorData ? (
            <StockSectorLoader />
          ) : (
            <StockSector data={stockSectorData} />
          )}
        </div>
      </div>
      {/* <FinanceNews type="global" data={financeNewsData} /> */}
    </GlobalWrapper>
  );
};

export default Global;
