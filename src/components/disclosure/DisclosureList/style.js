import styled from "@emotion/styled";

// 큰 단위를 styled.div로 만들고 내부의 요소들은 css 선택자로 관리해주시면 좋을 것 같습니다.
// 필요에 따라 여러개의 css-in-js 요소를 선언하여 사용하셔도 좋을 것 같습니다.

export const DisclosureListWrapper = styled.div`
  .disclosure {
    &__list {
      margin-top: 20px;
      /* border-collapse: separate; */
      width: calc(100% - 70px); 
      /* height: calc(100vh); */
      /* border: 1px solid #5FB6AD; */
      background-color: #FFFFFF;
      border-radius: 12px;
      /* vertical-align: middle; */
      overflow: hidden;
      padding-bottom: 70px;
      h4 {
        border-radius: 12px 12px 0 0;
        text-align: center;
        height: 56px;
        line-height: 56px;
        background-color: #5FB6AD;       
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 700;
      }
      table {
        width: 100%;
        border-collapse: separate;
        padding: 0 50px;
      }

      &__header {
        background-color: #F7F7FB;
        color: #111111;
        font-weight: 500;

        tr {
          width: 100%;
          th {
            text-align: left;
            height: 40px;
            line-height: 40px;
          }
        }
      }
      &__body {
        tr {
          td {
            padding: 28px 0;
            line-height: 14px;
          }
          &:nth-of-type(even) {
            background-color: #FAFAFE;
          }
        }
      }
    }
  }
`