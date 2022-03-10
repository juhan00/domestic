import styled from "@emotion/styled";

export const CorrChartWrapper = styled.div`
  float: right;
  width: 74.740061%;
  height: calc(100vh - 265px);
  /* padding: 10px; */
  .tick {
    line {
      stroke: #f0f0f6;
    }
    text {
      font-size: 11px;
      font-weight: 400;
      line-height: 1.2;
      color: #999;
    }
  }

  .x-label,
  .y-label {
    fill: #999;
    font-size: 11px;
    font-weight: 400;
    line-height: 1.2;
  }
  .dataLine {
    stroke: #5fb6ad;
  }
`;

export const TableHeader = styled.table`
  width: 100%;
  td {
    text-align: center;
  }
  .table__header {
    background-color: #5fb6ad;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    height: 43px;
    td {
      border-radius: 12px 12px 0 0; 
    }
  }
  .table__header__sub {
    background-color: #FFFFFF;
    td {
      background-clip: content-box;
      background-color: #FAFAFE;
      width: 33%;
      padding: 20px;
      input[type="date"] {
        background-color: transparent;
        width: 40%;
        border: none;
        border-bottom: 1px solid #E5E5EC;
        color: #111111;
        padding-bottom: 5px;
        margin: 0 5px;
      }
      input[type="date"]::-webkit-calendar-picker-indicator {
        width: 15px;
        padding: 0px;
        margin: 0px;
        color: #767676;
      }
    }
  }
  .table__body {
    td {
      background-color: #FFFFFF;
      color: #767676;
      font-size: 36px;
      font-weight: 500;
      /* height: 87px; */
      border-radius: 0 0 12px 12px;
      h5 {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`;

export const Row = styled.tr`
  height: 36px;
  .table__header {
  }
`;

export const Cell = styled.td`
  vertical-align: middle;
`;