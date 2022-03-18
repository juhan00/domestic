import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

const SearchResult = ({
  keyword,
  domesticFiltered,
  globalFiltered,
  onClickDomestic,
  onClickGlobal,
  targetUrl,
  location,
}) => {
  const hilighting = (text) => {
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === keyword.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          ),
        )}
      </>
    );
  };

  const DomesticResultList = () => {
    return (
      <ul className="searchResultList">
        {domesticFiltered.map((list) => (
          <li className="searchResultItem" key={list.crno}>
            <NavLink
              to={
                location.includes("beta") || location.includes("correlation")
                  ? `domestic/${targetUrl}/${list.crno}?005930`
                  : `domestic/${targetUrl}/${list.crno}`
              }
              onClick={() => onClickDomestic(list.itmsNm, list.crno)}>
              <span>{hilighting(list.itmsNm)}</span> | {hilighting(list.crno)}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  const GlobalResultList = () => {
    return (
      <ul className="searchResultList">
        {globalFiltered.map((list) => (
          <li className="searchResultItem" key={list.symbol}>
            <NavLink
              to={
                location.includes("beta") || location.includes("correlation")
                  ? `global/${targetUrl}/${list.symbol}?aapl`
                  : `global/${targetUrl}/${list.symbol}`
              }
              onClick={() => onClickGlobal(list.symbol)}>
              <span>{hilighting(list.symbol)}</span> |
              {hilighting(list.companyName)} | {list.HQnation}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  if (location.includes("domestic")) {
    return <DomesticResultList />;
  } else if (location.includes("global")) {
    return <GlobalResultList />;
  } else {
    return (
      <>
        <DomesticResultList />
        <GlobalResultList />
      </>
    );
  }
};

export default SearchResult;
