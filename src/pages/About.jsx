import "../style/about.css";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import photo from "../../public/images/project/carmenromanoprofile.jpeg";
let About = () => {
  return (
    <div id="about">
      <Container>
        <Row id="row1">
          <hr />
          <Col xs={12} md={12}>
            <div className="photo mx-auto">
              <img
                src={photo}
                className="profile-photo"
                alt="carmenromanoprofile"
                style={{
                  width: "17%",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "150px",
                }}
              ></img>
            </div>
          </Col>
          <Col xs={12} md={12}>
            <h2 className="text-center fs-2 my-5">Chi sono</h2>

            <div>
              <p className="fs-4 text-center" id="paragrafo1">
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
              <h2 className="fs-5 fw-light text-center mt-4">
                <a
                  href="/images/CarmenRomano.pdf"
                  download="Curriculum_Vitae_Carmen_Romano.pdf"
                  className="text-decoration-none text-dark"
                >
                  <FaArrowRight className="fs-5 mx-2" />
                  Download CV
                </a>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="mt-5" />
    </div>
  );
};

export default About;
