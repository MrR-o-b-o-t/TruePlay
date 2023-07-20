import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      plan,
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
  };

  return (
    <Container>
      <h2 className="text-center mt-2">Register</h2>
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
            />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Register;
