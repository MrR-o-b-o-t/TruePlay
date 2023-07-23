import { useState, useEffect } from "react";
import { Container, Form, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import MainButton from "../../Components/MainButton/MainButton";

import "./Account.css";

// const fakeApiCall = async (newUsername, newEmail) => {
//     try {
//       const response = await fetch('https://fakeapi.com/addaccount', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: newUsername, email: newEmail }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         return true;
//       } else {
//         throw new Error(data.message);
//       }
//     } catch (error) {
//       throw new Error('Failed to add the account. Please try again later.');
//     }
//   };

const Account = () => {
  const storedUserData = localStorage.getItem("user");
  let userData = JSON.parse(storedUserData);
  if (!userData?.accounts) {
    userData = {
      ...userData,
      accounts: [{ username: userData.username, email: userData.email }],
    };
    localStorage.setItem("user", JSON.stringify(userData));
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userAccounts, setUserAccounts] = useState(userData.accounts);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const updatedUserData = { ...userData, accounts: userAccounts };
    localStorage.setItem("user", JSON.stringify(updatedUserData));
  }, [userAccounts, userData]);

  const handleAddAccount = () => {
    if (username && email) {
      const newAccount = { username, email };
      const updatedAccounts = [...userAccounts, newAccount];
      setUserAccounts(updatedAccounts);

      const updatedUserData = { ...userData, accounts: updatedAccounts };
      localStorage.setItem("user", JSON.stringify(updatedUserData));

      setUsername("");
      setEmail("");
      setError("");
    } else {
      setError("Please fill out both fields.");
    }
  };

  //   const handleAddAccount = async () => {
  //     if (username && email) {
  //       try {
  //         await fakeApiCall(username, email);

  //         const newAccount = { username, email };
  //         const updatedAccounts = [...userAccounts, newAccount];
  //         setUserAccounts(updatedAccounts);

  //         const updatedUserData = { ...userData, accounts: updatedAccounts };
  //         localStorage.setItem("user", JSON.stringify(updatedUserData));

  //         setUsername("");
  //         setEmail("");
  //         setError("");
  //         navigate("/");
  //       } catch (error) {
  //         setError(error.message);
  //       }
  //     } else {
  //       setError("Please fill out both fields.");
  //     }
  //   };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleUsernameChange = (newUsername) => {
    const updatedUserData = { ...userData, username: newUsername };
    localStorage.setItem("user", JSON.stringify(updatedUserData));
  };

  return (
    <Container>
      <h1 className="text-center mb-5 mt-4 settings__title">Account</h1>
      <Card className="account__card rounded">
        <Card.Body>
          <Card.Title className="mb-4">
            Current User: {userData.username}
          </Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-md-start justify-content-center">
            <MainButton
              classText="mt-3 mx-3"
              buttonText="Add Account"
              onClick={handleAddAccount}
            />
          </div>
        </Card.Body>
      </Card>

      <div className="mt-4">
        <h3 className="text-center mt-5 settings__title">User Accounts</h3>
        {userAccounts.map((account, index) => (
          <Card key={index} className="account__card rounded mb-2">
            <Card.Body>
              <p>Username: {account.username}</p>
              <p>Email: {account.email}</p>
              <hr />
              <div className="d-flex justify-content-md-start justify-content-center">
                <Link to="/">
                  <MainButton
                    classText="mb-3 ml-md-3"
                    variant="primary"
                    onClick={() => handleUsernameChange(account.username)}
                    buttonText="Change Account"
                  />
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* <div className="d-flex justify-content-md-start justify-content-center mb-3 ">
        <Link to="/">
          <MainButton
            classText="mt-3"
            buttonText="Back to Profile"
            onClick={() => handleUsernameChange(username)}
          />
        </Link>
      </div> */}
    </Container>
  );
};

export default Account;
