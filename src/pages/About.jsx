import "../style/about.css";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FaArrowDownLong } from "react-icons/fa6";

let About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <hr />
          <div className="my-5">
            <h2 className="text-center ">Qualcosa su di me</h2>
          </div>
          <Col>
            <div>
              <p className="fs-4">
                Dopo aver coltivato la mia passione per la programmazione
                attraverso lo studio autonomo, ho deciso di intraprendere un
                corso intensivo di formazione presso Epicode per ampliare e
                consolidare le mie conoscenze nel mondo dello sviluppo web. Le
                mie esperienze lavorative precedenti nel settore vinicolo e in
                altre sfide professionali mi hanno fornito una solida base di
                competenze trasversali, tra cui capacità di{" "}
                <span className="fw-bold">problem solving</span>, gestione del
                tempo e team working. Se vuoi saperne di più sulle mie
                esperienze nello sviluppo o sei interessato a una
                collaborazione,
                <Nav.Link
                  href="https://www.linkedin.com/in/carmen-romano-44aa6998/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" mx-2 fw-bold d-inline-block"
                >
                  colleghiamoci!
                </Nav.Link>
              </p>
              <h2 className="fs-5 fw-light">
                <a
                  href="public/images/Curriculum Carmen Romano.pdf"
                  download="Curriculum_Vitae_Carmen_Romano.pdf"
                  className="text-decoration-none text-dark"
                >
                  <FaArrowDownLong className="fs-5 mx-2" />
                  Curriculum Vitae
                </a>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
