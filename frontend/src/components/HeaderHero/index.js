import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { HeroHeaderText, ParagraphHeroHeader } from "utils";
import { TertiaryButton } from "components";
import { octocat } from "assets";
import styled from "styled-components";
import Particles from "react-particles-js";

// ? Icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import "./styles.scss";
const HeroHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.headerHero.background};
  h1 {
    color: ${({ theme }) => theme.headerHero.background};
  }
  .header__hero-social-buttons {
    color: ${({ theme }) => theme.headerHero.color};
  }
`;

export const HeaderHero = ({ scrolls }) => {
  const typedItem = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedItem.current, {
      strings: [
        "Frontend Developer",
        "GitHub Campus Expert",
        "Padawan at <a href='https://hackademy.lat/' rel='noopener noreferrer' target='_blank' >Hackademy</a>",
      ],
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 150,
      loop: true,
    });
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <HeroHeaderContainer className="header__hero">
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 25,
              },
              size: {
                value: 2,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
      <div className="header__hero-text">
        <HeroHeaderText>Jordi Espinoza</HeroHeaderText>
        <div className="header__hero-text-typed">
          <ParagraphHeroHeader ref={typedItem}></ParagraphHeroHeader>
        </div>
        <div className="header__hero-social-buttons">
          <AiFillGithub
            onClick={() =>
              window.open("https://github.com/JordiEspinozaMendoza", "_blank")
            }
          />
          <AiFillLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jordiespinoza/",
                "_blank"
              )
            }
          />
          <AiFillTwitterCircle
            onClick={() =>
              window.open("https://twitter.com/itsme_jordi", "_blank")
            }
          />
          <a href="mailto:jordi8101@gmail.com">
            <MdEmail />
          </a>
        </div>
        <div className="header__hero-text-buttons">
          <TertiaryButton onClick={scrolls.projects}>Projects</TertiaryButton>
          <TertiaryButton
            onClick={() => {
              window.open(
                "https://tectijuanabc-my.sharepoint.com/:b:/g/personal/l19211633_tijuana_tecnm_mx/EUgQmi3-HFxKgEc7WKBNZRgBrnP6vtO1An_oXMhhpcsyjw?e=N113Ca",
                "_blank",
                "noopener noreferrer"
              );
            }}
          >
            View CV
          </TertiaryButton>
        </div>
      </div>
      <div className="avatar">
        <img src={octocat} />
      </div>
    </HeroHeaderContainer>
  );
};
