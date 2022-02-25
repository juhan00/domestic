import React from "react";
import { HeaderWrapper } from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <button>재무비율</button>
      <button>대차대조표</button>
      <button>손익계산서</button>
      <button>현금흐름표</button>
    </HeaderWrapper>
  );
};

export default Header;
