import "../style/ProjectCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import appMeteo from "../../public/images/project/appmeather.webp";
import spotify from "../../public/images/project/spotifyClone.webp";
import linkedin from "../../public/images/project/linkedinclone.webp";
import { Container, Image } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const project = [
  {
    name: "Spotify Clone",
    project: spotify,
    description:
      "'Spotify Clone' realizzato interamente in JS Vanilla, offre funzionalità di ricerca, riproduzione e gestione di brani musicali e esplorazione di album e artisti, con un'interfaccia intuitiva e reattiva.",
  },
  {
    name: "LinkedIn Clone",
    project: linkedin,
    description:
      "'LinkedIn Clone' consente agli utenti di creare profili, connettersi, condividere post e interagire con il contenuto. Utilizza React per l'interfaccia utente, Redux per lo stato e un'API personalizzata per la gestione dei dati.",
  },
  {
    name: "App Meteo",
    project: appMeteo,
    description:
      "Questo progetto utilizza l'API di OpenWeather per visualizzare le previsioni meteorologiche. Implementato con React, offre agli utenti informazioni meteorologiche attuali e future in modo intuitivo.",
  },
];
const ProjectCarousel = () => {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: null,
          nextArrow: null,
        },
      },
    ],
  };

  return (
    <Container id="project">
      <h2 className="text-center mx-4">Alcuni dei miei progetti</h2>
      <Slider {...settings}>
        {project.map((project, index) => (
          <div key={index} className="my-5 carouselProject">
            <h3 className="text-center">{project.name}</h3>
            <Image
              src={project.project}
              alt={project.name}
              className="w-100 "
            />
            <p>{project.description}</p>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ProjectCarousel;
