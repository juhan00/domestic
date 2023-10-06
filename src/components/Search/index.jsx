import React, { useRef, useState, useEffect, useMemo } from "react";
import { clickOutside } from "@utils/clickOutside";
import { SearchMenuStyleOnHeader } from "./style";
import axios from "redaxios";
import { useLocation, useParams, useNavigate } from "react-router-dom";

export const Search = () => {
  const ref = useRef();
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const [domesticList, setDomesticList] = useState([]);
  const [globalList, setGlobalList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleItem = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      const domesticData = await axios.get(
        "https://juhan00.github.io/domestic_api/doList.json",
      );
      const globalData = await axios.get(
        "https://juhan00.github.io/domestic_api/goList.json",
      );
      if (isComponentMounted) {
        setDomesticList(domesticData.data.domestic);
        setGlobalList(globalData.data.global);
      }
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    };
  }, []);

  const domesticFiltered = useMemo(() => {
    let filtered = [];
    domesticList.filter((list) => {
      if (
        list.crno.toLowerCase().includes(searchItem.toLowerCase()) ||
        list.itmsNm.toLowerCase().includes(searchItem.toLowerCase())
      ) {
        filtered.push(list);
      }
    });
    return filtered;
  }, [searchItem, domesticList]);
  const globalFiltered = useMemo(() => {
    let filtered = [];
    globalList.filter((list) => {
      if (
        list.symbol.toLowerCase().includes(searchItem.toLowerCase()) ||
        list.companyName.toLowerCase().includes(searchItem.toLowerCase())
      ) {
        filtered.push(list);
      }
    });
    return filtered;
  }, [searchItem, globalList]);

  const handleClick = (id) => {
    setIsOpen(false);
    setSearchItem("");
    navigate(`${location}?${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.includes("domestic")) {
      if (domesticFiltered.length >= 1) {
        console.log(domesticFiltered[0].crno);
      } else if (domesticFiltered.length === 0) {
        null;
      }
    } else if (location.includes("global")) {
      if (globalFiltered.length >= 1) {
        console.log(globalFiltered[0].crno);
      } else if (globalFiltered.length === 0) {
        null;
      }
    }
  };

  clickOutside(ref, isOpen, setIsOpen);

  return (
    <SearchMenuStyleOnHeader>
      <div className="searchContainer" ref={ref}>
        <div className="searchFormWrapper">
          <form onSubmit={handleSubmit}>
            <span>TICKER X-AXIS</span>
            <input
              placeholder="Enter a TICKER"
              onChange={handleItem}
              value={searchItem}
              onFocus={() => setIsOpen(true)}
            />
          </form>
        </div>
        <div
          className={isOpen ? "seachResultWrapper" : "seachResultWrapper hide"}>
          {location.includes("domestic") ? (
            <ul className="searchResultList">
              {domesticFiltered.map((list, index) => (
                <li
                  className="serachResultItem"
                  key={index}
                  onClick={() => handleClick(list.crno)}>
                  <span>{list.itmsNm}</span> | {list.crno}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="searchResultList">
              {globalFiltered.map((list, index) => (
                <li
                  className="serachResultItem"
                  key={index}
                  onClick={() => handleClick(list.symbol)}>
                  <span>{list.symbol}</span> | {list.companyName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </SearchMenuStyleOnHeader>
  );
};

export default Search;
