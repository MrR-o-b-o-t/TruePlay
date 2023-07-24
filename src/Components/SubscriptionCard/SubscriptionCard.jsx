import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./SubscriptionCard.css";

const SubscriptionCard = ({ userData, setShowSubscriptionModal }) => {
  return (
    <Card className="profile__cards rounded mt-3 mb-4">
      <Card.Body>
        <h3 className="mb-5">Subscriptions</h3>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title className="mb-1">Current Plan</Card.Title>
              <Card.Text className="text-muted">{userData.plan}</Card.Text>
            </div>
            <Button
              variant="link"
              className="text-decoration-none custom-link-button"
              onClick={() => setShowSubscriptionModal(true)}
            >
              Manage{" "}
              <i className="fa fa-chevron-right px-2" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <Card.Text className="mb-1">Next Billing Date</Card.Text>
        <Card.Text className="text-muted">June 3, 2023</Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default SubscriptionCard;
