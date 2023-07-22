import Card from "react-bootstrap/Card";
import MainButton from "../../Components/MainButton/MainButton";
import EmailVerificationAlert from "../../Components/EmailVerificationAlert/EmailVerificationAlert";
import NewsletterSwitch from "../NewsLetterCheck/NewsLetterSwitch";
import Button from "react-bootstrap/Button";

import "./AccountCard.css";

const AccountCard = ({
  userData,
  show,
  handleCloseAlert,
  handleVerifyEmail,
  openPasswordModal,
}) => {
  const storedPassword = localStorage.getItem("password");
  const passwordLength = storedPassword ? storedPassword.length : 5;

  return (
    <Card className="profile__cards rounded">
      <Card.Body>
        <h3 className="mb-4">Account: {userData.username}</h3>
        {show && !userData.isEmailVerified && (
          <EmailVerificationAlert handleCloseAlert={handleCloseAlert} />
        )}

        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
          <div className="text-center text-md-start">
            <Card.Title>Email Address</Card.Title>
            <Card.Text>
              <div className="text-muted">
                {userData.email}{" "}
                {!userData.isEmailVerified ? (
                  <span className="text-danger">(Not Verified)</span>
                ) : (
                  <span className="text-success">(Verified)</span>
                )}
              </div>
            </Card.Text>
          </div>
          {!userData.isEmailVerified && (
            <div className="mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end">
              <MainButton
                buttonText="Verify Email"
                onClick={handleVerifyEmail}
              />
            </div>
          )}
        </div>

        <div className="mt-3">
          <NewsletterSwitch />
        </div>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center">
        <div className="d-flex flex-column align-items-start">
          <Card.Text className="mb-2">Password</Card.Text>
          <div className="d-flex text-start align-items-center">
            {Array.from({ length: passwordLength }).map((_, index) => (
              <i key={index} className="fas fa-star mr-1"></i>
            ))}
          </div>
        </div>
        <Button
          variant="link"
          className="text-decoration-none float-right ml-auto"
          onClick={openPasswordModal}
        >
          Change Password <i className="fas fa-pencil-alt px-1"></i>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default AccountCard;
