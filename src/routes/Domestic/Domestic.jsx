import React, { useState, useEffect, useCallback } from "react";
import { DomesticWrapper } from "./style";
import StockIndex, { StockIndexLoader } from "@components/Main/StockIndex";
// import RecentStock from "@components/Main/RecentStock";
import TopStock, { TopStockLoader } from "@components/Main/TopStock/index";
import ExchangeRate, {
  ExchangeRateLoader,
} from "@components/Main/ExchangeRate";
import MarketIndi, { MarketIndiLoader } from "@components/Main/MarketIndi";
import StockNews from "@components/Main/StockNews";
// import StorageInput from "@components/Main/StorageInput";
// import FinanceNews from "@components/Main/FinanceNews";
// import stockIndexData from "@utils/MainData/stockIndexData.json";
// import topStockData from "@utils/MainData/topStockData.json";
// import exchangeRateData from "@utils/MainData/exchangeRateData.json";
// import marketIndiData from "@utils/MainData/marketIndiData.json";
// import financeNewsData from "@utils/MainData/financeNewsData.json";
import axios from "redaxios";

const Domestic = () => {
  const [stockIndexData, setStockIndexData] = useState(null);
  const [topStockData, setTopStockData] = useState(null);
  const [stockNewsData, setStockNewsData] = useState(null);
  const [exchangeRateData, setExchangeRateData] = useState(null);
  const [marketIndiData, setMarketIndiData] = useState(null);

  //stockIndexData
  useEffect(() => {
    let isApiSubscribed = true;
    const stockIndexFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/stockIndexData.json",
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

  //topStockData
  useEffect(() => {
    let isApiSubscribed = true;
    const topStockFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/topStockData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setTopStockData(res.data);
        }, 0);
      }
    };
    topStockFetch();
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

  //marketIndiData
  useEffect(() => {
    let isApiSubscribed = true;
    const marketIndiFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/marketIndiData.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setMarketIndiData(res.data);
        }, 0);
      }
    };
    marketIndiFetch();
    return () => (isApiSubscribed = false);
  }, []);

  return (
    <DomesticWrapper>
      {/* <div className="row">
        <RecentStock />
      </div> */}
      <div className="row">
        {!stockIndexData ? (
          <>
            <div className="col">
              <StockIndexLoader />
            </div>
            <div className="col">
              <StockIndexLoader />
            </div>
            <div className="col">
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
        <div className="col col2">
          {!topStockData ? (
            <TopStockLoader />
          ) : (
            <TopStock data={topStockData} />
          )}
        </div>
        <div className="col">
          {stockNewsData && <StockNews data={stockNewsData} />}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {!exchangeRateData ? (
            <ExchangeRateLoader />
          ) : (
            <ExchangeRate data={exchangeRateData} />
          )}
        </div>
        <div className="col">
          {!marketIndiData ? (
            <MarketIndiLoader />
          ) : (
            <MarketIndi data={marketIndiData} />
          )}
        </div>
      </div>
      {/* <StorageInput type="recent" /> */}

      {/* <FinanceNews type="domestic" data={financeNewsData} /> */}
    </DomesticWrapper>
  );
};

export default Domestic;
