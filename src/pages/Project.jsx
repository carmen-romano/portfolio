import { Col, Container, Image, Row } from "react-bootstrap";
import "../style/project.css";
import appMeteo from "../../public/images/project/appmeather.webp";
import spotify from "../../public/images/project/spotifyClone.webp";
import linkedin from "../../public/images/project/linkedinclone.webp";

import "../style/skillCarousel.css";

let Project = () => {
  const project = [
    {
      name: "Spotify Clone",
      project: spotify,
      description:
        "'Spotify Clone' realizzato interamente in JS Vanilla, offre funzionalità di ricerca, riproduzione e gestione di brani musicali e esplorazione di album e artisti, con un'interfaccia intuitiva e reattiva.",
    },
    {
      name: "LinkedIn Clone",
      project: linkedin,
      description:
        "'LinkedIn Clone' consente agli utenti di creare profili, connettersi, condividere post e interagire con il contenuto. Utilizza React per l'interfaccia utente, Redux per lo stato e un'API personalizzata per la gestione dei dati.",
    },
    {
      name: "App Meteo",
      project: appMeteo,
      description:
        "Questo progetto utilizza l'API di OpenWeather per visualizzare le previsioni meteorologiche. Implementato con React, offre agli utenti informazioni meteorologiche attuali e future in modo intuitivo.",
    },
  ];

  return (
    <Container id="project" className="my-5">
      <hr />
      <h2 className="text-center element-to-watch">Alcuni dei miei progetti</h2>
      <Row>
        {project.map((project, id) => (
          <Col
            key={id}
            className="d-flex-align-content-center element-to-watch"
          >
            <div className="wrapper">
              <div className="container" id="c0">
                <div className="image">
                  <Image src={project.project} className="w-100 mt-3 rounded" />
                </div>
                <div
                  className="story"
                  id="s0"
                  style={{ background: project.linearGradient2 }}
                >
                  <h3>{project.name} </h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Project;
