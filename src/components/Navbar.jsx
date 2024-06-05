import { Container, Nav, Navbar } from "react-bootstrap";
import "../style/navbar.css";
import Circle from "./Circle";

const MyNavbar = () => {
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" id="navbar">
      <Container>
        <Navbar.Brand onClick={() => scrollToSection("home")}>
          <div>
            <p className="title fs-6">
              <span className="symbol">{"<"}</span> Carmen Romano
              <span className="symbol mx-2">{"/>"}</span>
            </p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection("features")}>
              <Circle />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => scrollToSection("about")}>ABOUT</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("project")}>
              Progetti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
