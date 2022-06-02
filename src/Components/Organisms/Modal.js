import React from 'react';

function Modal({ onClose, show, children }) {
  const handleOnClose = (e) => {
    onClose && onClose(e);
  };

  return (
    <div
      class={`modal-wrapper ${show && 'open-modal'}`}
      onClick={handleOnClose}
    >
      <div class="modal">
        <div class="modal-container">
          <h2>Dimensions</h2>
          <div class="products">{children}</div>
        </div>
        <div class="modal-footer">
          <button onClick={handleOnClose} class="btn btn-primary">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
