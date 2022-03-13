import React, { useRef, useState, useEffect } from "react";
import axios from "redaxios";
import SearchBar from "@components/Layout/Search/SearchBar";
import SearchResult from "@components/Layout/Search/SearchResult";
import { clickOutside } from "@utils/clickOutside";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyworld] = useState("");
  const [domesticList, setDomesticList] = useState([]);
  const [globalList, setGlobalList] = useState([]);
  const [sellcted, setSellected] = useState("domestic");

  // 주식 종목 리스트 불러와서 state로 저장
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

  // 인풋이 포커스되면 기존의 검색어를 지우고, isOpen 스테이트를 변경하는 함수
  const handleFocused = () => {
    setKeyworld("");
    setIsOpen(true);
  };

  // 입력된 값의 변화를 감지하고 변경하는 함수
  const handleChangeKeyworld = (e) => {
    setKeyworld(e.target.value);
  };

  //검색 결과 클릭하면 isOpen false로 바꾸어서 리스트 창 닫는 함수
  const handleClick = () => {
    setIsOpen(false);
  };

  clickOutside(ref, isOpen, setIsOpen);

  const SeachIcon = () => {
    return (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 15.5L11.6945 12.1886M13.5263 7.76316C13.5263 9.42425 12.8665 11.0173 11.6919 12.1919C10.5173 13.3665 8.92425 14.0263 7.26316 14.0263C5.60207 14.0263 4.00901 13.3665 2.83444 12.1919C1.65987 11.0173 1 9.42425 1 7.76316C1 6.10207 1.65987 4.50901 2.83444 3.33444C4.00901 2.15987 5.60207 1.5 7.26316 1.5C8.92425 1.5 10.5173 2.15987 11.6919 3.33444C12.8665 4.50901 13.5263 6.10207 13.5263 7.76316Z"
          stroke="#999999"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <>
      <div
        className={
          location.includes("domestic") ? "searchOption active" : "searchOption"
        }
        onClick={
          location.includes("domestic") || location.includes("global")
            ? () => {
                navigate("/domestic");
              }
            : () => {
                setSellected("domestic");
              }
        }>
        국내
      </div>
      <div
        className={
          location.includes("global") ? "searchOption active" : "searchOption"
        }
        onClick={
          location.includes("domestic") || location.includes("global")
            ? () => {
                navigate("/global");
              }
            : () => {
                setSellected("global");
              }
        }>
        해외
      </div>
      <SeachIcon />
      <div ref={ref}>
        <SearchBar
          onFocus={handleFocused}
          onChangeKeyword={handleChangeKeyworld}
          keyword={keyword}
        />
        <div
          className={
            isOpen ? "searchResultWrapper" : "searchResultWrapper hide"
          }>
          <SearchResult
            keyword={keyword}
            domesticList={domesticList}
            globalList={globalList}
            onClick={handleClick}
            location={location}
            sellcted={sellcted}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
