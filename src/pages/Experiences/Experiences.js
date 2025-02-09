import React from "react";
import { Container } from "react-bootstrap";
import VideoComponent from "../../components/VideoComponent/VideoComponent";
import "./Experiences.css";

function Experiences() {
    return (
        <Container className="experiences-container" fluid>
            <div className="experiences-page">
                <h1 className="experiences-title p-5 mt-5">ROMANIA TOURIST ATTRACTIONS</h1>
                <VideoComponent />
            </div>
        </Container>
    );
}

export default Experiences;
