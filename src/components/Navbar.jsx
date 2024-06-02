import { Container, Nav, Navbar } from "react-bootstrap";
import "../style/navbar.css";
import Circle from "./Circle";

const MyNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      data-bs-theme="light"
      id="navbar"
    >
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#features">
              <Circle />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="title">
              PROJECT
            </Nav.Link>
            <Nav.Link href="#memes" className="title">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
