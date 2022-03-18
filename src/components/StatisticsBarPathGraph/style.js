import styled from "@emotion/styled";

export const GraphWrapper = styled.div`
  background-color: #ffffff;
  min-width: 500px;
  width: 100%;
  height: 300px;
  padding: 0 30px;
  /* flex: 1 1 600px; */
`;

export const Header = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  .legend {
    display: flex;
    font-size: 11px;
    line-height: 1.5;
    font-weight: 400;
    color: #767676;
    .square {
      display: flex;
      .icon {
        &::before {
          position: relative;
          top: 3px;
          float: left;
          margin-right: 5px;
          display: block;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 2px;
        }
      }
    }
    .circle {
      display: flex;
      .icon {
        &::before {
          position: relative;
          top: 3px;
          float: left;
          margin-right: 5px;
          display: block;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
      }
    }
    & > div + div {
      margin-left: 20px;
    }
    & > div.yellow {
      .icon::before {
        background-color: #fdc055;
      }
    }
    & > div.mint {
      .icon::before {
        background-color: #cbebdb;
      }
    }
    & > div.grean {
      .icon::before {
        background-color: #35a67d;
      }
    }
    & > div.blue {
      .icon::before {
        background-color: #065398;
      }
    }
    & > div.red {
      .icon::before {
        background-color: #f5746b;
      }
    }
  }
`;
