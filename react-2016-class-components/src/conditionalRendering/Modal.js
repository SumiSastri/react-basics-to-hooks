import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalRenderProps() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "cyan" },
          content: { color: "grey", backgroundColor: "light-grey" },
        }}
      >
        <h2>Placeholder:ModalTitle</h2>
        <p>Placeholder: Modal content</p>
        <div>
          <p>Use escape to exit or</p>
          <button
            style={{
              display: "inline-block",
              color: "black",
              backgroundColor: "pink",
              padding: "0.4rem 1.3rem",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              marginRight: "0.5rem",
              transition: "opacity 0.2s ease-in",
              outline: "none",
            }}
            onClick={() => setModalIsOpen(false)}
          >
            Click to close
          </button>
        </div>
      </Modal>
      <div>
        {" "}
        <button
          style={{
            display: "inline-block",
            color: "black",
            backgroundColor: "grey",
            padding: "0.4rem 1.3rem",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
            marginRight: "0.5rem",
            transition: "opacity 0.2s ease-in",
            outline: "none",
          }}
          onClick={() => setModalIsOpen(true)}
        >
          Click to open modal
        </button>
      </div>
    </div>
  );
}

export default ModalRenderProps;
