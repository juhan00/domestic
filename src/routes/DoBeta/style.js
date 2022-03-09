import styled from "@emotion/styled";

export const RouteWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const ChartWrapper = styled.div`
  background-color: #ffffff;
  max-width: 1222px;
  width: 100%;
  height: 783px;
  border-radius: 12px;
  section {
    background-color: #5fb6ad;
    color: #ffffff;
    width: 100%;
    height: 43px;
    border-radius: 12px 12px 0 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 43px;
    text-align: center;
  }
`;
