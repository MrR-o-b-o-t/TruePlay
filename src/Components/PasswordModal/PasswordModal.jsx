import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./PasswordModal.css";

const PasswordModal = ({ show, setShow, handleSubmitChangePassword }) => {
  const [newPassword, setNewPassword] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitPasswordChange = () => {
    const storedUserData = localStorage.getItem("user");
    const userData = JSON.parse(storedUserData);
    userData.password = newPassword;
    localStorage.setItem("user", JSON.stringify(userData));
    console.log(JSON.parse(localStorage.getItem("user")));
    setShow(false);
  };

  return (
    <Modal
      className="password__modal"
      show={show}
      onHide={handleClose}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal__title">Change Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Enter a new password:</p>
        <Form>
          <Form.Group controlId="newPassword">
            <Form.Control
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              autocomplete="on"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitPasswordChange}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PasswordModal;
