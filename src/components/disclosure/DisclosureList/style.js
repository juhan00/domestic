import styled from "@emotion/styled";

export const DisclosureListWrapper = styled.div`
  .disclosure {
    &__list {
      margin-top: 30px;
      /* border-collapse: separate; */
      padding-bottom: 70px;
      table {
        width: 100%;
        /* border-collapse: separate; */
        /* padding: 0 50px; */
      }
      &__header {
        color: #999999;
        font-weight: 500;
        font-size: 14px;
        tr {
          /* width: 100%; */
          th {
            text-align: left;
            height: 40px;
            line-height: 40px;
          }
        }
      }
      &__body {
        tr {
          background-color: #FFFFFF;
          border: 1px solid #CCCCCC;
          border-radius: 8px;
          td {
            padding: 28px 0;
            line-height: 14px;
            
          }

        }
      }
    }
  }
`