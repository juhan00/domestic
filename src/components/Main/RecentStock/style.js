import styled from "@emotion/styled";
import MenuIconToggle from "@images/notice_icon.svg";
import resent_slide_arrow_prev from "@images/resent_slide_arrow_prev.svg";
import resent_slide_arrow_next from "@images/resent_slide_arrow_next.svg";

export const RecentStockWrapper = styled.div`
  position: relative;
  height: 110px;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 28px 0;
  overflow: hidden;
  & > .loaderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > h2 {
    position: absolute;
    left: 28px;
    top: 50%;
    transform: translateY(-50%);
    align-items: center;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 700;
    color: #111111;
    z-index: 2;
  }

  .itemWrapper {
    position: relative;
    width: calc(100% - 30px);
    display: flex;
    flex: 1 1 100%;

    .default {
      display: flex;
      flex: 1 1 100%;
      justify-content: center;
      align-items: center;
      &::before {
        content: "";
        width: 20px;
        height: 20px;
        background-color: red;
        background: url(${MenuIconToggle});
        background-size: 20px 20px;
        margin-right: 7px;
        transform: translateY(-2px);
      }
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #505050;
    }
    .item {
      display: flex;
      align-items: center;
      position: relative;
      height: 62px;
      min-width: 100px;
      margin-right: 10px;
      border: 1px solid #e5e5ec;
      box-sizing: border-box;
      border-radius: 81px;
      cursor: pointer;
      & > .inner {
        padding: 8px 28px;

        & > h3 {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #767676;
        }
        & > .index {
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.5;
          color: #111111;
          & > .rate {
            font-size: 16px;
            font-weight: 400;
            display: flex;
            align-items: center;
            margin-left: 12px;
            &.up {
              color: #e82b2b;
            }
            &.down {
              color: #065398;
            }
            & > img {
              width: 10px;
              margin-right: 4px;
              transform: translateY(-1px);
            }
          }
        }
      }
      & > .del {
        display: none;
      }
      &.active > .inner {
        cursor: default;
      }
      &:hover {
        .del {
          display: block;
          position: absolute;
          width: 26px;
          height: 26px;
          padding: 4px;
          top: 50%;
          transform: translateY(-50%);
          right: 18px;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 12px;
          cursor: pointer;
          z-index: 1;
        }
      }
    }
    .swiper {
      width: calc(100% - 58px);
      margin-left: 58px;
      padding: 0 40px 0 40px;
      &::before {
        position: absolute;
        top: 0px;
        right: 0px;
        content: "";
        display: inline-block;
        width: 50px;
        height: 100%;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          #ffffff 50.78%
        );
        z-index: 2;
      }
      &::after {
        position: absolute;
        top: 0px;
        left: -10px;
        content: "";
        display: inline-block;
        width: 50px;
        height: 100%;
        background: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 0) 0%,
          #ffffff 50.78%
        );
        z-index: 2;
      }
      .swiper-button-prev {
        left: 10px;
        width: 44px;
        height: 44px;
        border-radius: 44px;
        background: url(${resent_slide_arrow_prev});
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.16);
        &::after {
          display: none;
        }
      }
      .swiper-button-next {
        right: 20px;
        width: 44px;
        height: 44px;
        border-radius: 44px;
        background: url(${resent_slide_arrow_next});
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.16);
        &::after {
          display: none;
        }
      }
      .swiper-button-next.swiper-button-disabled,
      .swiper-button-prev.swiper-button-disabled {
        opacity: 0;
      }
      .swiper-slide {
        width: 186px;
      }
    }
  }
`;
