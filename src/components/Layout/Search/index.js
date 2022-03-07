import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

export const Search = () => {
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyworld] = useState("");

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

  // 인풋이 포커스되면 isOpen 스테이트를 변경하는 함수
  const handleFocused = () => {
    setIsOpen(true);
  };

  // 입력된 값의 변화를 감지하고 변경하는 함수
  const handleChangeKeyworld = (e) => {
    setKeyworld(e.target.value);
  };

  // 현재 입력하고 있는 검색어를 지우는 함수
  const handleDeleteKeyword = () => {
    setKeyworld("");
  };

  // 엔터하면 keyworld를 히스토리에 추가하고 검색창 비움
  // const handleEnter = (e) => {
  //   if (keyword && e.key === "Enter") {
  //     handleAddHistory(keyword);
  //     setKeyworld("");
  //   }
  // };

  return (
    <div className="searchContainer" ref={ref}>
      <SearchBar
        onFocus={handleFocused}
        onChangeKeyword={handleChangeKeyworld}
        onDeleteKeyword={handleDeleteKeyword}
        keyword={keyword}
      />
      <div
        className={isOpen ? "searchResultWrapper" : "searchResultWrapper hide"}>
        <SearchResult />
      </div>
    </div>
  );
};

export default Search;
