import numberWithComma from "@utils/numberWithComma";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";
import React, { useMemo } from "react";
import { ComparisonCardsListWrapper } from "./style";
const ComparisonCardsList = () => {
  return (
    <ComparisonCardsListWrapper>
      <ComparisonCard name="파라소닉" prevPrice={10000} curPrice={8000} />
      <ComparisonCard name="파라소닉" prevPrice={5000} curPrice={6000} />
      <ComparisonCard name="파라소닉" prevPrice={8000} curPrice={7000} />
      <ComparisonCard name="파라소닉" prevPrice={300} curPrice={300} />
      <ComparisonCard name="파라소닉" prevPrice={700} curPrice={860} />
      <ComparisonCard name="파라소닉" prevPrice={8000} curPrice={7000} />
    </ComparisonCardsListWrapper>
  );
};

const ComparisonCard = ({ name, prevPrice, curPrice }) => {
  const percent = useMemo(() => {
    return prevPrice <= curPrice
      ? (100 - (prevPrice / curPrice) * 100).toFixed(2)
      : (100 - (curPrice / prevPrice) * 100).toFixed(2);
  }, [prevPrice, curPrice]);
  return (
    <div className="card">
      <div className="card-title">{name}</div>
      <div
        className={
          prevPrice === curPrice
            ? "card-content"
            : prevPrice > curPrice
            ? "card-content down"
            : "card-content up"
        }>
        <div className="price">{numberWithComma(curPrice)}</div>
        <div className="moving">
          <img
            src={
              prevPrice === curPrice
                ? stock_none
                : prevPrice > curPrice
                ? stock_down
                : stock_up
            }
          />
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default ComparisonCardsList;
