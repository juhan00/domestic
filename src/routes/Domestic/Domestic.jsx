import React, { useState, useEffect, useCallback } from "react";
import { DomesticWrapper } from "./style";
import RecentStock, { RecentStockLoader } from "@components/Main/RecentStock";
import StockIndex, { StockIndexLoader } from "@components/Main/StockIndex";
import TopStock, { TopStockLoader } from "@components/Main/TopStock";
import ExchangeRate, {
  ExchangeRateLoader,
} from "@components/Main/ExchangeRate";
import MarketIndi, { MarketIndiLoader } from "@components/Main/MarketIndi";
import StockNews, { StockNewsLoader } from "@components/Main/StockNews";
import axios from "redaxios";

const Domestic = () => {
  const [recentStockData, setRecentStockData] = useState(null);
  const [stockIndexData, setStockIndexData] = useState(null);
  const [topStockData, setTopStockData] = useState(null);
  const [stockNewsData, setStockNewsData] = useState(null);
  const [exchangeRateData, setExchangeRateData] = useState(null);
  const [marketIndiData, setMarketIndiData] = useState(null);

  //box loader animation state
  const [isBoxLoader, setIsBoxLoader] = useState(false);

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
        "https://juhan00.github.io/domestic_api/stockIndexData.json",
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

  //top stock data
  useEffect(() => {
    let isApiSubscribed = true;
    const topStockFetch = async () => {
      const res = await axios.get(
        "https://juhan00.github.io/domestic_api/topStockData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setTopStockData(res.data);
        }, 1000);
      }
    };
    topStockFetch();
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

  //market indi data
  useEffect(() => {
    let isApiSubscribed = true;
    const marketIndiFetch = async () => {
      const res = await axios.get(
        "https://juhan00.github.io/domestic_api/marketIndiData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setMarketIndiData(res.data);
        }, 1000);
      }
    };
    marketIndiFetch();
    return () => (isApiSubscribed = false);
  }, []);

  return (
    <DomesticWrapper>
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
                type="domestic"
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
          {!topStockData ? (
            <TopStockLoader />
          ) : (
            <TopStock data={topStockData} />
          )}
        </div>
        <div className={`col box_ani delay2 turn2 ${isBoxLoader && "ani_on"}`}>
          {!stockNewsData ? (
            <StockNewsLoader />
          ) : (
            <StockNews type="domestic" data={stockNewsData} />
          )}
        </div>
      </div>
      <div className="row">
        <div className={`col box_ani delay3 turn1 ${isBoxLoader && "ani_on"}`}>
          {!exchangeRateData ? (
            <ExchangeRateLoader type="domestic" />
          ) : (
            <ExchangeRate type="domestic" data={exchangeRateData} />
          )}
        </div>
        <div className={`col box_ani delay3 turn2 ${isBoxLoader && "ani_on"}`}>
          {!marketIndiData ? (
            <MarketIndiLoader />
          ) : (
            <MarketIndi type="domestic" data={marketIndiData} />
          )}
        </div>
      </div>
      {/* <FinanceNews type="domestic" data={financeNewsData} /> */}
    </DomesticWrapper>
  );
};

export default Domestic;
