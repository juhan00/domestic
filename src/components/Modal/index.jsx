import React from "react";
import { ModalBackground } from "./style";

const Modal = ({ children, isOpen, onCloseModal }) => {
  return (
    <>
      {isOpen && (
        <>
          <ModalBackground onClick={onCloseModal}></ModalBackground>
          {children}
        </>
      )}
    </>
  );
};

export default Modal;
