import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    let isComponentMounted = true;
    const fetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/domesticRecap.json",
      );
      if (isComponentMounted) {
        setData(res.data.domestic);
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
          if (item.crno === `${stockId}`) {
            return item;
          }
        })
        .map((item) => (
          <div key={item.crno}>
            <div className="stockInfoWrapper">
              <ul>
                <li>
                  <div className="stockName">
                    <h3>{item.itmsNm}</h3>
                    <span>{item.crno}</span>
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
                  <div className="infoValue">
                    {numberWithCommas(item.exStock)}
                  </div>
                </li>
                <li>
                  <div className="infoTitle">시가총액</div>
                  <div className="infoValue">
                    {numberWithCommas(item.marketCap)}
                    <span>억원</span>
                  </div>
                </li>
                <li>
                  <div className="provider"></div>
                </li>
                <li>
                  <div className="infoTitle">52주 최저</div>
                  <div className="infoValue">{numberWithCommas(68300)}</div>
                </li>
                <li>
                  <div className="infoTitle">52주 최고</div>
                  <div className="infoValue">{numberWithCommas(86200)}</div>
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
                <span className="source">출처 : 에프앤가이드</span>
              </div>
              <div className="recap">{item.recap}</div>
              <ul>
                <li>
                  <div className="infoTitle">EPS</div>
                  <div className="infoValue">
                    {numberWithCommas(item.EPS)}
                    <span>원</span>
                  </div>
                </li>
                <li>
                  <div className="infoTitle">BPS</div>
                  <div className="infoValue">
                    {numberWithCommas(item.BPS)}
                    <span>원</span>
                  </div>
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
                      <div className="infoTitle">배당수익률</div>
                      <div className="infoValue">
                        {item.dividendYield}
                        <span>%</span>
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
                  <div className="infoTitle">ROE</div>
                  <div className="infoValue">
                    20.3
                    <span>%</span>
                  </div>
                </li>
              </ul>
            </MoreInfoContainer>
          </div>
        ))}
    </StockInfoContainer>
  );
};

export default StockInfo;
