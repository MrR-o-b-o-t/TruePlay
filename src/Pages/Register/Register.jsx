import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, Alert } from "react-bootstrap";
import MainButton from "../../Components/MainButton/MainButton";

import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState("");

  const [err, setErr] = useState("");

  const navigate = useNavigate();

  // const fakeRegisterAPI = async (userData) => {
  //   try {
  //     const apiUrl = "https://example.com/fake-register";
  //     const response = await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("API Error");
  //     }

  //     return true;
  //   } catch (error) {
  //     console.log("API Error:", error.message);
  //     throw new Error("API Error");
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const userData = {
  //       username,
  //       firstName,
  //       lastName,
  //       email,
  //       phoneNumber,
  //       password,
  //       plan,
  //     };

  //     const isRegistered = await fakeRegisterAPI(userData);

  //     if (isRegistered) {
  //       localStorage.setItem("user", JSON.stringify(userData));
  //       console.log(userData);

  //       setUsername("");
  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setPhoneNumber("");
  //       setPassword("");
  //       setPlan("");

  //       navigate("/login");
  //     } els {
  //       setErr("Registration failed. Please try again.");
  //     }

  //     console.log(userData);
  //   } catch (error) {
  //     console.log("API Error:", error.message);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((username, firstName, lastName, email, phoneNumber, password, plan)) {
      const userData = {
        username,
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        plan,
        isEmailVerified: false,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      console.log(userData);

      setUsername("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setPlan("");

      navigate("/login");
    } else {
      setErr("Please fill out all fields.");
    }
  };

  return (
    <Container>
      {err && <Alert variant="danger">{err}</Alert>}
      <h2 className="register-title text-center mt-4">Register</h2>
      <Container className="register__container p-3 rounded mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="plan">
            <Form.Label>Plan:</Form.Label>
            <Form.Select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              required
            >
              <option>Choose Plan</option>
              <option value="Annual">Annual</option>
              <option value="Monthly">Monthly</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Label>User Name:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="on"
            />
          </Form.Group>
          <MainButton
            classText="mt-3"
            buttonText="Register"
            onClick={handleSubmit}
          />
        </Form>
      </Container>
    </Container>
  );
};

export default Register;
