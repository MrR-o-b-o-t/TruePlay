import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form';

// import "./PasswordModal.css";

const PasswordModal = ({ show, setShow, handleChangePassword }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitPasswordChange = () => {
    setShow(false);
  };

  return (
    <Modal className='password__modal' show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title id="modal__title">Change Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Enter a new password:
        </p>
        <Form.Group controlId="newPassword">
          <Form.Control
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
        </Form.Group>
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
