import { Card } from "react-bootstrap";

import "./EventsCards.css";

const cardsData = [
  {
    title: "UNTOLD",
    imageUrl:
      "https://mixmag.net/assets/uploads/images/_fullX2/untold-2022-lead.jpg",
    description:
      "Held in Cluj-Napoca over four days, from July 30 to August 2, UNTOLD is the biggest electronic music festival in Romania and has won numerous awards attesting to its international recognition. In 2019, UNTOLD hosted 372,000 attendees – a testament to the festival’s success."
  },
  {
    title: "Electric Castle at Banffy Castle",
    imageUrl: "https://www.romanianfriend.com/uploads/media/img-5706.jpg",
    description:
      "Taking place in the fairy-tale setting of the Banffy Estate in Bonțida, Cluj County, Electric Castle runs from July 15-19. It combines various musical genres, offering diversity for attendees with electronic, hip-hop, reggae, rock, trap, and techno."
  },
  {
    title: "Sunwaves",
    imageUrl:
      "https://mediacdn.libertatea.ro/unsafe/1260x708/smart/filters:contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2024/04/sunwaves-festival-7.png",
    description:
      "Held twice a year – in spring, from April 30 to May 6, and in summer (with the August dates yet to be announced) – Sunwaves takes place in Mamaia, Constanța, featuring over 95 electronic music artists."
  },
  {
    title: "NeverSea, by the Black Sea",
    imageUrl:
      "https://atacdeconstanta.com/wp-content/uploads/2023/07/neversea-6.jpg",
    description:
      "Happening from July 2-5, Neversea is the largest beach festival in Europe. Located in Constanța, on Neversea Beach south of Monden Beach, it features five stages for diverse artistic experiences."
  },
  {
    title: "Beach,please!",
    imageUrl:
      "https://cdn.g4media.ro/wp-content/uploads/2024/07/image00002.jpeg",
    description:
      "Held in Costinești, Romania, Beach, Please! runs from July 10 to July 14. Known as one of the biggest hip-hop and urban music events in Eastern Europe, this beachside festival quickly gained popularity due to its unique seaside location and impressive lineup. Over five days, multiple stages offer a mix of hip-hop, trap, and electronic music. This blend of international and local talent, paired with the unique coastal setting, has made Beach, Please! a landmark event on Romania’s festival scene."
  },
  {
    title: "Summerwell",
    imageUrl:
      "https://www.wall-street.ro/article_pictures/243063_first.jpg?v=1563968431",
    description:
      "Taking place from August 8-10 on the Știrbey Estate in Buftea, Summerwell is a major indie, pop, and alternative music festival. The event will celebrate its 13th edition in a storybook setting amid historic parklands with lakes and lush vegetation. With five stages, the festival will host international bands like Royal Blood, Nothing But Thieves, Keane, and Two Door Cinema Club, as well as emerging Romanian artists on the Sunset Stage. The atmosphere is enhanced by artistic installations, relaxation zones, and after-parties that run into the early hours."
  }
];

function EventsCards() {
  return (
    <div className="about-cards-container">
      {cardsData.map((card, index) =>
        <Card key={index} className="events-card">
          <Card.Img variant="top" src={card.imageUrl} />
          <Card.Body>
            <Card.Title>
              {card.title}
            </Card.Title>
            <Card.Text>
              {card.description}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default EventsCards;
