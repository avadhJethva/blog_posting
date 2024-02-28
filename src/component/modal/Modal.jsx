import React, { useEffect, useRef, useState } from "react"
import { ModalCloseBtn, StyledModal } from "./style"

const Modal = ({ isOpen, hasCloseBtn = true, onClose, children, width }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen)
  const modalRef = useRef(null)

  const handleCloseModal = () => {
    if (onClose) {
      onClose()
    }
    setModalOpen(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal()
    }
  }

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const modalElement = modalRef.current

    if (modalElement) {
      isModalOpen ? modalElement.showModal() : modalElement.close()
    }
  }, [isModalOpen])

  return (
    <StyledModal
      width={width}
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className="modal"
    >
      {hasCloseBtn && (
        <ModalCloseBtn onClick={handleCloseModal}>X</ModalCloseBtn>
      )}
      {children}
    </StyledModal>
  )
}

export default Modal
