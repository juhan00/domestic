import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  position: fixed;
  background-color: #f2f2f8;
  z-index: 997;
  width: 100vw;
  height: 76px;
`;
export const HaederMenuWrapper = styled.ul`
  display: flex;
  align-items: center;
`;
export const SearchMenuStyleOnHeader = styled.li`
  position: absolute;
  left: 248px;
  top: 20px;
  .searchContainer {
    height: 40px;
    width: 790px;
    box-shadow: 0 50px 30px -30px rgba(0, 0, 0, 0.5);
    input {
      width: 100%;
      height: 30px;
      border: 0;
      border-radius: 15px;
      padding: 0 10px;
      :focus {
        border: 1px solid #5fb6ad;
        outline: none;
        font-weight: 700;
        box-sizing: border-box;
      }
    }
    .searchResultWrapper {
      top: 30px;
      left: 30px;
      background-color: #fff;
      width: 790px;
      border-radius: 10px;
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
      max-height: 300px;
      overflow-y: scroll;
      .searchResultList {
        .searchResultItem {
          margin-top: 5px;
          font-size: 16px;
          width: 100%;
          a {
            padding: 4px 10px;
            display: block;
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
    }
  }
`;
