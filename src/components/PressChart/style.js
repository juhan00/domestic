import styled from "@emotion/styled";

export const PressChartWrapper = styled.div`
  width: 100%;
  padding: 0px 5%;
  min-height: 300px;
  box-sizing: border-radius;
  & > svg {
    display: block;
    margin: auto;
    width: 100%;
    & text {
      text-anchor: middle;
    }
  }
`;
