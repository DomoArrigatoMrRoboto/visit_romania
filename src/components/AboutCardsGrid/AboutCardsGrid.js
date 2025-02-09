import { Card } from "react-bootstrap";

import "./AboutCardsGrid.css";

const cardsData = [
  {
    title: "Traditional hungarian romanian house",
    imageUrl:
      "https://thumbs.dreamstime.com/b/fitod-romania-february-old-traditional-hungarian-house-bright-sunny-day-old-traditional-hungarian-house-bright-sunny-day-172760292.jpg"
  },
  {
    title: "Traditional hungarian house interior in Transylvania",
    imageUrl:
      "https://static8.depositphotos.com/1355276/896/i/950/depositphotos_8967626-stock-photo-traditional-hungarian-house-interior-in.jpg"
  },
  {
    title: "Viscri romanian blue painted traditional house",
    imageUrl:
      "https://img.freepik.com/premium-photo/viscri-romania-blue-old-painted-traditional-house-from-viscri-village-transylvania-german-saxon-community-unesco_527096-4455.jpg"
  },
  {
    title: "Village with fortified church in Transylvania",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Kirchenburg_Birth%C3%A4lm.jpg/800px-Kirchenburg_Birth%C3%A4lm.jpg"
  } ,
  {
    title: "The Turkish Bazaar,Lipova",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFRdXtymI790FVSmOmPyaVUQRrwzhNAyvnvTKGBJvdNuRfBh2xLooPA1DOBuUEgDpBUUmEwTLTVMiWr4WtC_1k0ymLvpQP3FiJsS_-h1AuvEaJiAgi4O6ZuFEFW7_Fh-a03ryNIPcGQEqX/s1600/bazarul_turcesc_lipova.jpg"
  } ,
  {
    title: "Turkish Bath,Iasi",
    imageUrl:
      "https://i.redd.it/turkish-bath-iasi-romania-recently-renovated-v0-4ar3u8jpmk0c1.jpg?width=1416&format=pjpg&auto=webp&s=d3513053ae58217c7a1e28bba320fd51dfdb64a3"
  } ,
  {
    title: "Bucharest Russian Church",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Biserica_rusa_sf_nicolae.jpg/1200px-Biserica_rusa_sf_nicolae.jpg"
  } ,
 
];

function AboutCardsGrid() {
  return (
    <div className="about-cards-container">
      {cardsData.map((card, index) => (
        <Card key={index} className="about-card">
          <Card.Img variant="top" src={card.imageUrl} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AboutCardsGrid;