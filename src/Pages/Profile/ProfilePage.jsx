import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import MainModal from "../../Components/Modal/Modal";
import PasswordModal from "../../Components/PasswordModal/PasswordModal";
import SubscriptionModal from "../../Components/SubscriptionModal/SubscriptionModal";

import "./ProfilePage.css";

const ProfilePage = () => {
  const [userEmailVerified, setUserEmailVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [show, setShow] = useState(true);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const storedUserData = localStorage.getItem("user");
  const userData = JSON.parse(storedUserData);

  const openModal = () => {
    setShowModal(true);
  };

  const openPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const handleCloseAlert = () => {
    setShow(false);
  };

  const handleSubscriptionChange = (selectedPlan) => {
    // Possibly initially set this at Register page?
    // store in "user" object
    console.log("Selected Plan:", selectedPlan);
  };

  if (!userData) {
    return (
      <>
        <p>Please Login to view your profile.</p>
      </>
    );
  }

  return (
    <Container>
      <h1 className="text-center mb-5">Settings</h1>
      <Card className="profile__cards rounded">
        <Card.Body>
          <h3 className="mb-4">Account</h3>
          <Card.Text>
            {!userEmailVerified && show ? (
              <Alert
                className="email__alert"
                variant="danger"
                onClose={handleCloseAlert}
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
            <div className="d-flex justify-content-between align-items-start">
              <div>
                {userData.email}{" "}
                {!userEmailVerified ? (
                  <span className="text-danger">(Not Verified)</span>
                ) : (
                  <span className="text-success">(Verified)</span>
                )}
              </div>
              <Button className="main__btn" onClick={openModal}>
                Verify Email
              </Button>
            </div>
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
            onClick={openPasswordModal}
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
          <Button
            variant="link"
            className="text-decoration-none float-right"
            onClick={() => setShowSubscriptionModal(true)}
          >
            Manage <i className="fas fa-arrow-right"></i>
          </Button>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="">Next Billing Date</Card.Text>
          <Card.Text className="text-muted">June 3, 2023</Card.Text>
        </Card.Footer>
      </Card>
      <MainModal
        emailAddress="Sample.email@gmail.com"
        showModal={showModal}
        setShowModal={setShowModal}
        handleCloseAlert={handleCloseAlert}
        setUserEmailVerified={setUserEmailVerified}
      />
      <SubscriptionModal
        show={showSubscriptionModal}
        setShow={setShowSubscriptionModal}
        handleSubscriptionChange={handleSubscriptionChange}
      />
      <PasswordModal show={showPasswordModal} setShow={setShowPasswordModal} />
    </Container>
  );
};

export default ProfilePage;
