import styled from "@emotion/styled";

export const TopStock = styled.div`
  flex-grow: 2;
  border: 1px solid black;
  min-height: 300px;
  height: 100%;
  padding: 10px;
  ul.filter{
    display:flex;
    margin-left:auto;
    li{
      padding:10px;
      cursor:pointer;
      &.active{
        background-color:#5FB6AD;
      }
      
    }
  }
  & > table {
    width: 100%;
    margin-top: 20px;
    text-align: center;}
  }
`;
