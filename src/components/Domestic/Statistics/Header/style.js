import styled from "@emotion/styled";
import { NavLink as Link } from "react-router-dom";

export const HeaderWrapper = styled.nav`
  border: 1px solid salmon;
  max-width: 1600px;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
`;
export const NavLink = styled(Link)`
  border: 5px aqua solid;

  width: 200px;
  height: 29px;
  margin-top: 13px;
  text-align: center;
`;
