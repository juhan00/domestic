import React from "react";

const SearchBar = ({
  onFocus,
  onChangeKeyword,
  keyword,
  onSubmit,
  inputRef,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="종목명 / 지수명 검색"
        value={keyword}
        onChange={onChangeKeyword}
        onFocus={onFocus}
        ref={inputRef}
      />
    </form>
  );
};

export default SearchBar;
