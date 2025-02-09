import { Container, Image, Carousel } from "react-bootstrap";
import "./Main.css";

function Main() {
  return (
    <Container fluid className="hero-section p-0">
      <Container className="hero-content">
        <h1 className="hero-title">VISIT ROMANIA</h1>
        <h2 className="hero-text">
          Here you have everything: mountains, hills, plains, sea
          <br />
          Feed your eyes and soul
        </h2>
      </Container>

      <Container fluid className="images-carousel p-0">
        <Carousel variant="dark" interval={3000} pause="hover">
          <Carousel.Item>
            <Image
              className="hero-image"
              fluid
              src="https://www.traveltalktours.com/wp-content/uploads/2022/02/shutterstock_215874331-scaled-e1643727494715.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="hero-image"
              fluid
              src="https://visit-romania.eu/wp-content/uploads/2016/04/085.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="hero-image"
              fluid
              src="https://visit-romania.eu/wp-content/uploads/2016/04/005-Sinaia.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}

export default Main;
