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

    & g:nth-of-type(3) > rect {
      opacity: 1;
    }
    & g:nth-of-type(4) > rect {
      opacity: 0.6;
    }
    & g:nth-of-type(5) > rect {
      opacity: 0.2;
    }
  }
`;
