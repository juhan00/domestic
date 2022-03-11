import React from "react";

const SearchBar = ({ onFocus, onChangeKeyword, keyword }) => {
  return (
    <input
      placeholder="종목명 / 지수명 검색"
      value={keyword}
      onChange={onChangeKeyword}
      onFocus={onFocus}
    />
  );
};

export default SearchBar;
