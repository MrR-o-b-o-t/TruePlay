import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MainButton from "../../Components/MainButton/MainButton";

import "./LoginPage.css";

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  // const fakeLoginAPI = async (username, password) => {
  //   try {
  //     const apiUrl = "https://example.com/fake-login";
  //     const response = await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
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
  //     const isLoggedIn = await fakeLoginAPI(username, password);
  //     if (isLoggedIn) {
  //       setUsername("");
  //       setPassword("");
  //       setIsLoggedIn("true");
  //       navigate("/");
  //     } else {
  //       setErr("Incorrect username or password. Please try again.");
  //     }

  //     console.log("Username:", username);
  //     console.log("Password:", password);
  //   } catch (error) {
  //     console.log("API Error:", error.message);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      if (username === userData.username && password === userData.password) {
        setUsername("");
        setPassword("");

        setIsLoggedIn("true");

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
      <h1 className="login-title text-center mt-4">Login</h1>
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
              autoComplete="on"
            />
          </Form.Group>
          <MainButton
            classText="mt-3"
            buttonText="Login"
            onClick={handleSubmit}
          />
          <Link to="/register">
            <MainButton buttonText="Register" classText="mt-3 mx-3" />
          </Link>
        </Form>
      </Container>
    </Container>
  );
};

export default LoginPage;
