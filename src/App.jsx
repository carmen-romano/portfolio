import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "./pages/Footer";
import About from "./pages/About";
import ProjectCarousel from "./components/ProjectCarousel";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);

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

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {!isLoading && (
        <>
          <span className="cursor"></span>
          <Container>
            <MyNavbar />
            <Home />
            {/* {showButton && (
              <h1 className="back-to-top position-fixed" onClick={scrollToTop}>
                CIAOO
              </h1>
            )} */}
            <ProjectCarousel />

            <About />
            <Footer />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
