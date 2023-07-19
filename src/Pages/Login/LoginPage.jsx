import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      if (username === userData.username && password === userData.password) {
        setUsername("");
        setPassword("");

        localStorage.setItem("isLoggedIn", true);

        navigate("/");
      } else {
        setErr("Incorrect username or password. Please try again.");
      }
    } else {
      setErr("No user data found. Please register first.");
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-2">Login</h1>
      <Container className="login__container p-3 rounded mt-5">
        <Form onSubmit={handleSubmit}>
          {err && <Alert variant="danger">{err}</Alert>}
          <Form.Group controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <Button className="mt-3 main__btn" variant="primary" type="submit">
            Login
          </Button>
          <Link to="/register">
            <Button className="mt-3 mx-3 main__btn">Register</Button>
          </Link>
        </Form>
      </Container>
    </Container>
  );
};

export default LoginPage;
