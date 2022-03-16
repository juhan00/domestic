import React from "react";
import MoyaLogo from "@images/moyaLogo.png";
import Search from "@components/Layout/Search";
import { HomeStyle } from "@routes/style";

const Home = () => {
  return (
    <HomeStyle>
      <header className="inner">
        <img className="logo" src={MoyaLogo} alt="MoYa" />
        <button className="login">로그인</button>
      </header>
      <div className="slogan">
        당신을 위한 뉴스<span>n개</span>가 준비되어 있습니다
        <div>지금 바로 검색해 보세요!</div>
      </div>
      <div className="searchAtHome">
        <Search />
      </div>
    </HomeStyle>
  );
};

export default Home;
