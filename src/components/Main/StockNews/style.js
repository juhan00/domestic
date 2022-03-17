import styled from "@emotion/styled";
import { axisBottom } from "d3";

export const StockNewsWrapper = styled.div`
  & > .loaderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  &.domestic {
    height: 556px;
  }
  &.global {
    height: 377px;
  }

  & .top {
    & > h2 {
      display: flex;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #111;
      margin-bottom: 9px;
    }

    border-bottom: 1px solid #f0f0f6;
  }
  ul {
    margin-top: 15px;
    li {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      line-height: 1.5;
      padding: 6px 0;
      .title {
        width: 70%;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #111;
        cursor: pointer;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        &::before {
          position: relative;
          top: -3px;
          content: "";
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 4px;
          background-color: #c4c4c4;
          margin-right: 8px;
        }
      }
      .date {
        width: 30%;
        text-align: right;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #999;
      }
    }
  }
`;
