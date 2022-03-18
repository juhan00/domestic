import React, { useRef, useState, useEffect, useMemo } from "react";
import { clickOutside } from "@utils/clickOutside";
import { SearchMenuStyleOnHeader } from "./style";
import axios from "redaxios"

export const Search = () => {
  const ref = useRef();
  const [searchItem, setSearchItem] = useState("");
  const [domesticList, setDomesticList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleItem = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      const domesticData = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/doList.json",
      );
      if (isComponentMounted) {
        setDomesticList(domesticData.data.domestic);
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

  const handleClick = (id) => {
    setIsOpen(false);
    setSearchItem("")
    console.log(id)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (domesticFiltered.length >= 1) {
      console.log(domesticFiltered[0].crno);
    } else if (domesticFiltered.length === 0 ){
      null
    }
  }

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
          <ul className="searchResultList">
            {domesticList
              .filter((list) => {
                if (searchItem == "") {
                  return list;
                } else if (
                  list.crno
                    .toLowerCase()
                    .includes(searchItem.toLowerCase()) ||
                  list.itmsNm
                    .toLowerCase()
                    .includes(searchItem.toLowerCase())
                ) {
                  return list;
                }
              })
              .map((list, index) => (
                <li className="serachResultItem" key={index} onClick={()=>handleClick(list.crno)}>
                  <span>{list.itmsNm}</span> | {list.crno}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </SearchMenuStyleOnHeader>
  );
};

export default Search;
