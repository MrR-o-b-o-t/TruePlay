import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import "./SubscriptionModal.css";

const SubscriptionModal = ({ show, setShow, handleSubscriptionChange }) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Annual");

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitSubscriptionChange = () => {
    handleSubscriptionChange(selectedPlan);
    setShow(false);
  };

  // const fakeSubscriptionChange = aync (selectedPlan) => {
  //   try {
  //     const url = "https://trueplay/subscription";
  //     const body = { plan: selectedPlan };

  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to change subscription.");
  //     }

  //     const data = await response.json();
  //     return data.isSubscriptionChanged;
  //   } catch (error) {
  //     console.log("API Error:", error.message);
  //     throw new Error("API Error");
  //   }
  // };

  // const handleSubmitSubscriptionChange = async () => {
  //   try {
  //     const isSubscriptionChanged = await fakeSubscriptionChange(selectedPlan);

  //     if (isSubscriptionChanged) {
  //       console.log("Subscription changed succesfully!");
  //     } else {
  //       console.log("Error changing subscription.");
  //     }
  //     handleSubscriptionChange(selectedPlan);
  //     setShow(false);
  //   } catch (error) {
  //     console.lo("API Error:", error.message);
  //   }
  // };

  const handleCancelMembership = () => {
    localStorage.clear();
    navigate("/register");
  };

  return (
    <Modal
      className="subscription__modal"
      show={show}
      onHide={handleClose}
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal__title">Change Subscription</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Current Plan: {selectedPlan}</p>
        <p>Select a new plan:</p>
        <div className="d-flex justify-content-between">
          <Button
            className="m-2"
            variant={selectedPlan === "Annual" ? "primary" : "outline-primary"}
            onClick={() => setSelectedPlan("Annual")}
          >
            Annual Plan
          </Button>
          <Button
            className="m-2"
            variant={selectedPlan === "Monthly" ? "primary" : "outline-primary"}
            onClick={() => setSelectedPlan("Monthly")}
          >
            Monthly Plan
          </Button>
          <Button
            className="m-2"
            variant="danger"
            onClick={handleCancelMembership}
          >
            Cancel Membership
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitSubscriptionChange}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SubscriptionModal;
