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

  // 인풋이 포커스되면 기존의 검색어를 지우고, isOpen 스테이트를 변경하는 함수
  const handleFocused = () => {
    setKeyworld("");
    setIsOpen(true);
  };

  // 입력된 값의 변화를 감지하고 변경하는 함수
  const handleChangeKeyworld = (e) => {
    setKeyworld(e.target.value);
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
        <SearchResult keyword={keyword} />
      </div>
    </div>
  );
};

export default Search;
