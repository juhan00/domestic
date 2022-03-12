import styled from "@emotion/styled";

export const DisclosureFilterWrapper = styled.div`
  .disclosure {
    &__filter {
      input, button, select {
        cursor: pointer; 
      }
      form {
        text-align: center;
        width: 100%;
        display: flex;
        justify-content:space-between;
        .btn__form {
          float: right;
          border-radius: 16px;
          padding: 5px;
          height: 34px;
          width: 104px;
          box-sizing: border-box;
        }
        button {
          border: 1px solid #F0F0F6;
          background-color: #5FB6AD;
          color: #FFFFFF;
          margin-left: 11px;
        }
        > input {
          margin-left: auto;
          border: 1px solid #5FB6AD;
          background-color: #FFFFFF;
          color: #5FB6AD;
        }
      }
    }
  }
`;

export const SetPeriod = styled.fieldset`
  display: flex;
  h4 {
    line-height: 26px;
    margin-right: 15px;
    font-weight: 500;
    font-size: 16px;
  }
  .date--picker {
    margin-right: 15px;
    span {
      color: #767676;
      line-height: 26px;
      margin: 0 6px;
    }
    input[type="date"] {
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #E5E5EC;
      color: #111111;
      padding-bottom: 3px;
      &::-webkit-calendar-picker-indicator {
        width: 15px;
        padding: 0px;
        margin: 0px;
        color: #767676;
      }
    }
  }  
  .date--radio {
    display: flex;
    justify-content: space-between;
    div {
      font-weight: 500;
      font-size: 14px;
      color: #5FB6AD;
      position: relative;
      input[type="radio"] {
        -webkit-appearance: none; 
        -moz-appearance: none; 
        appearance: none;
        height: 26px; 
        width: 45px;
        border:1px solid #5FB6AD;
        border-radius: 4px;
        box-sizing: border-box;
        margin: 3px 2px;
        &:checked {
          background: #5FB6AD;
        }
        &:checked + label {  
          color:#FFFFFF; 
        }
      }
      label {
        width: 46px;
        height: 26px;
        box-sizing: border-box;
        line-height: 22px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: 1201px) {

  }
`
// 삭제 예정
// export const SetTypeForDesktop = styled.fieldset`
//   padding-left: 36px;
//   width: calc(70% - 36px);
//   display: flex;
//   flex-wrap: wrap;
//   text-align: left;
//   h4 {
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     margin: -1px;
//     overflow: hidden;
//     clip-path: polygon(0 0, 0 0, 0 0);
//   }
//   div {
//     min-width: 17.5%;
//     height: 34px;
//     border: 1px solid #F0F0F6;
//     box-sizing: border-box;
//     margin: 0 15px 15px 0;
//     label {
//       padding-left: 4px;
//       line-height: 34px;
//       display: block;
//       font-size: 14px;
//       input {
//         margin: auto 10px auto 3px;
//         -webkit-appearance: none; 
//         -moz-appearance: none; 
//         appearance: none; 
//         border-radius: 1.5px; 
//         height: 15px; 
//         width: 15px;
//         border:2.5px solid #5FB6AD;
//         box-sizing: border-box;
//         &:checked { background: #5FB6AD; }
//       }
//     }
//   }
// `

export const SetType = styled.fieldset`
  display: flex;
  margin-left: 25px;
  label {
    color: #111111;
    margin-right: 15px;
    font-size: 16px;
    font-weight: 500;
    h4 {
      line-height: 30px;
      font-weight: 500;
      font-size: 16px;
    }
  }
  select {
    height: 35px;
    border: none;
    border-radius: 5px;
    padding: 0 30px 0 10px;
  }
`

export const GlobalType = styled.div`
  line-height: 30px;
  display: flex;
  margin-left: 25px;
  select {
    width: 100%;
    margin-right: 20px;
    border: none;
    border-bottom: 1px solid #E5E5E5;
  }
`