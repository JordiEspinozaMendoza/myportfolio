// ? Icons
import {
  DiReact,
  DiDjango,
  DiHeroku,
  DiCss3,
  DiSass,
  DiJava,
  DiPython,
  DiGit,
  DiScrum,
} from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiStyledcomponents,
  SiRedux,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import { useHistory } from "react-router-dom";

const listTechs = [
  {
    name: "React",
    icon: <DiReact />,
    link: "https://reactjs.org/",
  },
  {
    name: "HTML5",
    icon: <AiFillHtml5 />,
    link: "https://www.w3.org/html/",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Python",
    icon: <DiPython />,
    link: "https://www.python.org/",
  },
  {
    name: "Django",
    icon: <DiDjango />,
    link: "https://www.djangoproject.com/",
  },
  {
    name: "SCRUM",
    icon: <DiScrum />,
    link: "https://scrum.org/",
  },
  {
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode />,
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Git",
    icon: <DiGit />,
    link: "https://git-scm.com/",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com",
  },
  {
    name: "Heroku",
    icon: <DiHeroku />,
    link: "https://www.heroku.com/",
  },
  {
    name: "CSS3",
    icon: <DiCss3 />,
    link: "https://www.w3.org/Style/CSS/",
  },
  {
    name: "SCSS",
    icon: <DiSass />,
    link: "https://sass-lang.com/",
  },
  {
    name: "Java",
    icon: <DiJava />,
    link: "https://www.java.com/",
  },

  {
    name: "Bootstrap",
    icon: <BsFillBootstrapFill />,
    link: "https://getbootstrap.com/",
  },
  {
    name: "Azure",
    icon: <VscAzure />,
    link: "https://azure.microsoft.com/en-us/",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    link: "https://www.mysql.com/",
  },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents />,
    link: "https://styled-components.com/",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    link: "https://redux.js.org/",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    link: "https://www.getpostman.com/",
  },
];
export const Techs = () => {
  return (
    <div className="techs">
      {listTechs.map((tech, index) => (
        <div className="tech" key={index}>
          <a href={tech.link} target="_blank" rel="noopener noreferrer">
            {tech.icon}
          </a>
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
};
