import React, { useMemo, useRef, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { clickOutside } from "../../../utils/clickOutside";

const stockListSample = [
  { symbol: "A", companyName: "AAA INC", HQnation: "US" },
  { symbol: "AA", companyName: "AAA INC", HQnation: "US" },
  { symbol: "AB", companyName: "AAA INC", HQnation: "US" },
  { symbol: "ABC", companyName: "AAA INC", HQnation: "US" },
  { symbol: "A2", companyName: "AAA INC", HQnation: "US" },
  { symbol: "B", companyName: "BBB INC", HQnation: "US" },
  { symbol: "BA", companyName: "AAA INC", HQnation: "US" },
  { symbol: "BCSRAW", companyName: "AAA INC", HQnation: "US" },
  { symbol: "C", companyName: "CCC INC", HQnation: "US" },
  { symbol: "D", companyName: "DDD INC", HQnation: "US" },
  { symbol: "E", companyName: "EEE INC", HQnation: "US" },
  { symbol: "F", companyName: "FFF INC", HQnation: "US" },
  { symbol: "G", companyName: "GGG INC", HQnation: "US" },
  { symbol: "H", companyName: "HHH INC", HQnation: "US" },
  { symbol: "I", companyName: "III INC", HQnation: "US" },
  { symbol: "J", companyName: "JJJ INC", HQnation: "US" },
  { symbol: "K", companyName: "KKK INC", HQnation: "US" },
  { symbol: "L", companyName: "LLL INC", HQnation: "US" },
  { symbol: "M", companyName: "MMM INC", HQnation: "US" },
  { symbol: "N", companyName: "NNN INC", HQnation: "US" },
  { symbol: "O", companyName: "OOO INC", HQnation: "US" },
  { symbol: "P", companyName: "PPP INC", HQnation: "US" },
  { symbol: "Q", companyName: "QAQ INC", HQnation: "US" },
  { symbol: "R", companyName: "RRR INC", HQnation: "US" },
  { symbol: "S", companyName: "SSS INC", HQnation: "US" },
  { symbol: "T", companyName: "TAT INC", HQnation: "US" },
  { symbol: "U", companyName: "UUU INC", HQnation: "US" },
  { symbol: "V", companyName: "VVV INC", HQnation: "US" },
  { symbol: "W", companyName: "WWW INC", HQnation: "US" },
  { symbol: "X", companyName: "XXX INC", HQnation: "US" },
  { symbol: "Y", companyName: "YYY INC", HQnation: "US" },
  { symbol: "Z", companyName: "ZAZ INC", HQnation: "US" },
];

export const SearchResult = ({ keyword }) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

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

  clickOutside(ref, isOpen, setIsOpen);

  return (
    <ul className="searchResultList">
      {stockListSample
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
            <NavLink to={`${firstTarget}/${secondTarget}/${list.symbol}`}>
              <span>{list.symbol}</span> | {list.companyName} | {list.HQnation}{" "}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default SearchResult;
