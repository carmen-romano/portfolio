import "../style/ProjectCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import appQuiz from "../../public/images/project/quiz-app.webp";
import appMeteo from "../../public/images/project/appmeather.webp";
import spotify from "../../public/images/project/spotifyClone.webp";
import linkedin from "../../public/images/project/linkedinclone.webp";
import pokedex from "../../public/images/project/pokedex_.webp";
import { Container, Image, Nav } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { useSelector } from "react-redux";

const project = [
  {
    name: "Spotify Clone",
    project: spotify,
    description:
      "Questo progetto realizzato interamente in JS Vanilla, offre funzionalità di ricerca, riproduzione e gestione di brani musicali e esplorazione di album e artisti, con un'interfaccia intuitiva e reattiva.",

    link: "https://github.com/carmen-romano/spotifyClone",
    demo: "https://spotifyclone-carmenromano.netlify.app/",
  },
  {
    name: "LinkedIn Clone",
    project: linkedin,
    description:
      "Questo progetto consente agli utenti di creare profili, condividere post e interagire con il contenuto. Utilizza React per l'interfaccia utente, Redux per lo stato e un'API personalizzata per la gestione dei dati.",
    link: "https://github.com/ABBA3124/u3-w4-d1-al-5-build-week-3-linkedin",
  },
  {
    name: "App Meteo",
    project: appMeteo,
    description:
      "Questo progetto utilizza l'API di OpenWeather per visualizzare le previsioni meteorologiche. Implementato con React, offre agli utenti informazioni meteorologiche attuali e future in modo intuitivo.",
    link: "https://github.com/carmen-romano/u3-w2-d5-weather",
    demo: "https://weather-app-carmen-romano.netlify.app",
  },
  {
    name: "App Quiz",
    project: appQuiz,
    description:
      "Questo progetto, creato con JS Vanilla, presenta un timer per ogni domanda e visualizza la percentuale di risposte corrette. Utilizzando localStorage, può memorizzare temporaneamente il progresso degli utenti.",
    link: "https://github.com/AlessioVulpinari/Group_6_Epicode",
  },
  {
    name: "Pokedex",
    project: pokedex,
    description:
      "Un Pokédex dinamico creato con JavaScript, che offre agli utenti la possibilità di esplorare e filtrare una vasta gamma di Pokémon, permettendo loro di trovare facilmente i loro preferiti e scoprire le informazioni essenziali su ciascuno di essi",
    link: "https://github.com/AlessioVulpinari/Group_6_Epicode",
  },
];

const ProjectCarousel = () => {
  const darkMode = useSelector(state => state.darkMode.darkMode);
  const settings = {
    dots: false,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <Container id="project" className={darkMode ? "dark-mode" : "light-mode"}>
      <h2 className="text-center mx-4 element-to-watch">
        Alcuni dei miei progetti
      </h2>
      <div className="custom-slider">
        <Slider {...settings}>
          {project.map((project, index) => (
            <div key={index} className="my-5 carouselProject element-to-watch">
              <div className="carousel-containe ">
                <Nav.Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center"
                >
                  <FiGithub className="github-icon" />
                </Nav.Link>
                <Nav.Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center"
                >
                  <p className="fs-6 fw-bolder">
                    {project.demo ? "Demo" : " "}
                  </p>
                </Nav.Link>
                <h3 className="text-start">{project.name}</h3>
                <Image src={project.project} alt={project.name} />
                <p className="mt-3">{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default ProjectCarousel;
