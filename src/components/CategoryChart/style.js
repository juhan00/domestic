import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  width: 100%;
  padding: 0px 10%;
  min-height: 300px;
  position: relative;
  box-sizing: border-radius;
  & > svg {
    display: block;
    position: relative;
    margin: auto;
    width: 100%;

    & text {
      text-anchor: middle;
      dominant-baseline: middle;
    }

    & .blockrect {
      stroke: white;
      stroke-width: 3;
    }
  }

  & .tooltip {
    position: absolute;
  }
`;
