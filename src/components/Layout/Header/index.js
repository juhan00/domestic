import React, { useState, useEffect } from "react";
import Search from "@components/Layout/Search";
import MoyaLogo from "@images/moyaLogo.png";
import StockInfo from "@components/Layout/StockInfo";
import Nav from "@components/Layout/Nav";
import {
  HeaderContainer,
  HeaderInnerTemplate,
  HaederWrapper,
  SearchOnHeader,
  ToTop,
} from "@components/Layout/Header/style";
import { reduce } from "d3";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const activeSticky = () => {
      if (window.scrollY >= 222) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", activeSticky);

    return () => {
      window.removeEventListener("scroll", activeSticky);
    };
  }, [scrolled]);

  return (
    <HeaderContainer>
      <HeaderInnerTemplate>
        <HaederWrapper>
          <img className="logo" src={MoyaLogo} alt="MoYa" />
          <SearchOnHeader>
            <Search />
          </SearchOnHeader>
          <button className="login">로그인</button>
        </HaederWrapper>
        <StockInfo />
      </HeaderInnerTemplate>
      <Nav scrolled={scrolled} />
      <ToTop className={scrolled ? "totop" : ""} onClick={handleToTop}>
        ↑
      </ToTop>
    </HeaderContainer>
  );
};

export default Header;
