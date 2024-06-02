import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { useState } from "react";
import Skills from "./components/Skills";
import { Container } from "react-bootstrap";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const spinner = document.getElementById("preloader");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setIsLoading(false);
    }, 2000);
  }

  return (
    <>
      {!isLoading && (
        <>
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
