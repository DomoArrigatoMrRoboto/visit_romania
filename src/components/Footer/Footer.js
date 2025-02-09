import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-auto py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Learn more about our mission, vision, and values.</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 789</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook text-white"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter text-white"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram text-white"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
