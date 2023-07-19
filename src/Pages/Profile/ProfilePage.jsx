import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import "./ProfilePage.css";

const ProfilePage = () => {
  const [userEmailVerified, setUserEmailVerified] = useState(false);
  const [show, setShow] = useState(true);
  const handleVerifyEmail = () => {
    if (!userEmailVerified) {
      setUserEmailVerified(true);
      console.log("handleVerifyEmail ran");
    }
  };

  return (
    <Container>
      <h1 className="text-center mb-5">Settings</h1>
      <Card className="profile__cards rounded">
        <Card.Body>
          <h3 className="mb-4">Account</h3>
          <Card.Text>
            {!userEmailVerified ? (
              <Alert
                className="email__alert"
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
              >
                Your email has not been verified
              </Alert>
            ) : (
              ""
            )}
          </Card.Text>
          <Card.Title>Email Address</Card.Title>
          <Card.Text>
            Sample.email@gmail.com{" "}
            {!userEmailVerified ? <p>(Not Verified)</p> : <p>(Verified)</p>}
            <Button
              className="float-right main__btn"
              onClick={handleVerifyEmail}
            >
              Verify Email
            </Button>
          </Card.Text>
          <Form.Check
            id="newsletterSwitch"
            label="Send me Newsletters and Promotions"
          />
        </Card.Body>
        <Card.Footer className="d-flex align-items-center">
          <Card.Text className="">Password</Card.Text>
          <Button
            variant="link"
            className="text-decoration-none float-right ml-auto"
          >
            Change Password <i className="fas fa-pencil-alt"></i>
          </Button>
        </Card.Footer>
      </Card>

      <Card className="profile__cards rounded mt-3">
        <Card.Body>
          <h3 className="mb-3">Subscriptions</h3>
          <Card.Title>Current Plan</Card.Title>
          <Card.Text className="text-muted">Annual</Card.Text>
          <Button variant="link" className="text-decoration-none float-right">
            Manage <i className="fas fa-arrow-right"></i>
          </Button>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="">Next Billing Date</Card.Text>
          <Card.Text className="text-muted">June 3, 2023</Card.Text>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProfilePage;
