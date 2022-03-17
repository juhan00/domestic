import React, { useRef, useState, useEffect, useMemo } from "react";
import axios from "redaxios";
import SearchBar from "@components/Layout/Search/SearchBar";
import SearchResult from "@components/Layout/Search/SearchResult";
import { clickOutside } from "@utils/clickOutside";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContainer } from "@components/Layout/Search/style";
import SearchIcon from "@images/icon_search.svg";

// 최근 기록을 최대 8개까지만 기록하고 유지하는 함수
const useLocalStorage = (key) => {
  const [storageValue, setStorageValue] = useState(() => {
    const value = JSON.parse(localStorage.getItem(key));
    if (value) {
      return value;
    }
  });
  const maxStorageCount = 8;

  const setStorage = (value) => {
    //로컬 스토리지 받아오기
    const storageValue = JSON.parse(localStorage.getItem(key));
    if (storageValue) {
      const overlap = storageValue.filter((item) => item.name === value.name);

      if (overlap.length === 0) {
        if (storageValue.length === maxStorageCount) {
          localStorage.setItem(
            key,
            JSON.stringify([value, ...storageValue.slice(0, 7)]),
          );
          setStorageValue([value, ...storageValue.slice(0, 7)]);
        } else {
          localStorage.setItem(key, JSON.stringify([value, ...storageValue]));
          setStorageValue([value, ...storageValue]);
        }
      }
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
      setStorageValue([value]);
    }
  };

  return [storageValue, setStorage];
};

const Search = () => {
  const ref = useRef();
  const inputRef = useRef();
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyworld] = useState("");
  const [domesticList, setDomesticList] = useState([]);
  const [globalList, setGlobalList] = useState([]);

  const [domesticStorage, setDomesticStorage] =
    useLocalStorage("domesticRecent");
  const [globalStorage, setGlobalStorage] = useLocalStorage("globalRecent");

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

  // 키워드로 필터된 검색 리스트(국내주식)
  const domesticFiltered = useMemo(() => {
    let filtered = [];
    domesticList.filter((list) => {
      if (
        list.crno.toLowerCase().includes(keyword.toLowerCase()) ||
        list.itmsNm.toLowerCase().includes(keyword.toLowerCase())
      ) {
        filtered.push(list);
      }
    });
    return filtered;
  }, [keyword, domesticList]);

  // 키워드로 필터된 검색 리스트(해외주식)
  const globalFiltered = useMemo(() => {
    let filtered = [];
    globalList.filter((list) => {
      if (
        list.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
        list.companyName.toLowerCase().includes(keyword.toLowerCase())
      ) {
        filtered.push(list);
      }
    });
    return filtered;
  }, [keyword, globalList]);

  // 현재 url 주소에 따라 2차 url 주소 변경
  const targetUrl = useMemo(() => {
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

  // 인풋이 포커스되면 기존의 검색어를 지우고, isOpen 스테이트를 변경하는 함수
  const handleFocused = () => {
    setKeyworld("");
    setIsOpen(true);
  };

  // 입력된 값의 변화를 감지하고 변경하는 함수
  const handleChangeKeyworld = (e) => {
    setKeyworld(e.target.value);
  };

  //검색 결과 클릭하면 isOpen false로 바꾸어서 리스트 창 닫고 검색 내역에 추가 함수
  const handleClickDomestic = (name, id) => {
    setIsOpen(false);
    const stockItem = {
      name: name,
      id: id,
      price: Math.floor(Math.random() * 1001) * 100,
      rate: (Math.random() - Math.random()).toFixed(2),
    };
    setDomesticStorage(stockItem);
  };

  const handleClickGlobal = (name) => {
    setIsOpen(false);
    const stockItem = {
      name: name,
      price: Math.floor(Math.random() * 1001) * 100,
      rate: (Math.random() - Math.random()).toFixed(2),
    };
    setGlobalStorage(stockItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (domesticFiltered[0]) {
      navigate(`domestic/${targetUrl}/${domesticFiltered[0].crno}`);
    } else if (globalFiltered[0]) {
      navigate(`global/${targetUrl}/${globalFiltered[0].symbol}`);
    } else if (
      (domesticFiltered[0] = undefined) ||
      (globalFiltered[0] = undefined)
    ) {
      null;
    }
    inputRef.current.blur();
    setIsOpen(false);
    setKeyworld("");
  };

  clickOutside(ref, isOpen, setIsOpen);

  return (
    <SearchContainer>
      <div className="menuWrapper">
        <div
          className={location.includes("domestic") ? "menu active" : "menu"}
          onClick={() => {
            navigate("/domestic");
          }}>
          국내주식
        </div>
        <div
          className={location.includes("global") ? "menu active" : "menu"}
          onClick={() => {
            navigate("/global");
          }}>
          해외주식
        </div>
      </div>
      <button className="searchBtn" onClick={handleSubmit}>
        <img src={SearchIcon} alt="검색" />
      </button>
      <div ref={ref}>
        <SearchBar
          onFocus={handleFocused}
          onChangeKeyword={handleChangeKeyworld}
          keyword={keyword}
          onSubmit={handleSubmit}
          inputRef={inputRef}
        />
        <div
          className={
            isOpen ? "searchResultWrapper" : "searchResultWrapper hide"
          }>
          <SearchResult
            keyword={keyword}
            domesticFiltered={domesticFiltered}
            globalFiltered={globalFiltered}
            onClickDomestic={handleClickDomestic}
            onClickGlobal={handleClickGlobal}
            targetUrl={targetUrl}
            location={location}
          />
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;
