import React from "react";
import { HomeStyle, SearchMenuStyleAtHome  } from "@components/Layout/style";
import Search from "@components/Layout/Search"
import Dropdown from "../components/Layout/Dropdown";
import { Logo } from "../components/Layout/style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeStyle>
      <div className="header">
        <Logo />
        <ul>
          <li><Link to="/domestic">국내주식</Link></li>
          <li><Link to="/global">해외주식</Link></li>
          <li>뉴스</li>
        </ul>

      </div>
      <SearchMenuStyleAtHome>
        <Dropdown />
        <Search />
      </SearchMenuStyleAtHome>
    </HomeStyle>
  );
};

export default Home;
