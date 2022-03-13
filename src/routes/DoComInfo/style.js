import styled from "@emotion/styled";

export const RouteWrapper = styled.div`
  max-width: 1600px;
  min-height: 900px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const PriceWrapper = styled.div`
  max-width: 810px;
  width: 100%;
  margin-bottom: 20px;
  margin-right: 20px;
`;
