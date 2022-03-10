import styled from "@emotion/styled";

export const BuzzWrapper = styled.div`
  width: 100%;
  & > svg {
    display: block;
    margin: auto;
    width: 100%;
  }

  & svg .buzzpath {
    fill: none;
    stroke: #ee9696;
    stroke-width: 3;
    stroke-line: join round;
    stroke-line: cap round;
  }
`;
