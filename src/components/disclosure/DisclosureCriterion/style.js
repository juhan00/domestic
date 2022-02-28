import styled from "@emotion/styled";

// 큰 단위를 styled.div로 만들고 내부의 요소들은 css 선택자로 관리해주시면 좋을 것 같습니다.
// 필요에 따라 여러개의 css-in-js 요소를 선언하여 사용하셔도 좋을 것 같습니다.

export const DisclosureCriterionWrapper = styled.div`
  .disclosure {
    &__criterion {
      float: left;
      margin-right: 20px;
      width: 385px;
      height: 790px;
      border: 1px solid #5FB6AD;
      border-radius: 12px;
      &__header {
        height: 56px;
        text-align: center;
        background-color: #5FB6AD;
        border-radius: 12px 12px 0 0;
        h4 {
          color: #FFFFFF;
          font-size: 14px;
          line-height: 56px;
        }
      }
      &__body {
        text-align: center;
        padding: 18px 28px;
        .setPeriod {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 0 8px;
          margin-bottom: 25px;
          input[type="date"] {
            border: none;
            border-bottom: 1px solid #E5E5EC;
            color: #999999;
            margin-bottom: 8px;
          }
          > div {
            font-weight: 700;
            color: #505050;
            padding: 3px;
            position: relative;
            input[type="radio"] {
              /* display: none; */
              position: absolute;
              top:-3px;
              left: -5px;
              -webkit-appearance: none; 
              -moz-appearance: none; 
              appearance: none;
              height: 100%; 
              width: calc(100% + 0.5px);
              border:2px solid #5FB6AD;
              box-sizing: border-box;
            }
            input[type="radio"]:checked { background: #5FB6AD; z-index: -1;}
          }
        }
        .setType {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          text-align: left;
          div {
            width: calc(50% - 15px);
            height: 34px;
            border: 1px solid #F0F0F6;
            box-sizing: border-box;
            margin-bottom: 32px;
            > label {
              padding-left: 4px;
              line-height: 34px;
              display: block;
              cursor: pointer; 

              > input {
                margin: auto 10px auto 3px;
                -webkit-appearance: none; 
                -moz-appearance: none; 
                appearance: none; 
                border-radius: 1.5px; 
                height: 15px; 
                width: 15px;
                border:2.5px solid #5FB6AD;
                box-sizing: border-box;
              }
              > input:checked { background: #5FB6AD; }
            }
          }
        } 
        button {
          border: 1px solid #F0F0F6;
          border-radius: 16px;
          padding: 5px;
          height: 34px;
          width: 72px;
          box-sizing: border-box;
          background-color: #5FB6AD;
          color: #FFFFFF;
          margin-top: 30px;
        }
      }
    }
  }
`;
