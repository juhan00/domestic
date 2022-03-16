import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background-color: #ececf0;
`;

export const FooterWrapper = styled.div`
  max-width: 1600px;
  height: 200px;
  padding: 0 36px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .logo {
  }
  & > span {
    font-size: 12px;
    color: #767676;
    line-height: 21px;
  }
`;

export const CompanyInfoWrapper = styled.div`
  min-width: 310px;
  margin: 0 36px 0 62px;
  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 11px;
    a {
      position: relative;
      height: 21px;
      line-height: 21px;
      text-decoration: none;
      font-weight: 700;
      color: #000;
      padding: 0 20px;
      &::before {
        position: absolute;
        display: inline-block;
        content: "";
        width: 1px;
        height: 10px;
        background-color: #dbdbdf;
        left: 0;
        top: 5px;
      }
      &:first-of-type {
        padding-left: 0;
        &::before {
          display: none;
        }
      }
    }
  }
  .companyInfo {
    font-size: 13px;
    line-height: 21px;
    color: #505050;
  }
`;
