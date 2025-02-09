import React from "react";
import Cards from "../../components/Cards/Cards";
import "./Discover.css";
import { Container } from "react-bootstrap";

function Discover() {
  return (
    <Container className="discover-container pt-5" fluid>
      <div className="discover-page">
        <h1 className="discover-title p-5">TRAVEL TO ROMANIA: DISCOVER BEAUTIFUL CITIES</h1>
        <Cards />
      </div>
    </Container>
  );
}

export default Discover;
