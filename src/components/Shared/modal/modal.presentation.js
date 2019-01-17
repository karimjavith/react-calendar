import React from "react";
import ReactDOM from 'react-dom';

const ModalPresentation = ({
  showModal,
  modalElement,
  elementPosition,
  toggleModal
}) => {
    console.log(elementPosition)
  return showModal ? (
    <div style={{position: "absolute"}}>
      <div
        style={{ display: "block", position: "fixed", margin: "0 auto", zIndex: 9998, bottom: "auto", pointerEvents: "all" }}
        className="modal"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                onClick={() => toggleModal(false)}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">{modalElement.title}</h4>
            </div>
            <div className="modal-body">
              <p
                dangerouslySetInnerHTML={{ __html: modalElement.contentHTML }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ModalPresentation;
