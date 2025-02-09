import { Container, Card, Row, Col } from "react-bootstrap";

import "./Cards.css";

const cardsData = [
  {
    title: "Cluj Napoca",
    imageUrl:
      "https://visit-romania.eu/wp-content/uploads/2016/11/piata-unirii-cluj-napoca-600x870.jpg",
    url: "https://www.facebook.com/visitclujnapoca/?locale=ro_RO"
  },
  {
    title: "Arad",
    imageUrl:
      "https://visit-romania.eu/wp-content/uploads/2016/11/arad-1-600x870.jpg",
    url: "https://www.facebook.com/aradon5/?locale=ro_RO"
  },
  {
    title: "Timisoara",
    imageUrl:
      "https://visit-romania.eu/wp-content/uploads/2016/11/timisoara-600x870.jpg",
    url: "https://www.facebook.com/visit.timisoara.tm/"
  },
  {
    title: "Sighisoara",
    imageUrl:
      "https://visit-romania.eu/wp-content/uploads/2016/11/019-Sighisoara-600x870.jpg",
    url: "https://www.facebook.com/groups/sighisoara/?locale=ro_RO"
  },
  {
    title: "Bucharest",
    imageUrl:
      "https://www.booktoursromania.com/wp-content/uploads/romanian-athenaeum-2000x2000.jpg",
    url: "https://www.facebook.com/Bucuresti.ro/?locale=ro_RO"
  },
  {
    title: "Brasov",
    imageUrl:
      "https://www.booktoursromania.com/wp-content/uploads/Brasov-aerial-1-1536x1536.jpg",
    url:
      "https://www.facebook.com/places/Ce-poti-face-in-Braov/114791928537378/"
  },
  {
    title: "Sinaia",
    imageUrl:
      "https://www.booktoursromania.com/wp-content/uploads/Peles-Castle-Sinaia-2017-2000x2000.jpg",
    url: "https://www.facebook.com/Sinaia.Group/"
  },
  {
    title: "Sibiu",
    imageUrl:
      "https://www.booktoursromania.com/wp-content/uploads/sibiu-overview-2000x2000.jpg",
    url:
      "https://www.facebook.com/places/Ce-poti-face-in-Sibiu/106314962738289/"
  }
];

function Cards() {
  return (
    <Container>
      <Row className="g-4">
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <a
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card.imageUrl} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
