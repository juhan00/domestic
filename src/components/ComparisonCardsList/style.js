import styled from "@emotion/styled";
export const ComparisonCardsListWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-around;
  & .card {
    border: 1px solid #e5e5ec;
    box-sizing: border-box;
    border-radius: 81px;
    padding: 8px 28px 8px 24px;
  }

  & .card-content {
    display: flex;
    line-height: 24px;
    justify-content: space-between;
  }

  & .up {
    color: #e82b2b;
  }

  & .down {
    color: #065398;
  }

  & .price {
    font-weight: 700;
    font-size: 16px;
    color: #111111;
  }

  & .moving {
    margin-left: 12px;
    font-size: 16px;
  }

  & .moving > img {
    margin-right: 4px;
  }
`;
