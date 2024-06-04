import { Col, Container, Image, Row } from "react-bootstrap";
import "../style/project.css";

let Project = () => {
  return (
    <Container id="project" className="my-5">
      <h2 className="text-center">Progetti</h2>
      <Row>
        <Col>
          <div className="wrapper">
            <div className="container" id="c0">
              <div className="image">
                <Image
                  src="/public/images/project/spotifyClone.webp"
                  className="w-100 mt-3 rounded"
                />
              </div>
              <div className="story" id="s0">
                <h3>Spotify Clone </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  dicta repellendus atque quae laboriosam reiciendis eveniet
                  maxime delectus voluptatem rerum veritatis optio, odio
                  corrupti iure qui, non eum, perferendis eligendi.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
