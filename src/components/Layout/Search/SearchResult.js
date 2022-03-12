import React, { useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";

const SearchResult = ({ keyword, domesticList, globalList, onClick }) => {
  const location = useLocation();

  const firstTarget = useMemo(() => {
    let target = "";
    if (location.pathname.includes("domestic")) {
      target = "domestic";
    } else if (location.pathname.includes("global")) {
      target = "global";
    } else {
      // 홈의 경우 일단 국내로 이동.  옵션 선택에 따라 변경되도록 수정할 예정
      target = "domestic";
    }
    return target;
  }, [location]);

  const secondTarget = useMemo(() => {
    let target = "";
    if (location.pathname.includes("cominfo")) {
      target = "cominfo";
    } else if (location.pathname.includes("disclosure")) {
      target = "disclosure";
    } else if (location.pathname.includes("beta")) {
      target = "beta";
    } else if (location.pathname.includes("correlation")) {
      target = "correlation";
    } else if (location.pathname.includes("statistics")) {
      target = "statistics";
    } else {
      target = "financial";
    }
    return target;
  }, [location]);

  if (location.pathname.includes("domestic")) {
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
  } else if (location.pathname.includes("global")) {
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
