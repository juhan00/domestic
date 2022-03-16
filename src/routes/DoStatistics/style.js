import styled from "@emotion/styled";

export const RouteWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
export const TopWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin: 20px 0;
  padding: 30px 0;
  h1 {
    color: #111111;
    width: 100%;
    margin-left: 30px;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
  }
`;
export const GraphWrapper = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media screen and (min-width: 1201px) {
    .divide {
      background-color: #f5f6f8;
      width: 20px;
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    .divide {
      display: hidden;
    }
  }
`;
