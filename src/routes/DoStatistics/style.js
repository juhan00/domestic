import styled from "@emotion/styled";

export const RouteWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const GraphWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-height: 266px;
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  margin: 20px 0;
  padding: 0 30px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
