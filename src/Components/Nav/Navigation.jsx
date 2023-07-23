import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="navigation">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="/">
                Settings
              </Nav.Link>
              <Nav.Link as={Link} to="/account">
                Account
              </Nav.Link>
              <Nav.Link
                className="ml-auto"
                as={Link}
                to="/login"
                onClick={handleLogout}
              >
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
