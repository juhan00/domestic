import React, { useState, useEffect, useCallback } from "react";
import { GlobalWrapper } from "./style";
import StockIndex from "@components/Main/StockIndex";
import MajorStock from "@components/Main/MajorStock";
import ExchangeRate from "@components/Main/ExchangeRate";
import StockSector from "@components/Main/StockSector";
import StockNews from "@components/Main/StockNews";
// import financeNewsData from "@utils/MainData/financeNewsData.json";
import axios from "redaxios";

const Global = () => {
  const [stockIndexData, setStockIndexData] = useState(null);
  const [majorStockData, setMajorStockData] = useState(null);
  const [stockNewsData, setStockNewsData] = useState(null);
  const [exchangeRateData, setExchangeRateData] = useState(null);
  const [stockSectorData, setStockSectorData] = useState(null);

  //stockIndexData
  useEffect(() => {
    let isApiSubscribed = true;
    const stockIndexFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/globalStockIndexData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setStockIndexData(res.data);
        }, 0);
      }
    };

    stockIndexFetch();
    return () => (isApiSubscribed = false);
  }, []);

  //majorStockData
  useEffect(() => {
    let isApiSubscribed = true;
    const majorStockFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/MajorStockData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setMajorStockData(res.data);
        }, 0);
      }
    };
    majorStockFetch();
    return () => (isApiSubscribed = false);
  }, []);

  //stockNewsData
  useEffect(() => {
    let isApiSubscribed = true;
    const stockNewsFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/MajorStockNewsData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setStockNewsData(res.data);
        }, 0);
      }
    };
    stockNewsFetch();
    return () => (isApiSubscribed = false);
  }, []);

  //exchangeRateData
  useEffect(() => {
    let isApiSubscribed = true;
    const exchangeRateFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/exchangeRateData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setExchangeRateData(res.data);
        }, 0);
      }
    };
    exchangeRateFetch();
    return () => (isApiSubscribed = false);
  }, []);

  //stockSectorData
  useEffect(() => {
    let isApiSubscribed = true;
    const stockSectorFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/StockSectorData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setStockSectorData(res.data);
        }, 0);
      }
    };
    stockSectorFetch();
    return () => (isApiSubscribed = false);
  }, []);

  return (
    <GlobalWrapper>
      <div className="row">
        {stockIndexData &&
          stockIndexData.items.map((item) => (
            <div className="col" key={item.id}>
              <StockIndex
                type="global"
                data={item}
                date={stockIndexData.date}
              />
            </div>
          ))}
      </div>
      <div className="row">
        <div className="col col2">
          {majorStockData && <MajorStock data={majorStockData} />}
        </div>
        <div className="col">
          {stockNewsData && <StockNews type="global" data={stockNewsData} />}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {exchangeRateData && (
            <ExchangeRate type="global" data={exchangeRateData} />
          )}
        </div>
        <div className="col">
          {stockSectorData && <StockSector data={stockSectorData} />}
        </div>
      </div>
      {/* <FinanceNews type="global" data={financeNewsData} /> */}
    </GlobalWrapper>
  );
};

export default Global;
