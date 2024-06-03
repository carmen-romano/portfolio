import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Skills from "./components/Skills";
import { Container } from "react-bootstrap";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const spinner = document.getElementById("preloader");
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setIsLoading(false);
      }, 2000);
    }
    const handleMouseMove = e => {
      const circle = document.querySelector(".cursor");
      circle.style.top = e.clientY + "px";
      circle.style.left = e.clientX + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          <span className="cursor"></span>
          <MyNavbar />
          <Container>
            <Home />
            <Project />
            <Contact />
            <Skills />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
