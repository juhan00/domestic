import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "redaxios";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

export const Search = () => {
  const ref = useRef();
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyworld] = useState("");
  const [domesticList, setDomesticList] = useState([]);
  const [globalList, setGlobalList] = useState([]);

  // 주식 종목 리스트로 불
  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      const domesticData = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/doList.json",
      );
      const globalData = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/api/goList.json",
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

  //바깥을 클릭하면 isOpen가 false로 바뀜
  useEffect(() => {
    const checkOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkOutside);
    return () => {
      document.removeEventListener("mousedown", checkOutside);
    };
  }, [isOpen]);

  // 인풋이 포커스되면 기존의 검색어를 지우고, isOpen 스테이트를 변경하는 함수
  const handleFocused = () => {
    setKeyworld("");
    setIsOpen(true);
  };

  // 입력된 값의 변화를 감지하고 변경하는 함수
  const handleChangeKeyworld = (e) => {
    setKeyworld(e.target.value);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="searchContainer" ref={ref}>
      <SearchBar
        onFocus={handleFocused}
        onChangeKeyword={handleChangeKeyworld}
        keyword={keyword}
      />
      <div
        className={isOpen ? "searchResultWrapper" : "searchResultWrapper hide"}>
        <SearchResult
          keyword={keyword}
          domesticList={domesticList}
          globalList={globalList}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Search;
