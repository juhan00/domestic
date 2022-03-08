import React, { useCallback, useState } from "react";
import { MainStockSectorWraper } from "./style";
const initialSectorData = () => [
  {
    name: "S&P 500",
    rate: "+25.31%",
  },
  {
    name: "Russell 2000",
    rate: "+25.31%",
  },
  {
    name: "Gold",
    rate: "+25.31%",
  },
  {
    name: "Oil",
    rate: "+25.31%",
  },
  {
    name: "Tech",
    rate: "+25.31%",
  },
  {
    name: "Energy",
    rate: "+25.31%",
  },
  {
    name: "Financial",
    rate: "+25.31%",
  },
  {
    name: "Discretionary",
    rate: "+25.31%",
  },
  {
    name: "Staples",
    rate: "+25.31%",
  },
  {
    name: "Materials",
    rate: "+25.31%",
  },
  {
    name: "Industrials",
    rate: "+25.31%",
  },
  {
    name: "Health Care",
    rate: "+25.31%",
  },
  {
    name: "Utilities",
    rate: "+25.31%",
  },
];

const MainStockSector = () => {
  const [sectorData, setSectorData] = useState(initialSectorData);

  return (
    <MainStockSectorWraper>
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
          {sectorData.map((data, index) => (
            <tr key={index}>
              <td className="alignL">{data.name}</td>
              <td className="alignR">{data.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainStockSectorWraper>
  );
};

export default MainStockSector;
