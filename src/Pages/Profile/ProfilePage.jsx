import { useState } from "react";
import { Card, Button, Alert, Form, Container } from "react-bootstrap";

import "./ProfilePage.css";

const ProfilePage = () => {
  const [userEmailVerified, setUserEmailVerified] = useState(false);
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
              <Alert variant="danger">Your email has not been verified</Alert>
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
            type="switch"
            id="newsletterSwitch"
            label="Send me Newsletters and Promotions"
          />
        </Card.Body>
        <Card.Footer className="">
          <small className="text-muted">Password</small>
          <Button variant="link" className="text-decoration-none float-right">
            Change Password <i className="fas fa-pencil-alt"></i>
          </Button>
        </Card.Footer>
      </Card>

      <Card className="profile__cards rounded mt-3">
        <Card.Body>
          <h3 className="mb-3">Subscriptions</h3>
          <Card.Title>Current Plan</Card.Title>
          <Card.Text>Annual</Card.Text>
          <Button variant="link" className="text-decoration-none float-right">
            Manage <i className="fas fa-arrow-right"></i>
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Next Billing Date</small>
          <Card.Text>June 3, 2023</Card.Text>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProfilePage;
