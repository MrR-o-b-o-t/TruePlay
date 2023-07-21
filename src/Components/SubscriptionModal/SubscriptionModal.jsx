import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import "./SubscriptionModal.css";

const SubscriptionModal = ({ show, setShow, handleSubscriptionChange }) => {
  const [selectedPlan, setSelectedPlan] = useState("Annual");

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitSubscriptionChange = () => {
    handleSubscriptionChange(selectedPlan);
    setShow(false);
  };

  // const fakeSubscriptionChange = async (selectedPlan) => {
  //   try {
  //     return true;
  //   } catch (error) {
  //     console.log("API Error:", error.message);
  //     throw new Error("API Error");
  //   }
  // };

  // const handleSubmitSubscriptionChange = async () => {
  //   try {
  //     const isSubscriptionChanged = await fakeSubscriptionChange(selectedPlan);
  //     if (isSubscriptionChanged) {
  //       console.log("Subscription changed successfully!");
  //     } else {
  //       console.log("Error changing subscription.");
  //     }
  //     console.log("Selected Plan:", selectedPlan);
  //     setShow(false);
  //   } catch (error) {
  //     console.log("API Error:", error.message);
  //   }
  // };

  return (
    <Modal
      className="subscription__modal"
      show={show}
      onHide={handleClose}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal__title">Change Subscription</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Current Plan: {selectedPlan}</p>
        <p>Select a new plan:</p>
        <div className="d-flex justify-content-between">
          <Button
            variant={selectedPlan === "annual" ? "primary" : "outline-primary"}
            onClick={() => setSelectedPlan("Annual")}
          >
            Annual Plan
          </Button>
          <Button
            variant={selectedPlan === "monthly" ? "primary" : "outline-primary"}
            onClick={() => setSelectedPlan("Monthly")}
          >
            Monthly Plan
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
