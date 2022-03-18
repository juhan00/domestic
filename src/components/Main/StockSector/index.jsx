import React, { useCallback, useState } from "react";
import { StockSectorWrapper } from "./style";
import HashLoader from "react-spinners/HashLoader";

export const StockSectorLoader = () => {
  return (
    <StockSectorWrapper>
      <div className="hash_loader_wrapper">
        <HashLoader color={"#48a185"} size={50} />
      </div>
    </StockSectorWrapper>
  );
};

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
          {sectorData.map((item, index) =>
            Math.sign(item.rate) === 1 ? (
              <tr key={item.id}>
                <td className="alignL">{item.id}</td>
                <td className="alignR up">+{item.rate.toFixed(2)}</td>
              </tr>
            ) : Math.sign(item.rate) === -1 ? (
              <tr key={item.id}>
                <td className="alignL">{item.id}</td>
                <td className="alignR down">{item.rate.toFixed(2)}</td>
              </tr>
            ) : (
              <tr key={item.id}>
                <td className="alignL">{item.id}</td>
                <td className="alignR">{item.rate.toFixed(2)}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </StockSectorWrapper>
  );
};

export default StockSector;
