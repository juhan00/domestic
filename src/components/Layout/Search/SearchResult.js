import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

const SearchResult = ({
  keyword,
  domesticList,
  globalList,
  onClickDomestic,
  onClickGlobal,
  location,
}) => {
  const secondTarget = useMemo(() => {
    let target = "";
    if (location.includes("cominfo")) {
      target = "cominfo";
    } else if (location.includes("disclosure")) {
      target = "disclosure";
    } else if (location.includes("beta")) {
      target = "beta";
    } else if (location.includes("correlation")) {
      target = "correlation";
    } else if (location.includes("statistics")) {
      target = "statistics";
    } else {
      target = "financial";
    }
    return target;
  }, [location]);

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
        {domesticList
          .filter((list) => {
            if (keyword == "") {
              return list;
            } else if (
              list.crno.toLowerCase().includes(keyword.toLowerCase()) ||
              list.itmsNm.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return list;
            }
          })
          .map((list) => (
            <li className="searchResultItem" key={list.crno}>
              <NavLink
                to={`domestic/${secondTarget}/${list.crno}`}
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
        {globalList
          .filter((list) => {
            if (keyword == "") {
              return list;
            } else if (
              list.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
              list.companyName.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return list;
            }
          })
          .map((list) => (
            <li className="searchResultItem" key={list.symbol}>
              <NavLink
                to={`global/${secondTarget}/${list.symbol}`}
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
