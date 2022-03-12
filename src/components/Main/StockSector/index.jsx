import React, { useCallback, useState } from "react";
import { StockSectorWrapper } from "./style";
// const initialSectorData = () => [
//   {
//     id: "S&P 500",
//     rate: "+25.31%",
//   },
//   {
//     id: "Russell 2000",
//     rate: "+25.31%",
//   },
//   {
//     id: "Gold",
//     rate: "+25.31%",
//   },
//   {
//     id: "Oil",
//     rate: "+25.31%",
//   },
//   {
//     id: "Tech",
//     rate: "+25.31%",
//   },
//   {
//     id: "Energy",
//     rate: "+25.31%",
//   },
//   {
//     id: "Financial",
//     rate: "+25.31%",
//   },
//   {
//     id: "Discretionary",
//     rate: "+25.31%",
//   },
//   {
//     id: "Staples",
//     rate: "+25.31%",
//   },
//   {
//     id: "Materials",
//     rate: "+25.31%",
//   },
//   {
//     id: "Industrials",
//     rate: "+25.31%",
//   },
//   {
//     id: "Health Care",
//     rate: "+25.31%",
//   },
//   {
//     id: "Utilities",
//     rate: "+25.31%",
//   },
// ];

const StockSector = ({ data }) => {
  const [sectorData, setSectorData] = useState(data.items);

  return (
    <StockSectorWrapper>
      <div className="top" style={{ display: "flex" }}>
        <h2>분야</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "70%" }} className="alignL">
              요인
            </th>
            <th style={{ width: "30%" }} className="alignR">
              등락률
            </th>
          </tr>
        </thead>
        <tbody>
          {sectorData.map((item, index) => (
            <tr key={index}>
              <td className="alignL">{item.id}</td>
              <td className="alignR">{item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StockSectorWrapper>
  );
};

export default StockSector;
