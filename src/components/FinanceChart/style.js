import styled from "@emotion/styled";

export const FinanceChartWrapper = styled.div`
  width: 100%;
  min-height: 101.33px;
  & > svg {
    display: block;
    margin: auto;
    width: 100%;
  }
  & > svg {
    & text {
      dominant-baseline: middle;
      text-anchor: middle;
    }
    & .take,
    .profit,
    .netprofit {
      fill: #065398;
    }

    & .assets,
    .dept,
    .capital {
      fill: #f5746b;
    }

    & .sales,
    .investment,
    .finance {
      fill: #fdc055;
    }

    & .financerect0 {
      opacity: 1;
    }

    & .financerect1 {
      opacity: 0.5;
    }

    & .financerect2 {
      opacity: 0.2;
    }

    }
    & .minus {
      fill: #f5746b;
      font-size: 11px;
    }

    & .plus {
      fill: #065398;
      font-size: 11px;
    }

    & .yAxisLabel {
      font-size: 14px;
      font-weight: bold;
      fill: #505050;
    }
  }
`;
