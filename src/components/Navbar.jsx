import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const MyNavbar = () => {
  return (
    <Navbar className="bg-body-tertiary" expand={false} id="navbar">
      <Container fluid>
        <Navbar.Brand to={"/"}>
          <p className="fs-6">Carmen Romano - Full-stack Developer</p>
        </Navbar.Brand>
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
