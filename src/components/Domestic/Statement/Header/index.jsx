import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderWrapper, NavLink } from "./style";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <NavLink to="">재무비율</NavLink>
        <NavLink to="balance">대차대조표</NavLink>
        <NavLink to="income">손익계산서</NavLink>
        <NavLink to="cashflow">현금흐름표</NavLink>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
