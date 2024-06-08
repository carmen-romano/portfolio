import { Col, Container, Nav, Row } from "react-bootstrap";
import "../style/home.css";
import { LiaLinkedinIn } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Home = () => {
  const [isWaving, setIsWaving] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "JUNIOR FULL STACK DEVELOPER";

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving(wave => !wave);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <Container id="home">
      <div className="my-5">
        <Row className="align-items-center">
          <Col md={8}>
            <div>
              <h1 className="home-name">
                Ciao
                <span className={`hand mx-2 ${isWaving ? "wave" : ""}`}>
                  👋🏻
                </span>
                sono Carmen!
              </h1>
              <h2 className="title">{displayedText}</h2>
            </div>
            <div className="icons d-flex my-5">
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
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
