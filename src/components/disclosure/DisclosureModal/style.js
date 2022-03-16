import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: fixed;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  width: 90%;
  max-width: 1220px;
  height: calc(100% - 300px);
  max-height: 1045px;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  display: flex;

  .type {
    background: rgba(40, 111, 108, 0.2);
    width: 200px;
    height: 100%;
    padding: 30px;
    h4 {
      font-size: 18px;
      font-weight: 500;
    }
    li {
      /* border: 1px solid blue; */
      margin-top: 16px;
      input {
        float: left;
        margin: 16px 10px 15px 15px;
        border: none;
      }
      label {
        cursor: pointer;
        background: #E5EEEE;
        width: 140px;
        height: 44px;
        line-height: 24px;
        display: block;
        padding: 10px 5px 10px 12px;
        box-sizing: border-box;
        border-radius: 4px;
      }
    }
  }
  .type__details {
    padding: 45px 25px;
    width: 100%;
    height: calc(100% - 100px);
    overflow: auto;
    border: 1px solid #F0F0F6;
    > div {
      border: 2px solid #047B6C;
      /* height: 172px; */
      box-sizing: border-box;
      border-radius: 8px;
      margin: 20px 0px 20px;
      padding: 22px 32px;
      position: relative;
      h5 {
        color: #111111;
        font-size: 16px;
        line-height: 30px;
        padding-bottom: 15px;
        border-bottom: 1px solid #F0F0F6;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 33.333333%;
          margin-top: 15px;
          padding-right: 10px;
          input {
            float: left;
            margin-right: 5px;
          }
          label {
            cursor: pointer;
            line-height: 18px;
          }
        }
      }
      .type__details__btn {
        position: absolute;
        top: 22px;
        right: 32px;
        button {
          border: 1px solid #999999;
          box-sizing: border-box;
          border-radius: 4px;
          background: #FFFFFF;
          padding: 0 12px;
          margin-left: 10px;
          line-height: 24px;
          height: 36px;
        }
      }
    }

  }

  .type__btn {
    position: absolute;
    bottom: 32px;
    left: calc(50%);
    transform: translateX(-50% + 200px);
    .btn__form {
      width: 104px;
      height: 35px;
      background: #FFFFFF;
      color: #047B6C;
      border-radius: 4px;
      border: none;
      border: 1px solid #047B6C;
    }
    .btn__submit {
      width: 104px;
      height: 35px;
      margin-left: 10px;
      background: #047B6C;
      color: #FFFFFF;
      border-radius: 4px;
    }
    
  }
`