import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import "./modal.scss";

const Modal = ({ children, title, hide }) => {
  return (
    <>
      <div className="modal-blur">
        <div className="modal-wrapper">
          <div className="modal-main">
            <div className="modal-head">
              <p>{title}</p>

              <AiFillCloseSquare
                className="close-btn"
                onClick={() => hide(false)}
              />
            </div>
            <hr />
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
