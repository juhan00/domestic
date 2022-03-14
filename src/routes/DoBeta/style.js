import styled from "@emotion/styled";

export const RouteWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const TableWrapper = styled.div`
  margin-left: 20px;
  flex: 1 1 400px;
`;
export const ChartWrapper = styled.div`
  background-color: #ffffff;
  height: 783px;
  border-radius: 12px;
  flex: 3 1 1200px;
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
export const CorrTableWrapper = styled.div`
  /* float: left; */
  width: 23.913043%;
  height: calc(100vh - 265px);
  border-radius: 0 0 12px 12px;
`;
