import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SearchResult = ({
  keyword,
  domesticList,
  globalList,
  onClick,
  location,
  sellcted,
}) => {
  const firstTarget = useMemo(() => {
    let target = "";
    if (location.includes("domestic")) {
      target = "domestic";
    } else if (location.includes("global")) {
      target = "global";
    } else {
      // 홈의 경우 일단 국내로 이동.  옵션 선택에 따라 변경되도록 수정할 예정
      target = "domestic";
    }
    return target;
  }, [location]);

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

  if (location.includes("domestic") || sellcted == "domestic") {
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
                to={`${firstTarget}/${secondTarget}/${list.crno}`}
                onClick={onClick}>
                <span>{list.itmsNm}</span> | {list.crno}
              </NavLink>
            </li>
          ))}
      </ul>
    );
  } else if (location.includes("global") || sellcted == "global") {
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
                to={`${firstTarget}/${secondTarget}/${list.symbol}`}
                onClick={onClick}>
                <span>{list.symbol}</span> | {list.companyName} |{" "}
                {list.HQnation}
              </NavLink>
            </li>
          ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default SearchResult;
