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
              background-color: #286f6c;
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
        padding: 0 20px;
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
          display: none;
        }
        .tagWrapper {
          display: flex;
          align-items: center;
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

            &.related {
              color: #286f6c;
              background-color: #e8f1ee;
            }
            &.category {
              color: #286f6c;
              background-color: #fff;
              border: 1px solid #e8f1ee;
              box-sizing: border-box;
            }
            &.keyword {
              color: #505050;
              background-color: #f7f7fb;
            }
          }
        }
        .tag + .tag {
          margin-left: 8px;
        }
        .buttonWrapper {
          display: flex;
          margin-left: auto;
          .button {
            margin-left: auto;
            display: none;
            min-width: 65px;
            height: 30px;
            padding: 0 10px;
            font-size: 12px;
            line-height: 30px;
            font-weight: 700;
            box-sizing: border-box;
            border-radius: 30px;
            cursor: pointer;
            &.origin {
              color: #5fb6ad;
              border: 1px solid #5fb6ad;
            }
            &.auto {
              color: #5fb6ad;
              border: 1px solid #5fb6ad;
            }
            &.expert {
              color: #fff;
              background-color: #48c0b7;
            }
          }
          .button + .button {
            margin-left: 10px;
          }
        }
      }
      .arrow {
        margin-left: auto;
        min-width: 16px;
        width: 16px;
        height: 16px;
        background: url(${finance_news_arrow_icon}) 50% 50% no-repeat;
        background-size: 10px 5px;
        cursor: pointer;
      }
    }
    & > li.active {
      align-items: start;
      .contents {
        .preview {
          display: block;
        }
        .arrow {
          transform: rotate(180deg);
        }
        .tagWrapper {
          .origin {
            display: block;
          }
          .auto {
            display: block;
          }
          .expert {
            display: block;
          }
        }
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
