import React from "react";
import { ListWraper } from "./style";

function TopStockList({ topData }) {
  return (
    <ListWraper>
      {topData.map((data, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>{data.currentPrice}</td>
          <td>{data.compare}</td>
          <td>{data.rate}</td>
          <td>{data.trading}</td>
        </tr>
      ))}
    </ListWraper>
  );
}

export default TopStockList;
