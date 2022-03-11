import styled from "@emotion/styled";

export const ExpertModalWrapper = styled.div`
  &.active {
    display: flex;
  }
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  & > .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  & > .box {
    width: 560px;
    border-radius: 3px;
    background-color: #fff;
    padding: 30px 30px;
    z-index: 2;
    .header {
      h2 {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;
        color: #111;
      }
      .text {
        margin-top: 5px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #767676;
      }
    }
    ul {
      margin-top: 30px;
      li {
        label {
          display: block;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #111;
        }
        input {
          margin-top: 5px;
          width: 100%;
          height: 38px;
          border: 1px solid #ededed;
          text-indent: 10px;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #111;
        }
        select {
          margin-top: 5px;
          width: 100%;
          height: 38px;
          border: 1px solid #ededed;
          text-indent: 10px;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #111;
        }
      }
      li + li {
        margin-top: 10px;
      }
    }
    .price {
      margin-top: 20px;
      .content,
      .summary {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #767676;
        span {
          color: #f5746b;
        }
      }
    }
    .buttonWrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 50px;
      button {
        height: 36px;
        padding: 0 20px;
        border: 0;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 800;
        line-height: 1.5;

        &.submit {
          color: #fff;
          background-color: #286f6c;
        }
        &.cancel {
          color: #999;
          border: 1px solid #f0f0f6;
          background-color: #fff;
        }
      }
      button + button {
        margin-left: 6px;
      }
    }
  }
`;
