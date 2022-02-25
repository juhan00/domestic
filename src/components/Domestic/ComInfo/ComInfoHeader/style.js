import styled from "@emotion/styled";

export const Header = styled.div`
  border: 1px solid red;
  height: 158px;
  max-width: 1600px;
  section {
    display: flex;
    & > div {
      border: 1px solid red;
      max-width: 400px;
      width: 100%;
      height: 94px;
    }
    .stock {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .category {
        & > div {
          border: 1px solid aqua;
          display: flex;
        }
      }
    }
    .price {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .tradingVolume {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
  nav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      border: 1px solid blue;
      width: 180px;
      height: 100%;
      text-align: center;
      text-decoration: none;
    }
  }
`;
