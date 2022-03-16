import React, { useState, useEffect } from "react";
import { ModalWrapper, ModalOverlay, ModalInner } from "./style";

const DisclosureModal = ({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e) => {
    if (onClose) {
      onClose(e)
    }
  }
  
  DisclosureModal.defaultProps = {
    closable: true,
    maskClosable: true,
    visible: false
  }
  
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal__inner">
          {/* {closable && <button className="modal__close" onClick={close} />} */}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  )
}

export default DisclosureModal;