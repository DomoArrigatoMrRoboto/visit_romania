import React from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "./About.css";
import RomaniaMap from "../../components/RomaniaMap/RomaniaMap";
import AboutCardsGrid from "../../components/AboutCardsGrid/AboutCardsGrid";

function About() {
  return (
    <Container fluid className="about-container vh-100 p-0">
      <div className="banner">
        <Image
          className="banner-image"
          src="https://cdn.pixabay.com/photo/2018/10/03/13/26/transylvania-3721384_640.jpg"
          fluid
        />
        <h1 className="banner-title p-5">LOCATION - WHERE IS ROMANIA</h1>
      </div>

      <Row className="content-row">
        <Col md={6} className="left-section p-3">
          <h5 className="article-text">
            Where is Romania: Romania is a state located in south-eastern
            Europe, surrounded by the Black Sea in the southeast, Bulgaria in
            the south, Moldova in the east, Ukraine in the north, Hungary in the
            northwest and Serbia in the southwest. Romania is the second largest
            country in the area, after Poland.
          </h5>

          <h5 className="article-text">
            Geographical location of Romania: between latitudes 43°37’07″ and
            48°15’06″ North and longitudes 20°15’44″ and 29°41’24″ East. Romania
            extends approximately 300 miles north to south and 400 miles east to
            west. Romanian tradition and culture are complemented by tradition
            and habits of ethnic groups that are concentrated in certain areas
            of the country: Transylvania, Banat, Dobrogea and Bucovina.
          </h5>

          <h3>Hungarian community</h3>

          <h5 className="article-text">
            The Hungarian community is present in counties such as: Bihor, Cluj,
            Alba, Tarnava, Hunedoara, Turda, Miercurea Ciuc, Gheorghieni,
            Targu-Mures, Odorhei, Harghita, Covasna. The Hungarian community of
            us has to study in institutions with mother tongue teaching. Also,
            national radio and television broadcast programs for these
            communities.
          </h5>

          <h3>German community</h3>

          <h5 className="article-text">
            The first Germans settled in our country, throughout the history of
            the Saxons. The Saxons in northwest of Romania are called svabi
            satmareni, the banatians are called svabi banateni. In the area of
            Sibiu, the Saxons are called landleri, and in northern Transylvania
            they are called tipseri. Teaching in German has a long tradition in
            Romania due to the high schools In Transylvania, for example:
            “Samuel von Brukenthal” high school and “Andrei Saguna” high school,
            both in Sibiu, “Johannes Honterus” high school in Brasov, “Joseph
            Haltrich” high school in Sighisoara, “Stefan Ludwig Roth” high
            school in Medias. In Bucharest, a high school with German language
            teaching is the “Goethe” high school. The German community also has
            a daily newspaper, “Allgemeine Deutsche Zeitung”, which appears in
            Brasov, Satu Mare, Banat, Sibiu and Resita.
          </h5>

          <h3>The Turkish minority</h3>

          <h5 className="article-text">
            Most Turks live in the Dobrogea historical area, especially in
            Constanta county, but also in Tulcea county. At the request of
            Turkish and Tatar communities, in preschool and school institutions
            were established teaching classes in Turkish language. At university
            level, teaching in Turkish language is possible at two universities:
            the Ovidius University in Constanta county and the University of
            Bucharest.
          </h5>

          <h3>Russian community</h3>

          <h5 className="article-text">
            Most Russians can be found in Dobrogea, perhaps because they come
            from the center and south of Russia, but there are also small
            numbers in Moldova or Muntenia. The language in which this ethnic
            group communicates is the russion mother tongue. In Romania there
            are 60 schools where mother tongue is taught, especially in Tulcea,
            Constanta, Suceava, Iasi, Braila, Botosani. The Russian community is
            dedicated to programs of national radio and television stations, but
            also to the daily “Zorile”.
          </h5>
        </Col>

        <Col md={6} className="right-section p-3">
          <AboutCardsGrid />
        </Col>
        <RomaniaMap />
      </Row>
    </Container>
  );
}

export default About;
