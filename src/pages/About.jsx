import "../style/about.css";
import { BiSolidHandDown } from "react-icons/bi";
import { Col, Container, Row } from "react-bootstrap";

let About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col>
            <div className="my-5">
              <h2 className="text-center">
                Qualcosa su di me
                <BiSolidHandDown className="fs-4 mx-3" />
              </h2>
            </div>

            <p className="fs-4">
              Dopo aver coltivato la mia passione per la programmazione
              attraverso lo studio autonomo, ho deciso di intraprendere un corso
              intensivo di formazione presso Epicode per ampliare e consolidare
              le mie conoscenze nel mondo dello sviluppo web. Le mie esperienze
              lavorative precedenti nel settore vinicolo e in altre sfide
              professionali mi hanno fornito una solida base di competenze
              trasversali, tra cui capacità di{" "}
              <span className="fw-bold">problem solving</span>, gestione del
              tempo e collaborazione efficace. Se vuoi saperne di più sulle mie
              esperienze nello sviluppo o sei interessato a una collaborazione,
              <span className="fw-bold"> colleghiamoci!</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
