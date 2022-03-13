import React, { useState, useEffect, useCallback } from "react";
import { DomesticWrapper } from "./style";
import StockIndex from "@components/Main/StockIndex";
import RecentStock from "@components/Main/RecentStock";
import TopStock from "@components/Main/TopStock/index";
import ExchangeRate from "@components/Main/ExchangeRate";
import MarketIndi from "@components/Main/MarketIndi";
import StorageInput from "@components/Main/StorageInput";
import FinanceNews from "@components/Main/FinanceNews";
// import stockIndexData from "@utils/MainData/stockIndexData.json";
// import topStockData from "@utils/MainData/topStockData.json";
// import exchangeRateData from "@utils/MainData/exchangeRateData.json";
// import marketIndiData from "@utils/MainData/marketIndiData.json";
import financeNewsData from "@utils/MainData/financeNewsData.json";
import axios from "redaxios";
import ContentLoader from "react-content-loader";
import { Desktop, Tablet } from "@utils/useResponsive";

const DomesticDesktopLoader = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="964"
    viewBox="0 0 1636 964"
    preserveAspectRatio="none"
    backgroundColor="#e4e4e4"
    foregroundColor="#f1f0f0"
    {...props}>
    <rect x="0" y="0" rx="12" ry="12" width="1636" height="118" />
    <path d="M 0 150 c 0 -6.627 5.373 -12 12 -12 h 508 c 6.627 0 12 5.373 12 12 v 226 c 0 6.627 -5.373 12 -12 12 H 12 c -6.627 0 -12 -5.373 -12 -12 V 150 z M 552 150 c 0 -6.627 5.373 -12 12 -12 h 508 c 6.63 0 12 5.373 12 12 v 226 c 0 6.627 -5.37 12 -12 12 H 564 c -6.627 0 -12 -5.373 -12 -12 V 150 z M 1104 150 c 0 -6.627 5.37 -12 12 -12 h 508 c 6.63 0 12 5.373 12 12 v 226 c 0 6.627 -5.37 12 -12 12 h -508 c -6.63 0 -12 -5.373 -12 -12 V 150 z M 0 420 c 0 -6.627 5.373 -12 12 -12 h 784 c 6.627 0 12 5.373 12 12 v 532 c 0 6.627 -5.373 12 -12 12 H 12 c -6.627 0 -12 -5.373 -12 -12 V 420 z M 1242 420 c 0 -6.627 5.37 -12 12 -12 h 370 c 6.63 0 12 5.373 12 12 v 532 c 0 6.627 -5.37 12 -12 12 h -370 c -6.63 0 -12 -5.373 -12 -12 V 420 z" />

    <path d="M 828 420 c 0 -6.627 5.373 -12 12 -12 h 370 c 6.63 0 12 5.373 12 12 v 532 c 0 6.627 -5.37 12 -12 12 H 840 c -6.627 0 -12 -5.373 -12 -12 V 420 z" />
    <path d="M 860 483 h 321 v -1 H 860 z" />
  </ContentLoader>
);

const DomesticTabletLoader = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="1540"
    viewBox="0 0 1200 1540"
    preserveAspectRatio="none"
    backgroundColor="#e4e4e4"
    foregroundColor="#f1f0f0"
    {...props}>
    <rect x="0" y="0" rx="12" ry="12" width="1200" height="118" />
    <path d="M 0 150 c 0 -6.627 5.373 -12 12 -12 h 363 c 6.627 0 12 5.373 12 12 v 226 c 0 6.627 -5.373 12 -12 12 H 12 c -6.627 0 -12 -5.373 -12 -12 V 150 z M 407 150 c 0 -6.627 5.373 -12 12 -12 h 362 c 6.627 0 12 5.373 12 12 v 226 c 0 6.627 -5.373 12 -12 12 H 419 c -6.627 0 -12 -5.373 -12 -12 V 150 z M 813 150 c 0 -6.627 5.373 -12 12 -12 h 363 c 6.63 0 12 5.373 12 12 v 226 c 0 6.627 -5.37 12 -12 12 H 825 c -6.627 0 -12 -5.373 -12 -12 V 150 z M 0 420 c 0 -6.627 5.373 -12 12 -12 h 769 c 6.627 0 12 5.373 12 12 v 532 c 0 6.627 -5.373 12 -12 12 H 12 c -6.627 0 -12 -5.373 -12 -12 V 420 z M 0 996 c 0 -6.627 5.373 -12 12 -12 h 1176 c 6.63 0 12 5.373 12 12 v 532 c 0 6.63 -5.37 12 -12 12 H 12 c -6.627 0 -12 -5.37 -12 -12 V 996 z" />
    <path d="M 32 1059 h 330 v -1 H 32 z" />
    <path d="M 813 420 c 0 -6.627 5.373 -12 12 -12 h 363 c 6.63 0 12 5.373 12 12 v 532 c 0 6.627 -5.37 12 -12 12 H 825 c -6.627 0 -12 -5.373 -12 -12 V 420 z" />
    <path d="M 845 483 h 314 v -1 H 845 z" />
  </ContentLoader>
);

const Domestic = () => {
  const [stockIndexData, setStockIndexData] = useState(null);
  const [topStockData, setTopStockData] = useState(null);
  const [exchangeRateData, setExchangeRateData] = useState(null);
  const [marketIndiData, setMarketIndiData] = useState(null);
  const [apiDone, setApiDone] = useState(false);

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
        }, 2000);
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
        setTopStockData(res.data);
      }
    };
    topStockFetch();
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
        setExchangeRateData(res.data);
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
        setMarketIndiData(res.data);
      }
    };
    marketIndiFetch();
    return () => (isApiSubscribed = false);
  }, []);

  useEffect(() => {
    if (stockIndexData && topStockData && exchangeRateData && marketIndiData) {
      setApiDone(true);
    }
  }, [stockIndexData, topStockData, exchangeRateData, marketIndiData]);

  return (
    <>
      {!apiDone ? (
        <>
          <Desktop>
            <DomesticDesktopLoader />
          </Desktop>
          <Tablet>
            <DomesticTabletLoader />
          </Tablet>
        </>
      ) : (
        <DomesticWrapper>
          <div className="row">
            <RecentStock />
          </div>
          <div className="row">
            {stockIndexData &&
              stockIndexData.items.map((item) => (
                <div className="col" key={item.id}>
                  <StockIndex type="domestic" data={item} />
                </div>
              ))}
          </div>
          <div className="row">
            <div className="col col2">
              {topStockData && <TopStock data={topStockData} />}
            </div>
            <div className="col">
              {exchangeRateData && <ExchangeRate data={exchangeRateData} />}
            </div>
            <div className="col">
              {marketIndiData && <MarketIndi data={marketIndiData} />}
            </div>
          </div>
          <StorageInput type="recent" />

          <FinanceNews type="domestic" data={financeNewsData} />
        </DomesticWrapper>
      )}
    </>
  );
};

export default Domestic;
