import styled from "@emotion/styled";

// 큰 단위를 styled.div로 만들고 내부의 요소들은 css 선택자로 관리해주시면 좋을 것 같습니다.
// 필요에 따라 여러개의 css-in-js 요소를 선언하여 사용하셔도 좋을 것 같습니다.

export const DisclosureListWrapper = styled.div`
  .disclosure {
    &__list {
      border-collapse: separate;
      width: 1200px;
      /* height: 790px; */
      border: 1px solid #5FB6AD;
      border-radius: 12px;
      text-align: center;
      /* vertical-align: middle; */
      overflow: hidden;
      &__header {
        height: 56px;
        background-color: #5FB6AD;
        tr {
          color: #FFFFFF;
          th {
            line-height: 56px;
          }
        }
      }
      &__body {
        tr {
          td {
            /* border: 1px solid black; */
            padding: 29px 0;

            div {
              border: 1px solid red;
            } 
          }
        }
      }
    }
  }
`