import styled from "@emotion/styled";

export const DisclosureFilterWrapper = styled.div`
  .disclosure {
    &__filter {
      input, button, select {
        cursor: pointer; 
      }
      form {
        /* width: 100%; */
        display: flex;
        /* justify-content:space-between; */
        button {
          font-size: 14px;
          font-weight: 500;
          height: 36px;
          outline: none;
          border: none;
        }
        .btn__filter {
          margin-left: auto;
          width: 100px;
          border: 1px solid #286F6C;
          border-radius: 2px;
          box-sizing: border-box;
          background-color: #FFFFFF;
          color: #111111;
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
  .date__picker {
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
  .date__radio {
    display: flex;
    padding-top: 7px;
    li {
      font-weight: 500;
      font-size: 14px;
      color: #999999;
      position: relative;
      margin-left: 15px;
      input[type="radio"] {
        -webkit-appearance: none; 
        -moz-appearance: none; 
        appearance: none;
        &::before {
          position: absolute;
          top:5px;
          left: -3px;
          content:"";
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #C4C4C4;
        }
        &:checked { 
          + label {  
            color:#000000; 
            font-size: 500;
          }
          &::before {
            background-color: #047B6C;
          }
        }
      }
      label {
        cursor: pointer;
      }
    }
  }
`
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