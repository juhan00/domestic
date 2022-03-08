import React, { useCallback, useState } from "react";
import { MajorStockWrapper } from "./style";
import question_mark_icon from "@images/question_mark_icon.svg";

const initialData = () => [
  {
    nation: "미국",
    indexName: "다우산업",
    currentPrice: "34,058.75",
    vs: "57.63",
    rate: "+25.31%",
    time: "02.25 13:33",
  },
  {
    nation: "미국",
    indexName: "다우산업",
    currentPrice: "34,058.75",
    vs: "57.63",
    rate: "+25.31%",
    time: "02.25 13:33",
  },
  {
    nation: "미국",
    indexName: "다우산업",
    currentPrice: "34,058.75",
    vs: "57.63",
    rate: "+25.31%",
    time: "02.25 13:33",
  },
  {
    nation: "미국",
    indexName: "다우산업",
    currentPrice: "34,058.75",
    vs: "57.63",
    rate: "+25.31%",
    time: "02.25 13:33",
  },
  {
    nation: "미국",
    indexName: "다우산업",
    currentPrice: "34,058.75",
    vs: "57.63",
    rate: "+25.31%",
    time: "02.25 13:33",
  },
  {
    nation: "미국",
    indexName: "다우산업",
    currentPrice: "34,058.75",
    vs: "57.63",
    rate: "+25.31%",
    time: "02.25 13:33",
  },
];

const MainMajorStock = () => {
  const [majorData, setMajorData] = useState(initialData);

  return (
    <MajorStockWrapper>
      <div className="top" style={{ display: "flex" }}>
        <h2>해외주요지수</h2>
        <span>현지시간 기준</span>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>국가명</th>
            <th style={{ width: "20%" }}>지수명</th>
            <th style={{ width: "15%" }}>현재가</th>
            <th style={{ width: "15%" }}>전일비</th>
            <th style={{ width: "15%" }}>등락률</th>
            <th style={{ width: "15%" }}>시간</th>
          </tr>
        </thead>
        <tbody>
          {majorData.map((data, index) => (
            <tr key={index}>
              <td>{data.nation}</td>
              <td>{data.indexName}</td>
              <td className="red">{data.currentPrice}</td>
              <td className="red">{data.vs}</td>
              <td className="red">{data.rate}</td>
              <td>{data.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MajorStockWrapper>
  );
};

export default MainMajorStock;
