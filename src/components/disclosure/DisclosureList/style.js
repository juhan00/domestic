import styled from "@emotion/styled";

export const DisclosureListLoaderWrapper = styled.div`
  height: 81px;
  background-color: #ffffff;
  margin-bottom: 12px;
`;

export const DisclosureListWrapper = styled.div`
  .disclosure {
    &__list {
      padding-bottom: 22px;
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
              padding-right: 50px;
              text-align: center;
              color: #767676;
            }
          }
        }
      }
      &__body {
        tr {
          background-color: #ffffff;
          cursor: pointer;
          td {
            padding: 33px 0;
            line-height: 14px;
            border-bottom: 1px solid #cccccc;
            color: #505050;
            font-weight: 400;
            &:first-of-type {
              border-top-left-radius: 6px;
              border-bottom-left-radius: 6px;
              padding-left: 90px;
              color: #047b6c;
              font-style: italic;
            }
            &:last-of-type {
              border-top-right-radius: 6px;
              border-bottom-right-radius: 6px;
              border-right: 1px solid #cccccc;
              padding-right: 50px;
              text-align: center;
              span {
                border-radius: 4px;
                padding: 3px 12px;
              }
            }
            .link {
              text-decoration: none;
              color: #111111;
              font-weight: 500;
              &:visited {
                color: #111111;
              }
            }
            .date {
              color: #111111;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
  .loaderWrapper {
    width: 100%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    transition-timing-function: ease;
    table {
      width: 100%;
      tbody {
        border-collapse: separate;
        width: 100%;
        tr {
          background-color: rgba(255, 255, 255, 0.3);
          td {
            padding-bottom: 44px;
          }
        }
      }
    }
  }
`;
