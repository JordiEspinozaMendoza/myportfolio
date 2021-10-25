import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { HeroHeaderText, ParagraphHeroHeader } from "utils";
import { TertiaryButton } from "components";
import { octocat } from "assets";
import styled from "styled-components";
import Particles from "react-particles-js";

import "./styles.scss";
const HeroHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.headerHero.background};
  h1 {
    color: ${({ theme }) => theme.headerHero.background};
  }
`;

export const HeaderHero = () => {
  const typedItem = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedItem.current, {
      strings: [
        "Frontend Developer",
        "GitHub Campus Expert",
        "Padawan at <strong>Hackademy</strong>",
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
                value: 15,
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
        <div className="header__hero-text-buttons">
          <TertiaryButton>Projects</TertiaryButton>
          <TertiaryButton>Contact</TertiaryButton>
        </div>
      </div>
      <div className="avatar">
        <img src={octocat} />
      </div>
    </HeroHeaderContainer>
  );
};
