import { Alert } from "react-bootstrap";

import "./EmailVerificationAlert.css";

const EmailVerificationAlert = ({ handleCloseAlert }) => {
  return (
    <Alert
      className="email__alert"
      variant="danger"
      onClose={handleCloseAlert}
      dismissible
    >
      <strong>Your email has not been verified</strong>.
      {` In order to receive important notifications and information about your account please select "Verify Email" button bellow.`}
    </Alert>
  );
};

export default EmailVerificationAlert;
