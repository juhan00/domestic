import React, { useRef, useState } from "react";
import { clickOutside } from "@utils/clickOutside";
import { SearchMenuStyleOnHeader } from "./style";

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
  const ref = useRef();
  const [searchItem, setSearchItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleItem = (e) => {
    setSearchItem(e.target.value);
  };

  clickOutside(ref, isOpen, setIsOpen);

  return (
    <SearchMenuStyleOnHeader>
      <div className="searchContainer" ref={ref}>
        <div className="searchFormWrapper">
          <form>
            <span>TICKER X-AXIS</span>
            <input
              placeholder="Enter a TICKER"
              onChange={handleItem}
              value={searchItem}
              onFocus={() => setIsOpen(true)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
              <path d="M17 16.5L13.2223 12.7156M15.3158 7.65789C15.3158 9.55629 14.5617 11.3769 13.2193 12.7193C11.8769 14.0617 10.0563 14.8158 8.15789 14.8158C6.2595 14.8158 4.43886 14.0617 3.0965 12.7193C1.75413 11.3769 1 9.55629 1 7.65789C1 5.7595 1.75413 3.93886 3.0965 2.5965C4.43886 1.25413 6.2595 0.5 8.15789 0.5C10.0563 0.5 11.8769 1.25413 13.2193 2.5965C14.5617 3.93886 15.3158 5.7595 15.3158 7.65789Z" stroke="#5FB6AD" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </form>
        </div>
        <div
          className={isOpen ? "seachResultWrapper" : "seachResultWrapper hide"}>
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
                <li className="serachResultItem" key={list.symbol}>
                  <span>{list.symbol}</span> | {list.companyName} |{" "}
                  {list.HQnation}{" "}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </SearchMenuStyleOnHeader>
  );
};

export default Search;
