import styled from "@emotion/styled";

export const GlobalWrapper = styled.div`
  /* min-width: 1280px; */
  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .row + .row {
    margin-top: 20px;
  }
  .col {
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-wrap: wrap;
  }
  .col.col2 {
    flex: 2 1 0;
  }
  .col + .col {
    margin-left: 20px;
  }
`;
