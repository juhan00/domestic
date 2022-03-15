import styled from "@emotion/styled";

export const DisclosureListWrapper = styled.div`
  .disclosure {
    &__list {
      padding-bottom: 70px;
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 9px;
      &__header {
        color: #999999;
        font-weight: 500;
        font-size: 14px;
        tr {
          th {
            text-align: left;
            height: 40px;
            line-height: 40px;
            &:first-of-type {
              padding-left: 90px;
            }
            &:last-of-type {
              padding-right: 60px;
              text-align: center;
            }
          }
        }
      }
      &__body {    
        tr {
          background-color: #FFFFFF;
          td {            
            padding: 28px 0;
            line-height: 14px;
            border-bottom: 1px solid #CCCCCC;
            &:first-of-type {
              border-top-left-radius: 6px; 
              border-bottom-left-radius: 6px;
              padding-left: 90px;
            }
            &:last-of-type {
              border-top-right-radius: 6px; 
              border-bottom-right-radius: 6px;
              border-right: 1px solid #CCCCCC;
              padding-right: 60px;
              text-align: center;
            }

          }

        }
      }
    }
  }
`