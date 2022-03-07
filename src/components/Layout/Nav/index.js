import React, { useState, useRef } from "react";
import { NavStyle, Dark } from "./style";
import { NavLink } from "react-router-dom";
import { clickOutside } from "@utils/clickOutside";

const Nav = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const ToggleIcon = () => {
    return (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 14C0 12.8954 0.89543 12 2 12L18 12C19.1046 12 20 12.8954 20 14V14C20 15.1046 19.1046 16 18 16L2 16C0.895431 16 0 15.1046 0 14V14Z"
          fill="#999999"
        />
        <path
          d="M0 8C0 6.89543 0.89543 6 2 6L18 6C19.1046 6 20 6.89543 20 8V8C20 9.10457 19.1046 10 18 10L2 10C0.895431 10 0 9.10457 0 8V8Z"
          fill="#999999"
        />
        <path
          d="M0 2C0 0.895431 0.89543 0 2 0L18 0C19.1046 0 20 0.895431 20 2V2C20 3.10457 19.1046 4 18 4L2 4C0.895431 4 0 3.10457 0 2V2Z"
          fill="#999999"
        />
      </svg>
    );
  };

  const DomesticIcon = () => {
    return (
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2C0 0.89543 0.895431 0 2 0H4C5.10457 0 6 0.895431 6 2V16C6 17.1046 5.10457 18 4 18H2C0.89543 18 0 17.1046 0 16V2Z" />
        <path d="M7 11C7 9.89543 7.89543 9 9 9H11C12.1046 9 13 9.89543 13 11V16C13 17.1046 12.1046 18 11 18H9C7.89543 18 7 17.1046 7 16V11Z" />
        <path d="M14 6C14 4.89543 14.8954 4 16 4H18C19.1046 4 20 4.89543 20 6V16C20 17.1046 19.1046 18 18 18H16C14.8954 18 14 17.1046 14 16V6Z" />
      </svg>
    );
  };

  const GlobalIcon = () => {
    return (
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0.171479 13.0912C0.0474819 12.5123 0.513958 11.9991 1.10591 11.9991H4.52958C5.0609 11.9991 5.49643 12.4151 5.55312 12.9434C5.77633 15.0233 6.36205 17.0447 7.28038 18.9167C7.6628 19.6963 7.03184 20.6033 6.22605 20.2797C4.89459 19.7449 3.68526 18.9267 2.68702 17.8716C1.42125 16.5339 0.554311 14.8782 0.171479 13.0912ZM1.10591 9.99914C0.513957 9.99914 0.0474819 9.48595 0.171479 8.90713C0.554311 7.12005 1.42125 5.46443 2.68702 4.12665C3.68526 3.07162 4.89459 2.25334 6.22605 1.71862C7.03183 1.39502 7.6628 2.30197 7.28038 3.08155C6.36205 4.95359 5.77633 6.97498 5.55312 9.05486C5.49643 9.58315 5.06089 9.99914 4.52958 9.99914H1.10591ZM19.7285 8.90713C19.8525 9.48595 19.386 9.99914 18.7941 9.99914H15.3704C14.8391 9.99914 14.4036 9.58315 14.3469 9.05486C14.1237 6.97498 13.5379 4.95359 12.6196 3.08155C12.2372 2.30197 12.8682 1.39502 13.6739 1.71862C15.0054 2.25334 16.2147 3.07162 17.213 4.12665C18.4787 5.46443 19.3457 7.12005 19.7285 8.90713ZM18.7941 11.9991C19.386 11.9991 19.8525 12.5123 19.7285 13.0912C19.3457 14.8782 18.4787 16.5339 17.213 17.8716C16.2147 18.9267 15.0054 19.7449 13.6739 20.2797C12.8682 20.6033 12.2372 19.6963 12.6196 18.9167C13.5379 17.0447 14.1237 15.0233 14.3469 12.9434C14.4036 12.4151 14.8391 11.9991 15.3704 11.9991H18.7941ZM7.56821 13.0575C7.50926 12.4843 7.96661 11.9991 8.54283 11.9991H11.3572C11.9334 11.9991 12.3907 12.4843 12.3318 13.0575C12.1001 15.3105 11.5297 18.4244 10.6488 20.6016C10.3748 21.2789 9.52559 21.2789 9.25153 20.6016C8.3706 18.4244 7.79994 15.3105 7.56821 13.0575ZM8.54283 9.99914C7.96661 9.99914 7.50926 9.51402 7.56822 8.94082C7.79995 6.68808 8.37059 3.57516 9.25148 1.39838C9.52557 0.721073 10.3748 0.721076 10.6489 1.39839C11.5297 3.57517 12.1001 6.68808 12.3318 8.94082C12.3907 9.51402 11.9334 9.99914 11.3572 9.99914H8.54283Z" />
      </svg>
    );
  };

  const NewsIcon = () => {
    return (
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.125 0H17.875C19.047 0 20 0.897 20 2V16C20 17.103 19.047 18 17.875 18H2.125C0.953 18 0 17.103 0 16V2C0 0.897 0.953 0 2.125 0ZM5 4C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4H5ZM5 12H11H12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12ZM13 8C12.4477 8 12 8.44772 12 9C12 9.55228 12.4477 10 13 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H13ZM13 4C12.4477 4 12 4.44772 12 5C12 5.55228 12.4477 6 13 6H15C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4H13Z"
        />
      </svg>
    );
  };

  clickOutside(ref, isOpen, setIsOpen);

  return (
    <>
      <NavStyle className={isOpen ? "open" : "close"} ref={ref}>
        <div className="toggleIcon" onClick={handleToggle}>
          <ToggleIcon />
        </div>
        <ul className="menuWrapper">
          <li>
            <div className="mainMenu">
              <NavLink to="/domestic">
                <DomesticIcon />
                <div className="mainMenuTilte">국내주식</div>
              </NavLink>
            </div>
            <ul className="subMenu">
              <li>
                <NavLink className={"submenuItem"} to="/domestic/financial">
                  주식뉴스분석
                </NavLink>
              </li>
              <li>
                <NavLink className={"submenuItem"} to="/domestic/cominfo">
                  기업정보
                </NavLink>
              </li>
              <li>
                <NavLink className={"submenuItem"} to="/domestic/statistics">
                  재무데이터
                </NavLink>
                <div>
                  <NavLink
                    className={"thirdmenuItem"}
                    to="/domestic/statistics/Balance">
                    재무비율
                  </NavLink>
                  <NavLink
                    className={"thirdmenuItem"}
                    to="/domestic/statistics/menu2">
                    대차대조표
                  </NavLink>
                  <NavLink
                    className={"thirdmenuItem"}
                    to="/domestic/statistics/Income">
                    손익계산서
                  </NavLink>
                  <NavLink
                    className={"thirdmenuItem"}
                    to="/domestic/statistics/CashFlow">
                    현금흐름표
                  </NavLink>
                </div>
              </li>
              <li>
                <NavLink className={"submenuItem"} to="/domestic/disclosure">
                  기업공시
                </NavLink>
              </li>
              <li>
                <NavLink className={"submenuItem"} to="/domestic/beta">
                  통계
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <div className="mainMenu">
              <NavLink to="/global">
                <GlobalIcon />
                <div className="mainMenuTilte">해외주식</div>
              </NavLink>
            </div>
            <ul className="subMenu">
              <li>
                <NavLink className={"submenuItem"} to="/global/financial">
                  주식뉴스분석
                </NavLink>
              </li>
              <li>
                <NavLink className={"submenuItem"} to="/global/cominfo">
                  기업정보
                </NavLink>
              </li>
              <li>
                <NavLink className={"submenuItem"} to="/global/statistics">
                  재무데이터
                </NavLink>
                <div>
                  <NavLink
                    className={"thirdmenuItem"}
                    to="/global/statistics/Balance">
                    재무비율
                  </NavLink>
                  <NavLink
                    className={"thirdmenuItem"}
                    to="/global/statistics/menu2">
                    대차대조표
                  </NavLink>
                  <NavLink
                    className={"thirdmenuItem"}
                    to="/global/statistics/Income">
                    손익계산서
                  </NavLink>
                  <NavLink
                    className={"thirdmenuItem"}
                    to="/global/statistics/CashFlow">
                    현금흐름표
                  </NavLink>
                </div>
              </li>
              <li>
                <NavLink className={"submenuItem"} to="/global/disclosure">
                  기업공시
                </NavLink>
              </li>
              <li>
                <NavLink className={"submenuItem"} to="/global/beta">
                  통계
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="mainMenu">
            <NavLink to="/news">
              <NewsIcon />
              <div className="mainMenuTilte">뉴스</div>
            </NavLink>
          </li>
        </ul>
      </NavStyle>
      {isOpen ? <Dark /> : null}
    </>
  );
};

export default Nav;
