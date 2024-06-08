import "../style/footer.css";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LiaLinkedinIn } from "react-icons/lia";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center my-4 fs-6" id="footer">
            <span>Designed and Developed by Carmen Romano</span>
            <span className="mx-2">©{currentYear}</span>
            <div className="icons d-flex justify-content-center fs-5">
              <Nav.Link
                href="https://www.linkedin.com/in/carmen-romano-44aa6998/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaLinkedinIn />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/carmen-romano"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4"
              >
                <FiGithub />
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/carmen.romano_?igsh=MWtzeXU5ZWtjc2lnYQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Nav.Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
