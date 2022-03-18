import styled from "@emotion/styled";

export const NewsListContentWrapper = styled.div`
  margin: 28px 32px;

  & .title-wrapper{
    display: flex;
    justify-content: space-between;
    position: ;relative;
    margin-bottom:12px;
    border-bottom: 1px solid #F0F0F6;
  }

  & .title {
    display:flex;
    font-size: 18px;
    line-height: 26px;
    color: #999999;
  }

  & .title div{
      padding-bottom:6px;
  }

  & .title .curtab{
    font-weight:bold;
    color: #111111;
    border-bottom:2px solid #286F6C;
  }

  & .title div:first-of-type{
      margin-right:20px;
  }

  & .button-wrapper{
      display:flex;
  }

  & .button-wrapper li{
      display:flex;
      align-items:center;
  }

  & .button-wrapper li:not(:last-of-type){
      margin-right:16px;
  }

  & .button-wrapper img{
      cursor:pointer;
  }
`;
