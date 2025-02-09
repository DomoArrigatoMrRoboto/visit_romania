import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./VideoComponent.css";

function VideoComponent() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videoData = [
      { title: "Tourism in Romania", videoId: "YJvcc7HAkkg" },
      { title: "Romania Attractions", videoId: "y9dbwctdTFY" },
      { title: "Discover Transylvania", videoId: "v7jNQnjGVEg" },
      { title: "Transfagarasan Road", videoId: "peCtUdws95o" },
      { title: "Romanian Traditional Foods", videoId: "B5lCuINyVCU" },
    ];
    setVideos(videoData);
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        {videos.map((video, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <div className="video-card">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                allowFullScreen
                title={video.title}
              ></iframe>
              <div className="video-card-title">{video.title}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VideoComponent;
