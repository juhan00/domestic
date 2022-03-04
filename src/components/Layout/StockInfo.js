import React from "react";
import { StockInfoStyle } from "./style";
import { NavLink } from "react-router-dom";

const InfoTable = () => {
  return (
    <StockInfoStyle>
      <section>
        <div className="stock">
          <div className="category">
            <div>
              <h1>삼성전자</h1>
              <span>005930</span>
            </div>
            <div>
              <h2>73100</h2>
              <div>
                {/* 음수, 양수에 따라 2가지 전환 */}
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.631 0H0.368959C0.061159 0 -0.110709 0.392476 0.0799082 0.660416L5.21095 7.84575C5.35782 8.05142 5.64062 8.05142 5.78905 7.84575L10.9201 0.660416C11.1107 0.392476 10.9388 0 10.631 0Z"
                    fill="#1B61D1"
                  />
                </svg>
                <span>300</span>
              </div>
              <span>-0.41%</span>
            </div>
          </div>
          <div>time</div>
        </div>
        <div className="closingPrice price">
          <div>
            <span>전일</span>
            <h2>73400</h2>
          </div>
          <div>
            <span>시가</span>
            <h2>73400</h2>
          </div>
        </div>
        <div className="nowPrice price">
          <div>
            <span>고가</span>
            <h2>73800</h2>
          </div>
          <div>
            <span>저가</span>
            <h2>72800</h2>
          </div>
        </div>
        <div className="tradingVolume">
          <div>
            <span>거래량</span>
            <strong>865344(74%)</strong>
          </div>
          <div>
            <span>거래대금</span>
            <strong>632563백만</strong>
          </div>
        </div>
      </section>
      <nav>
        <NavLink to="/domestic/dofinancial">주식뉴스분석</NavLink>
        <NavLink to="/domestic/cominfo">기업정보</NavLink>
        <NavLink to="/domestic/statistics">재무데이터</NavLink>
        <NavLink to="/domestic/disclosure">기업공시</NavLink>
        <NavLink to="/domestic/beta">통계</NavLink>
      </nav>
    </StockInfoStyle>
  );
};

export default InfoTable;
