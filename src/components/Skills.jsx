import cssLogo from "/images/skills/css3-original-wordmark.svg";
import gitLogo from "../../public/images/skills/git-scm-icon.svg";
import htmlLogo from "../../public/images/skills/html5-original-wordmark.svg";
import javaLogo from "../../public/images/skills/java-original.svg";
import javascriptLogo from "../../public/images/skills/javascript-original .svg";
import photoshopLogo from "../../public/images/skills/photoshop-line.svg";
import postmanLogo from "../../public/images/skills/getpostman-icon.svg";
import reactLogo from "../../public/images/skills/react-original-wordmark.svg";
import typescriptLogo from "../../public/images/skills/typescript-original.svg";
import vuejsLogo from "../../public/images/skills/Vue.js-Logo.wine.svg";
import bootstrapLogo from "../../public/images/skills/Bootstrap_(front-end_framework)-Logo.wine.svg";
import postgreSql from "../../public/images/skills/PostgreSQL-Logo.wine.svg";
import { Image } from "react-bootstrap";
import "../style/skillCarousel.css";

const Skills = () => {
  const skills = [
    { name: "CSS", logo: cssLogo },
    { name: "Git", logo: gitLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "Java", logo: javaLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "Photoshop", logo: photoshopLogo },
    { name: "Postman", logo: postmanLogo },
    { name: "React", logo: reactLogo },
    { name: "TypeScript", logo: typescriptLogo },
    { name: "Vue.js", logo: vuejsLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "PostgreSQL", logo: postgreSql },
    { name: "CSS", logo: cssLogo },
    { name: "Git", logo: gitLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "Java", logo: javaLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "Photoshop", logo: photoshopLogo },
    { name: "Postman", logo: postmanLogo },
    { name: "React", logo: reactLogo },
    { name: "TypeScript", logo: typescriptLogo },
    { name: "Vue.js", logo: vuejsLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "PostgreSQL", logo: postgreSql },
  ];

  return (
    <>
      <h2 className="text-center my-5 border-top pt-3">Skills</h2>
      <div id="skills" className="carousel-container-skill">
        <div className="carousel-track-skill">
          {skills.map((skill, id) => (
            <div key={id} className="carousel-card-skill">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={80}
                height={80}
                className="mt-2"
              />
              <p className="mt-2 fs-6">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
