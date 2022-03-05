import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../style";
import Search from "../Search";
import {
  HeaderStyle,
  HaederMenuWrapper,
  SearchMenuStyleOnHeader,
} from "./style";

export const Header = () => {
  return (
    <HeaderStyle>
      <HaederMenuWrapper>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SearchMenuStyleOnHeader>
          <Search />
        </SearchMenuStyleOnHeader>
      </HaederMenuWrapper>
    </HeaderStyle>
  );
};

export default Header;
