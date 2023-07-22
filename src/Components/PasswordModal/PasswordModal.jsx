import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./PasswordModal.css";

const PasswordModal = ({ show, setShow }) => {
  const [newPassword, setNewPassword] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  // const fakePasswordVerification = async (newPassword) => {
  //   try {
  //     return true;
  //   } catch (error) {
  //     console.log("API Error:", error.message);
  //     throw new Error("API Error");
  //   }
  // };

  // const handleSubmitPasswordChange = async () => {
  //   try {
  //     const isPasswordValid = await fakePasswordVerification(newPassword);
  //     if (isPasswordValid) {
  //       console.log("Password changed successfully!");
  //       setShow(false);
  //     } else {
  //       console.log("Error changing password.");
  //     }
  //     setNewPassword("");
  //   } catch (error) {
  //     console.log("API Error:", error.message);
  //   }
  // };

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
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
              autoComplete="on"
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
