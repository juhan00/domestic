import styled from "@emotion/styled";

export const NotFoundtyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    margin: 150px 0 50px;
  }
  .notice {
    font-size: 26px;
    font-weight: 700;
    color: #047b6c;
  }
  .description {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    margin: 20px 0 50px;
  }
  .goBack {
    width: 140px;
    height: 50px;
    background: #f0f0f6;
    color: #047b6c;
    border: 2px solid #047b6c;
    border-radius: 8px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background: #047b6c;
      color: #fff;
    }
  }
`;
