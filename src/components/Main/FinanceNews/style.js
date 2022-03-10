import styled from "@emotion/styled";
import toggle_off from "@images/toggle_off.svg";
import toggle_on_negative from "@images/toggle_on_negative.svg";
import toggle_on_neutral from "@images/toggle_on_neutral.svg";
import toggle_on_positive from "@images/toggle_on_positive.svg";
import icon_negative from "@images/icon_negative.svg";
import icon_neutral from "@images/icon_neutral.svg";
import icon_positive from "@images/icon_positive.svg";
import finance_news_arrow_icon from "@images/finance_news_arrow_icon.svg";

export const FinanceNewsWrapper = styled.div`
  max-width: 808px;
  margin-top: 20px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 28px 32px;
  & > .tabWraper {
    display: flex;
    height: 34px;
    box-sizing: border-box;
    border-bottom: 1px solid #f0f0f6;
    .tab {
      & > ul {
        display: flex;
        height: 100%;
        & > li {
          position: relative;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.5;
          color: #999;
          cursor: pointer;
          &.active {
            color: #111;
            &::before {
              position: absolute;
              content: "";
              left: 0;
              bottom: 0;
              width: 100%;
              height: 2px;
              background-color: #5fb6ad;
              border-radius: 4px 4px 0px 0px;
            }
          }
        }
        & > li + li {
          margin-left: 20px;
        }
      }
    }
    .filter {
      display: flex;
      align-items: center;
      margin-left: auto;
      .toggle {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #767676;
        cursor: pointer;
        &::after {
          content: "";
          display: inline-block;
          width: 30px;
          height: 18px;
          background: url(${toggle_off});
          background-size: 30px 18px;
          margin-left: 4px;
        }
        &.positive {
          &::after {
            background: url(${toggle_on_positive}) 50% 50% no-repeat;
          }
        }
        &.negative {
          &::after {
            background: url(${toggle_on_negative}) 50% 50% no-repeat;
          }
        }
        &.neutral {
          &::after {
            background: url(${toggle_on_neutral}) 50% 50% no-repeat;
          }
        }
      }
      .toggle + .toggle {
        margin-left: 16px;
      }
    }
  }

  & > ul {
    margin-top: 12px;
    width: 100%;
    & > li {
      display: flex;
      align-items: center;
      padding: 12px 0;
      .icon {
        top: 50%;
        min-width: 44px;
        width: 44px;
        height: 44px;
        &.positive {
          background: url(${icon_positive}) 50% 50% no-repeat;
          background-size: 44px 44px;
        }
        &.negative {
          background: url(${icon_negative}) 50% 50% no-repeat;
          background-size: 44px 44px;
        }
        &.neutral {
          background: url(${icon_neutral}) 50% 50% no-repeat;
          background-size: 44px 44px;
        }
      }
      .contents {
        margin-left: 20px;
        .info {
          display: flex;
          span {
            display: flex;
            align-items: center;
            font-size: 12px;
            line-height: 1.5;
            color: #999;
            &.press {
              font-weight: 400;
            }
            &.date {
              font-weight: 500;
            }
          }
          span + span {
            &::before {
              content: "";
              display: inline-block;
              width: 4px;
              height: 4px;
              background-color: #e5e5ec;
              border-radius: 4px;
              margin: 0 8px;
            }
          }
        }
        .title {
          font-size: 14px;
          line-height: 1.5;
          font-weight: 500;
          color: #111;
          cursor: pointer;
        }
        .preview {
          font-size: 14px;
          line-height: 1.5;
          font-weight: 400;
          color: #505050;
          margin: 10px 0;
          padding-right: 40px;
          box-sizing: border-box;
          display: none;
        }
        .tagWrapper {
          display: flex;
          margin-top: 10px;
          .tag {
            display: flex;
            align-items: center;
            height: 21px;
            border-radius: 21px;
            padding: 0 12px;
            font-size: 12px;
            line-height: 21px;
            font-weight: 400;
            color: #505050;
            &.related {
              background-color: #ffb82f;
            }
            &.category {
              background-color: #facdcd;
            }
            &.keyword {
              background-color: #5fb6ad;
            }
          }
        }
        .tag + .tag {
          margin-left: 8px;
        }
      }
      .arrow {
        margin-left: auto;
        width: 16px;
        height: 16px;
        background: url(${finance_news_arrow_icon}) 50% 50% no-repeat;
        background-size: 10px 5px;
        cursor: pointer;
      }
    }
    & > li.active {
      align-items: start;
      .preview {
        display: block;
      }
      .arrow {
        transform: rotate(180deg);
      }
    }
    & > li + li {
      border-top: 1px solid #f0f0f6;
    }
  }

  .paginationWrapper {
    position: relative;
  }
`;
