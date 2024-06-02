import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { useState } from "react";

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
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
