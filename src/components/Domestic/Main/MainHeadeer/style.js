import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  flex-grow: 1;
  border: 1px solid black;
  max-height: 300px;
  height: 100%;
  padding: 10px;

  & > h2 {
    width: 60px;
    font-size: 18px;
  }

  & > .itemWrapper {
    display: flex;
    & > .item {
      position: relative;
      margin-right: 20px;
      padding: 10px;
      border: 1px solid #000;
      overflow: hidden;
      & > .del {
        position: absolute;
        font-size: 12px;
        top: 5px;
        right: 5px;
        cursor: pointer;
        z-index: 1;
      }
      &.active > .inner {
        filter: blur(10px);
        -webkit-filter: blur(10px);
      }
    }
  }
`;
