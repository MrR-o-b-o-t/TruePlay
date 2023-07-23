import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import "./Navigation.css";
import truePlay from "../../images/trueplay.png";

const Navigation = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
  };

  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <Navbar expand="lg" className="navigation" expanded={isNavExpanded}>
      <Navbar.Brand className="trueplay-nav-brand">
        <img src={truePlay} alt="TruePlay Logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="ml-auto nav-items custom-toggler"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav onClick={handleLinkClick}>
          {isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="/">
                Settings
              </Nav.Link>
              <Nav.Link as={Link} to="/account">
                Account
              </Nav.Link>
              <Nav.Link as={Link} to="/login" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
