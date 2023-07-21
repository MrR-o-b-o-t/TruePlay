import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navigation ">
      <Navbar.Brand>
        <Nav.Link as={Link} to="/login">
          TruePlay
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Settings
          </Nav.Link>
          <Nav.Link as={Link} to="/account">
            Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
