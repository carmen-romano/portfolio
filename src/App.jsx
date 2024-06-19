import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import Footer from "./pages/Footer";
import About from "./pages/About";
import ProjectCarousel from "./components/ProjectCarousel";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import Skills from "./components/Skills";

function App() {
  const darkMode = useSelector(state => state.darkMode.darkMode);
  const [isLoading, setIsLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const handleVisibility = () => {
    const elements = document.querySelectorAll(".element-to-watch");
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 0.75) {
        element.classList.add("visible");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    window.addEventListener("DOMContentLoaded", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("DOMContentLoaded", handleVisibility);
    };
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!isLoading && (
        <>
          <span
            className={"cursor " + (darkMode ? "dark-mode" : "light-mode")}
          ></span>

          <Container>
            <MyNavbar />
            <Home />
            {showButton && (
              <IoIosArrowUp
                className={
                  "back-to-top position-fixed fs-3 mx-3 rounded-4 " +
                  (darkMode ? "fill-black" : "fill-white ")
                }
                onClick={scrollToTop}
              />
            )}
            <About />
            <ProjectCarousel />
            <Skills />

            <Footer />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
