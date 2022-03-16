import React, { useCallback, useState } from "react";
import { MajorStockWrapper } from "./style";
import numberWithCommas from "@utils/numberWithComma";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";

const MajorStock = ({ data }) => {
  const [majorData, setMajorData] = useState(data.items);

  return (
    <MajorStockWrapper>
      <div className="top">
        <h2>해외주요지수</h2>
        <div className="date">2022.02.23 기준</div>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "15%" }}>국가명</th>
            <th style={{ width: "20%" }}>지수명</th>
            <th style={{ width: "15%" }}>현재가</th>
            <th style={{ width: "15%" }}>전일비</th>
            <th style={{ width: "15%" }}>등락률</th>
            <th style={{ width: "20%" }}>시간</th>
          </tr>
        </thead>
        <tbody>
          {majorData.map((item, index) =>
            Math.sign(item.rate) === 1 ? (
              <tr key={index}>
                <td className="primary">{item.nation}</td>
                <td>{item.indexName}</td>
                <td className="up">
                  {numberWithCommas(item.currentPrice.toFixed(2))}
                </td>
                <td className="up">
                  <img src={stock_up} alt="stock up" />
                  {item.vs.toFixed(2)}
                </td>
                <td className="up">+{item.rate.toFixed(2)}%</td>
                <td>{item.time}</td>
              </tr>
            ) : Math.sign(item.rate) === -1 ? (
              <tr key={index}>
                <td className="primary">{item.nation}</td>
                <td>{item.indexName}</td>
                <td className="down">
                  {numberWithCommas(item.currentPrice.toFixed(2))}
                </td>
                <td className="down">
                  <img src={stock_down} alt="stock down" />
                  {Math.abs(item.vs.toFixed(2))}
                </td>
                <td className="down">{item.rate.toFixed(2)}%</td>
                <td>{item.time}</td>
              </tr>
            ) : (
              <tr key={index}>
                <td className="primary">{item.nation}</td>
                <td>{item.indexName}</td>
                <td>{numberWithCommas(item.currentPrice.toFixed(2))}</td>
                <td>
                  <img src={stock_none} alt="stock none" />
                  {item.vs.toFixed(2)}
                </td>
                <td>{item.rate.toFixed(2)}%</td>
                <td>{item.time}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </MajorStockWrapper>
  );
};

export default MajorStock;
