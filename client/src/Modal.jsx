import React from "react";
import ReactDOM from "react-dom";

const Modal = ({open, children, onClose}) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className="overlay"/>
      <div className="modal">
        <button onClick={onClose}>x</button>
      </div>
      <div className="information">
        HEYYYYY
      </div>
    </>,
    document.getElementById("portal")
  )
}

export default Modal;