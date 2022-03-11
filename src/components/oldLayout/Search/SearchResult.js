import React, { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { clickOutside } from "../../../utils/clickOutside";

export const SearchResult = ({
  keyword,
  domesticList,
  globalList,
  onClick,
}) => {
  const ref = useRef();
  // const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const firstTarget = useMemo(() => {
    let target = "";
    if (location.pathname.includes("domestic")) {
      target = "domestic";
    } else if (location.pathname.includes("global")) {
      target = "global";
    }
    return target;
  }, [location]);
  // home에서는 드롭다운 옵션 선택값에 따라 주소를 넣어줘야 하는데...?  어떻게?

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
    } else {
      target = "financial";
    }
    return target;
  }, [location]);
  // 일단 당장은 작동하긴 하는데...  else 로 인해 뭐만하면 financial 페이지로 보내버릴까봐 걱정...
  // domestic이 포함되면 domestic url을 유지해주면서 그와 동시에,
  // 만약 domestic 뒤에 아무 글자가 없다면(검색전이라면) financial로 보내주는 조건을 작성하는 방법은 없을끼?
  // 그리고 재무데이터들은...  라우트 종속 관계 때문에 domestic/statistics/{심볼}/balance 이런식으로 되는데... 우쨔지?

  // clickOutside(ref, isOpen, setIsOpen);

  if (location.pathname.includes("domestic")) {
    return (
      <ul className="searchResultList">
        {domesticList
          .filter((list) => {
            if (keyword == "") {
              return list;
            } else if (
              list.crno.toLowerCase().includes(keyword.toLowerCase()) ||
              list.itmsNm.includes(keyword)
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
