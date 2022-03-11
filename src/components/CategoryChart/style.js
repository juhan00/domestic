import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  width: 100%;
  padding: 0px 15%;
  min-height: 300px;
  box-sizing: border-radius;
  & > svg {
    display: block;
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
`;
