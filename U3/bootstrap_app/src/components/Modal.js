import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyModal() {

  // State to control modal visibility
  const [show, setShow] = useState(false);

  // Open modal
  const handleShow = () => setShow(true);

  // Close modal
  const handleClose = () => setShow(false);

  return (
    <div className="m-3">

      {/* Button to open modal */}
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      {/* Modal Component */}
      <Modal show={show} onHide={handleClose}>

        {/* Modal Header */}
        <Modal.Header closeButton>
          <Modal.Title>
            React Bootstrap Modal
          </Modal.Title>
        </Modal.Header>

        {/* Modal Body */}
        <Modal.Body>
          Welcome to React Bootstrap Modal Example.
        </Modal.Body>

        {/* Modal Footer */}
        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>

          <Button
            variant="success"
            onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;