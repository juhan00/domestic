import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > svg {
    display: block;
    margin: auto;
    width: 100%;
  }

  & text {
    text-anchor: middle;
    dominant-baseline: middle;
  }
`;
