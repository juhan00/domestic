import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

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

export const Search = () => {
  // const searchRef = useRef(null);
  const [searchItem, setSearchItem] = useState("");
  const [focused, setFocused] = useState(false);
  const handleItem = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <div className="searchContainer">
        <div className="searchFormWrapper">
          <form>
            <input
              placeholder="종목명/지수명 검색"
              onChange={handleItem}
              value={searchItem}
              onFocus={() => setFocused(true)}
              // onBlur={() => setFocused(false)}
              // 리스트 클릭하는 순간 블러 처리가 되는 것인지, link 이동이 안됨.  다른 방식으로 포커스 아웃 방법 찾을 것
            />
          </form>
        </div>
        <div
          className={
            focused ? "seachResultWrapper" : "seachResultWrapper hide"
          }>
          <ul className="searchResultList">
            {stockListSample
              .filter((list) => {
                if (searchItem == "") {
                  return list;
                } else if (
                  list.symbol
                    .toLowerCase()
                    .includes(searchItem.toLowerCase()) ||
                  list.companyName
                    .toLowerCase()
                    .includes(searchItem.toLowerCase())
                ) {
                  return list;
                }
              })
              .map((list) => (
                <li className="serachResultItem">
                  <NavLink to={`${list.symbol}/domestic`}>
                    <span>{list.symbol}</span> | {list.companyName} |{" "}
                    {list.HQnation}{" "}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Search;
