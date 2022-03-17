import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Search from "@components/Layout/Search";
import MoyaLogoWh from "@images/moyaLogo_Wh.png";
import StockInfo from "@components/Layout/StockInfo";
import Nav from "@components/Layout/Nav";
import ArrowToTop from "@images/icon_totop.png";
import {
  HeaderContainer,
  HeaderInnerTemplate,
  HaederWrapper,
  ToTop,
} from "@components/Layout/Header/style";

export const Header = () => {
  const stockId = useParams().stockId;
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation().pathname;
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
          <NavLink to={location.includes("domestic") ? "/domestic" : "/global"}>
            <img className="logo" src={MoyaLogoWh} alt="MoYa" />
          </NavLink>
          <Search />
          <button className="login">로그인</button>
        </HaederWrapper>
        {stockId ? <StockInfo /> : null}
      </HeaderInnerTemplate>
      <Nav scrolled={scrolled} />
      <ToTop className={scrolled ? "totop" : ""} onClick={handleToTop}>
        <img src={ArrowToTop} alt="상단이동버튼" />
      </ToTop>
    </HeaderContainer>
  );
};

export default Header;
