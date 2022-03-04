import styled from "@emotion/styled";

// 큰 단위를 styled.div로 만들고 내부의 요소들은 css 선택자로 관리해주시면 좋을 것 같습니다.
// 필요에 따라 여러개의 css-in-js 요소를 선언하여 사용하셔도 좋을 것 같습니다.

export const DisclosureFilterWrapper = styled.div`
  .disclosure {
    &__filter {
      input, button, select {
        cursor: pointer; 
      }
      background-color: #FFFFFF;
      width: calc(100% - 70px); 
      border-radius: 12px;
      > form {
        text-align: center;
        padding: 20px 28px;
        display: flex;
        .setPeriod {
          width: 30%;
          padding-right: 36px;
          > h4 {
            line-height: 22px;
            height: 50px;
            float: left;
            margin-right: 25px;
          }
          input[type="date"] {
            border: none;
            border-bottom: 1px solid #E5E5EC;
            color: #999999;
            margin-bottom: 10px;
            /* width: 45%;  */
          }
          > div {
            display: flex;
            justify-content: space-between;
            > div {
              width: 15%;
              height: 26px;
              font-weight: 500;
              font-size: 14px;
              color: #5FB6AD;
              padding: 5px 2px;
              position: relative;
              input[type="radio"] {
                position: absolute;
                top:-3px;
                left: -5px;
                -webkit-appearance: none; 
                -moz-appearance: none; 
                appearance: none;
                height: 100%; 
                width: calc(100% + 0.5px);
                border:1px solid #5FB6AD;
                border-radius: 4px;
                box-sizing: border-box;
                &:checked {
                  background: #5FB6AD;
                }
                &:checked + label {  
                  color:#FFFFFF; 
                }
              }
              label {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                cursor: pointer;
              }
            }
          }
        }
        .setType {
          /* padding-left: 36px; */
          /* width: calc(70% - 30px); */
          display: flex;
          flex-wrap: wrap;
          text-align: left;
          > h4 {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            overflow: hidden;
            clip-path: polygon(0 0, 0 0, 0 0);
          }
          > div {
            min-width: 17.5%;
            /* max-width: 200px; */
            height: 34px;
            border: 1px solid #F0F0F6;
            box-sizing: border-box;
            margin: 0 15px 0 0;
            > label {
              padding-left: 4px;
              line-height: 34px;
              display: block;
              font-size: 14px;
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
                &:checked { background: #5FB6AD; }
              }
            }
          }
          .globalType {
            border: none;    
            select {
              width: 100%;
              margin-right: 20px;
              height: 30px;
              border: none;
              border-bottom: 1px solid #E5E5E5;
            }
          } 
        }
        .btn__form {
          border-radius: 16px;
          padding: 5px;
          height: 34px;
          width: 104px;
          box-sizing: border-box;
          margin: 30px 0 0 10px;
        }
        button {
          border: 1px solid #F0F0F6;
          background-color: #5FB6AD;
          color: #FFFFFF;
        }
        > input {
          border: 1px solid #5FB6AD;
          background-color: #FFFFFF;
          color: #5FB6AD;
        }
      }
    }
  }
`;
