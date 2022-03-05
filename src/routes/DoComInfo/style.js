import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  min-height: 900px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const PriceWrapper = styled.div`
  max-width: 810px;
  width: 100%;
  margin-bottom: 20px;
`;
