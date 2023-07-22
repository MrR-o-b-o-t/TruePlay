import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Modal.css";

const MainModal = ({ showModal, setShowModal, handleEmailVerification }) => {
  const [verificationCode, setVerificationCode] = useState("");

  const storedUserEmail = localStorage.getItem("user");
  const userEmail = JSON.parse(storedUserEmail);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmitEmailVerification = () => {
    handleEmailVerification(verificationCode);
    setVerificationCode("");
    handleClose();
  };

  return (
    <>
      <Modal
        className="main__modal"
        show={showModal}
        onHide={handleClose}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal__title">Verify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            TruePlay sent an email to {userEmail.email}. Please enter the
            4-digit verification code below:
          </p>
          <Form.Group controlId="verificationCode">
            <Form.Control
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter verification code"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitEmailVerification}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MainModal;
