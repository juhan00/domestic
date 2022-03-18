import styled from "@emotion/styled";

export const Base = styled.div`
  position: relative;
  height: 100%;
  min-width: 1200px;
  background-color: #f5f6f8;
  .hide {
    display: none;
  }
`;

export const MainSection = styled.div`
  min-height: calc(100vh - 300px);
  max-width: 1600px;
  padding: 20px 36px 150px;
  margin: 0 auto;
`;
