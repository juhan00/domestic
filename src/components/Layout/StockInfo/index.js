import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  StockInfoContainer,
  MoreInfoContainer,
} from "@components/Layout/StockInfo/style";
import Toggle from "@images/icon_toggle.svg";
import { clickOutside } from "@utils/clickOutside";
import numberWithCommas from "@utils/numberWithComma";
import { useLocation, useParams } from "react-router-dom";
import axios from "redaxios";

const StockInfo = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const location = useLocation().pathname;
  const stockId = useParams().stockId;

  const targetUrl = useMemo(() => {
    let target = "";
    if (location.includes("domestic")) {
      target = "domestic";
    } else if (location.includes("global")) {
      target = "global";
    }
    return target;
  });

  useEffect(() => {
    let isComponentMounted = true;
    const fetch = async () => {
      const res = await axios.get(
        `https://juhan00.github.io/domestic_api/${targetUrl}Recap.json`,
      );
      if (isComponentMounted) {
        location.includes("domestic")
          ? setData(res.data.domestic)
          : setData(res.data.global);
      }
    };
    fetch();
    return () => {
      isComponentMounted = false;
    };
  }, [stockId]);

  clickOutside(ref, isOpen, setIsOpen);

  return (
    <StockInfoContainer ref={ref}>
      {data
        .filter((item) => {
          if (item.id === `${stockId}`) {
            return item;
          }
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <div className="stockInfoWrapper">
                <ul>
                  <li>
                    <div className="stockName">
                      <h3>{item.name}</h3>
                      <span>{item.id}</span>
                    </div>
                    <div className="stockPrice">
                      전일가
                      <span className="price">
                        {numberWithCommas(item.price)}
                      </span>
                      <div className="marketType">{item.type}</div>
                      <span className="date">{item.date}기준</span>
                    </div>
                  </li>
                  <li>
                    <div className="provider"></div>
                  </li>
                  <li>
                    <div className="infoTitle">상장주식수</div>
                    {location.includes("domestic") ? (
                      <div className="infoValue">
                        {numberWithCommas(item.exStock)}
                      </div>
                    ) : (
                      <div className="infoValue">
                        {numberWithCommas(item.exStock)}
                        <span>M</span>
                      </div>
                    )}
                  </li>
                  <li>
                    <div className="infoTitle">시가총액</div>
                    {location.includes("domestic") ? (
                      <div className="infoValue">
                        {numberWithCommas(item.marketCap)}
                        <span>억원</span>
                      </div>
                    ) : (
                      <div className="infoValue">
                        {numberWithCommas(item.marketCap)}
                        <span>B</span>
                      </div>
                    )}
                  </li>
                  <li>
                    <div className="provider"></div>
                  </li>
                  <li>
                    <div className="infoTitle">52주 최저</div>
                    <div className="infoValue">
                      {numberWithCommas(item.low52weeks)}
                    </div>
                  </li>
                  <li>
                    <div className="infoTitle">52주 최고</div>
                    <div className="infoValue">
                      {numberWithCommas(item.high52weeks)}
                    </div>
                  </li>
                </ul>
                <div className="toggle" onClick={handleToggle}>
                  더보기 <img src={Toggle} alt="토글버튼" />
                </div>
              </div>
              <MoreInfoContainer
                className={isOpen ? "moreInfo" : "moreInfo hide"}>
                <div>
                  <span className="title">기업정보</span>
                  <span className="source">
                    {location.includes("domestic")
                      ? "출처 : 에프앤가이드"
                      : "출처 : tiingo"}
                  </span>
                </div>
                <div className="recap">{item.recap}</div>
                <ul>
                  <li>
                    <div className="infoTitle">EPS</div>
                    {location.includes("domestic") ? (
                      <div className="infoValue">
                        {numberWithCommas(item.EPS)}
                        <span>원</span>
                      </div>
                    ) : (
                      <div className="infoValue">
                        <span>$ </span>
                        {numberWithCommas(item.EPS)}
                      </div>
                    )}
                  </li>
                  <li>
                    <div className="infoTitle">BPS</div>
                    {location.includes("domestic") ? (
                      <div className="infoValue">
                        {numberWithCommas(item.BPS)}
                        <span>원</span>
                      </div>
                    ) : (
                      <div className="infoValue">
                        <span>$ </span>
                        {numberWithCommas(item.BPS)}
                      </div>
                    )}
                  </li>
                  <li>
                    <div className="infoTitle">PER</div>
                    <div className="infoValue">
                      {item.PER}
                      <span>배</span>
                    </div>
                  </li>
                  {location.includes("domestic") ? (
                    <>
                      <li>
                        <div className="infoTitle">동일업종 PER</div>
                        <div className="infoValue">
                          {item.categoryPER}
                          <span>배</span>
                        </div>
                      </li>
                      <li>
                        <div className="infoTitle">동일업종 등락률</div>
                        <div className="infoValue">
                          {item.categoryRate}
                          <span>%</span>
                        </div>
                      </li>
                    </>
                  ) : null}
                  <li>
                    <div className="infoTitle">배당수익률</div>
                    <div className="infoValue">
                      {item.divYield}
                      <span>{item.divYield === "N/A" ? "" : "%"}</span>
                    </div>
                  </li>
                  <li>
                    <div className="infoTitle">ROE</div>
                    <div className="infoValue">
                      {item.ROE}
                      <span>%</span>
                    </div>
                  </li>
                </ul>
              </MoreInfoContainer>
            </div>
          );
        })}
    </StockInfoContainer>
  );
};

export default StockInfo;
