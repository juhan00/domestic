import React from "react";
import { StockInfoStyle } from "./style";
import MenuIconToggle from "@images/menuicon_toggle.svg";

const InfoTable = () => {
  return (
    <StockInfoStyle>
      <div className="stockInfoContainer">
        <div className="stockInfoWrapper">
          <ul>
            <li>
              <div>
                <h3>삼성전자</h3>
                <img src={MenuIconToggle} />
                <sapn>005930</sapn>
              </div>
              <div>
                전일가<span className="price">74300</span>
                <sapn className="date">2022.2.28기준</sapn>
              </div>
            </li>
            <li>
              <div className="provider"></div>
            </li>
            <li>
              <div className="infoTItle">상장주식수</div>
              <div className="infoValue">5969782550</div>
            </li>
            <li>
              <div className="infoTItle">거래소</div>
              <div className="infoValue">KOSPI</div>
            </li>
            <li>
              <div className="infoTItle">시가총액</div>
              <div className="infoValue">2516263</div>
            </li>
            <li>
              <div className="provider"></div>
            </li>
            <li>
              <div className="infoTItle">52주 최저</div>
              <div className="infoValue">36850</div>
            </li>
            <li>
              <div className="infoTItle">52주 최고</div>
              <div className="infoValue">54140</div>
            </li>
            <li>
              <div className="provider"></div>
            </li>
            <li>
              <div className="infoTItle">PER</div>
              <div className="infoValue">7.78</div>
            </li>
            <li>
              <div className="infoTItle">EPS(FNGUIDE)</div>
              <div className="infoValue">5,421</div>
            </li>
            <li>
              <div className="infoTItle">PER</div>
              <div className="infoValue">7.03</div>
            </li>
            <li>
              <div className="infoTItle">EPS(KRX)</div>
              <div className="infoValue">5,667</div>
            </li>
            <li>
              <div className="infoTItle">추정PER</div>
              <div className="infoValue">9</div>
            </li>
            <li>
              <div className="infoTItle">추정EPS</div>
              <div className="infoValue">4,858</div>
            </li>
          </ul>
        </div>
      </div>
    </StockInfoStyle>
  );
};

export default InfoTable;
