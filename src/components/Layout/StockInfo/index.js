import React, { useRef, useState } from "react";
import { StockInfoStyle } from "./style";
import MenuIconToggle from "@images/menuicon_toggle.svg";
import { clickOutside } from "@utils/clickOutside";
import numberWithCommas from "@utils/numberWithComma";

const InfoTable = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  clickOutside(ref, isOpen, setIsOpen);
  return (
    <StockInfoStyle>
      <div className="stockInfoContainer">
        <div className="stockInfoWrapper">
          <ul>
            <li>
              <div className="stockName">
                <h3>삼성전자</h3>
                <img src={MenuIconToggle} onClick={toggle} />
                <span>005930</span>
              </div>
              {/* <div
                className={isOpen ? "stockRecap" : "stockRecap hide"}
                ref={ref}>
                <span className="title">기업개요</span> 한국 및 CE, IM부문 해외
                9개 지역총괄과 DS부문 해외 5개 지역총괄, Harman 등 234개의
                종속기업으로 구성된 글로벌 전자기업임. 세트사업에는 TV, 냉장고
                등을 생산하는 CE부문과 스마트폰, 네트워크시스템, 컴퓨터 등을
                생산하는 IM부문이 있음. 부품사업(DS부문)에서는 D램, 낸드 플래쉬,
                모바일AP 등의 제품을 생산하는 반도체 사업과 TFT-LCD 및 OLED
                디스플레이 패널을 생산하는 DP사업으로 구성됨.{" "}
                <span className="source">출처 : 에프앤가이드</span>
              </div> */}
              <div className="stockPrice">
                전일가<span className="price">{numberWithCommas(74300)}</span>
                <sapn className="date">2022.2.28기준</sapn>
              </div>
            </li>
            <li>
              <div className="provider"></div>
            </li>
            <li>
              <div className="infoTItle">상장주식수</div>
              <div className="infoValue">{numberWithCommas(5969782550)}</div>
            </li>
            <li>
              <div className="infoTItle">거래소</div>
              <div className="infoValue">KOSPI</div>
            </li>
            <li>
              <div className="infoTItle">시가총액</div>
              <div className="infoValue">{numberWithCommas(2516263)}</div>
            </li>
            <li>
              <div className="provider"></div>
            </li>
            <li>
              <div className="infoTItle">52주 최저</div>
              <div className="infoValue">{numberWithCommas(36850)}</div>
            </li>
            <li>
              <div className="infoTItle">52주 최고</div>
              <div className="infoValue">{numberWithCommas(54140)}</div>
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
