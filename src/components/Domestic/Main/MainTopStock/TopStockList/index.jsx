import React from "react";
import { ListWraper } from "./style";

const TopStockList = ({ topData }) => {
  return (
    <ListWraper>
      {topData.map((data, index) => (
        <tr key={index}>
          <td className="primary">{index + 1}</td>
          <td>{data.name}</td>
          <td className="red">{data.currentPrice}</td>
          <td className="red">{data.compare}</td>
          <td>{data.rate}</td>
          <td>{data.trading}</td>
        </tr>
      ))}
    </ListWraper>
  );
};

export default TopStockList;
