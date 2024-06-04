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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et",
      linearGradient:
        "linear-gradient(to bottom, #25bf5bd0 30%, #3da662c5 100%)",
      linearGradient2:
        "linear-gradient(to bottom, #41cf7242 0%, #1d62356e 40%)",
    },
    {
      name: "LinkedIn Clone",
      project: linkedin,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et",
      linearGradient:
        "linear-gradient(to bottom, #1068c1bf 30%, #3772ad  100%)",
      linearGradient2:
        "linear-gradient(to bottom, #3d8ad7  0%, #0a66c28d  40%)",
    },
    {
      name: "App Meteo",
      project: appMeteo,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et",
      linearGradient: "linear-gradient(to bottom, #bdeefe 30%, #2ab9e9c7 100%)",
      linearGradient2:
        "linear-gradient(to bottom, #a9e9ff6e 0%, #41abcf95 40%)",
    },
  ];

  return (
    <Container id="project" className="my-5">
      <h2 className="text-center">Progetti</h2>
      <Row>
        {project.map((project, id) => (
          <Col key={id}>
            <div className="wrapper">
              <div
                className="container"
                id="c0"
                style={{ background: project.linearGradient }}
              >
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
