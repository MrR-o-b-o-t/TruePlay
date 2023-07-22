import { useState } from "react";
import Container from "react-bootstrap/Container";
import MainModal from "../../Components/Modal/Modal";
import PasswordModal from "../../Components/PasswordModal/PasswordModal";
import SubscriptionModal from "../../Components/SubscriptionModal/SubscriptionModal";
// import MainButton from "../../Components/MainButton/MainButton";
import EmailVerificationAlert from "../../Components/EmailVerificationAlert/EmailVerificationAlert";
import NewsletterSwitch from "../../Components/NewsLetterCheck/NewsLetterSwitch";
import SubscriptionCard from "../../Components/SubscriptionCard/SubscriptionCard";
import AccountCard from "../../Components/AccountCard/AccountCard";

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

  // const handleCloseAlert = () => {
  //   setShow(false);
  // };

  const handleVerifyEmail = () => {
    openModal();
  };

  const handleEmailVerification = (verificationCode) => {
    const isCodeValid = verificationCode === "1234";

    if (isCodeValid) {
      const updatedUserData = { ...userData, isEmailVerified: true };
      localStorage.setItem("user", JSON.stringify(updatedUserData));
      setUserEmailVerified(true);
      setShowModal(false);
    } else {
      console.log("Invalid verification code");
    }
  };

  const handleSubscriptionChange = (selectedPlan) => {
    localStorage.setItem("plan", selectedPlan);
    const updateUserData = { ...userData, plan: selectedPlan };
    localStorage.setItem("user", JSON.stringify(updateUserData));
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
      <h1 className="text-center mb-5 mt-4 settings__title">Settings</h1>

      <AccountCard
        userData={userData}
        show={show}
        userEmailVerified={userEmailVerified}
        handleCloseAlert={() => setShow(false)}
        handleVerifyEmail={handleVerifyEmail}
        openPasswordModal={openPasswordModal}
      />

      <SubscriptionCard
        userData={userData}
        setShowSubscriptionModal={setShowSubscriptionModal}
      />

      <MainModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleCloseAlert={() => setShow(false)}
        handleEmailVerification={handleEmailVerification}
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
