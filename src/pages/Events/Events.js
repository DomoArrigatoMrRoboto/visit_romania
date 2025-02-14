import React from "react";
import "./Events.css";
import { Container, Image } from "react-bootstrap";
import EventsCards from "../../components/EventsCards/EventsCards";

function Events() {
  return (
    <Container fluid className="events-container vh-100 p-0">
      <div className="banner">
        <Image
          className="banner-image"
          src="https://www.romanianfriend.com/uploads/media/untold-festival-homepage-favourites-gallery.jpg"
          fluid
        />
        <h1 className="banner-title p-5">
          Music Festivals & Events in Romania
        </h1>
      </div>

      <h5 className="events-article">
        Welcome to the lively world of the best festivals of Romania where a mix
        of live music, culture, history, and good vibes will surprise and offer
        you an amazing experience and another good reason to visit our country!
        In recent years, the Romanian festival scene has developed
        significantly. Currently, you have the opportunity to discover here some
        of the best cultural events for music lovers all over the world:
      </h5>

     <div>
     <EventsCards />
     </div>
    </Container>
  );
}

export default Events;
