import { Alert } from "react-bootstrap";

const EmailVerificationAlert = ({ handleCloseAlert }) => {
  return (
    <Alert
      className="email__alert"
      variant="danger"
      onClose={handleCloseAlert}
      dismissible
    >
      Your email has not been verified
    </Alert>
  );
};

export default EmailVerificationAlert;
