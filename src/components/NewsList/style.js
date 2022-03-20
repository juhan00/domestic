import styled from "@emotion/styled";
import modal_open_icon from "@images/modal_open_icon.svg";
import modal_close_icon from "@images/modal_close_icon.svg";
import resent_slide_arrow_next from "@images/resent_slide_arrow_next.svg";
import resent_slide_arrow_prev from "@images/resent_slide_arrow_prev.svg";

export const NewsListContentWrapper = styled.div`
  margin: 28px 32px;

  & .menu-title-wrapper{
    display: flex;
    justify-content: space-between;
    position: ;relative;
    margin-bottom:12px;
    border-bottom: 1px solid #F0F0F6;
  }

  & .menu-title {
    display:flex;
    font-size: 18px;
    line-height: 26px;
    color: #999999;
  }

  & .menu-title div{
      padding-bottom:6px;
  }

  & .menu-title .curtab{
    font-weight:bold;
    color: #111111;
    border-bottom:2px solid #286F6C;
  }

  & .menu-title div:first-of-type{
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


  & .content-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
`;

export const PageUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 0 30px;
`;

export const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  cursor: pointer;

  & .active {
    background: #286f6c;
    border-radius: 50%;
  }

  &.prev {
    position: absolute;
    left: 0;
    background: url(${resent_slide_arrow_prev}) 50% 50% no-repeat;
  }

  &.next {
    position: absolute;
    right: 0;
    background: url(${resent_slide_arrow_next}) 50% 50% no-repeat;
  }
`;

export const NewsWrapper = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;

  & .news-element {
    border-bottom: 1px solid #f0f0f6;
  }

  & .content-wrapper {
    display: flex;
    flex-direction: row;
    & img {
      margin: 28px 20px 28px 0;
    }
  }

  & .info-wrapper {
    width: 100%;
    & .info {
      display: flex;
      margin: 2px 0 12px 0;
    }
  }

  & .news-title-wrapper {
    display: flex;
    justify-content: space-between;
    & .news-title {
      all: unset;
      cursor: pointer;
    }
  }

  & .keyword-wrapper {
    display: flex;
    margin: 12px 0 15px;

    & .keyword {
      padding: 2px 12px 3px;
      background: #f7f7fb;
      border-radius: 31px;
    }
  }
`;
