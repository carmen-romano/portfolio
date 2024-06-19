import { Container, Nav, Navbar } from "react-bootstrap";
import "../style/navbar.css";
import Circle from "./Circle";
import { CiDark, CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/actions";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.darkMode);
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
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
            <Nav.Link onClick={() => scrollToSection("about")}>
              Su di me
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("project")}>
              Progetti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {darkMode ? (
          <CiDark onClick={handleToggleDarkMode} className=" mx-3 fs-4" />
        ) : (
          <CiLight onClick={handleToggleDarkMode} className="mx-3 fs-4" />
        )}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
