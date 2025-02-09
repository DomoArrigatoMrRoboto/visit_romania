import { useState } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [expanded, setExpanded] = useState(false); 

  return (
    <Navbar
      expand="sm"
      bg="white" 
      className="nav-bar fixed-top w-100 shadow" 
      expanded={expanded} 
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <Image
            className="logo"
            src="https://visit-romania.eu/wp-content/uploads/2016/04/1-1.png"
            alt="Logo"
          />
        </Navbar.Brand>
       
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/experiences" onClick={() => setExpanded(false)}>
              Experiences
            </Nav.Link>
            <Nav.Link as={Link} to="/discover" onClick={() => setExpanded(false)}>
              Discover
            </Nav.Link>
            <Nav.Link as={Link} to="/events" onClick={() => setExpanded(false)}>
              Events
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
