import styled from "@emotion/styled";

export const SearchMenuStyleOnHeader = styled.div`
  list-style: none;
  margin-left: auto;
  margin-right: 20px;
  width: 40%;
  max-width: 332px;
  .searchContainer {
    width: 100%;
    box-shadow: 0 50px 30px -30px rgba(0, 0, 0, 0.5);
    position: relative;
    .searchFormWrapper {
      form {
        span {
          position: absolute;
          top: 50%;
          left: 20px;
          transform: translate(0, -50%);
          font-size: 16px;
          font-weight: 700;
          color: #505050;
        }
        input {
          width: 100%;
          height: 30px;
          border: none;
          border-radius: 6px;
          padding-left: 140px;
          background-color: #fafafe;
          /* border: 1px solid #5fb6ad; */
          :focus {
            border: 1px solid #5fb6ad;
            outline: none;
            font-weight: 700;
            box-sizing: border-box;
          }
          ::placeholder {
            color: #000000;
            font-size: 18px;
            font-weight: 700;
          }
        }
        svg {
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translate(0, -50%);
        }
      }
    }
    .seachResultWrapper {
      text-align: left;
      position: absolute;
      z-index: 1;
      /* top: 60px; */
      /* left: 30px; */
      background-color: #fff;
      width: 100%;
      /* border-radius: 10px; */
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
      max-height: 300px;
      overflow-y: scroll;
      &.hide {
        display: none;
      }
      .searchResultList {
        .serachResultItem {
          padding: 4px 10px;
          font-size: 16px;
          /* width: 100%; */
          /* height: 24px; */
          a {
            text-decoration: none;
            color: #5f5f5f;
            font-size: 14px;
            span {
              color: #000;
              font-size: 16px;
            }
          }
          &:hover {
            background-color: #5fb6ad;
            a {
              color: #fff;
              span {
                color: #fff;
                font-weight: 700;
              }
            }
          }
        }
      }
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #047b6c;
        border-radius: 6px;
      }
    }
  }
  &::marker {
    display: none;
  }
`;
