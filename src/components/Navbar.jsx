import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
import Circle from "./Circle";

const MyNavbar = () => {
  return (
    <Navbar className="bg-body-tertiary" expand={false} id="navbar">
      <Container>
        <Navbar.Brand to={"/"}>
          <p className="title fs-6">
            <span className="symbol">{"<"}</span> Carmen Romano
            <span className="symbol mx-2">{"/>"}</span>
          </p>
        </Navbar.Brand>
        <NavLink to={"/"}>
          <Circle />
        </NavLink>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler fs-6"
        >
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex">
            <NavLink to={"/project"}>PROJECT</NavLink>
            <NavLink to={"/contact"}>CONTACT</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
