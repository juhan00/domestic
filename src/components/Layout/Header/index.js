import React from "react";
import Search from "@components/Layout/Search";
import MoyaLogo from "@images/moyaLogo.png";
import {
  HeaderContainer,
  HaederWrapper,
  SearchOnHeader,
} from "@components/Layout/Header/style";

export const Header = () => {
  return (
    <HeaderContainer>
      <HaederWrapper>
        <img className="logo" src={MoyaLogo} alt="MoYa" />
        <SearchOnHeader>
          <Search />
        </SearchOnHeader>
        <button className="login">로그인</button>
      </HaederWrapper>
    </HeaderContainer>
  );
};

export default Header;
